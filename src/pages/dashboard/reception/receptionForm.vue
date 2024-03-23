<template>
  <div>
    <div style="height: 50px">
      <h4 style="text-align: center; margin-top: 10px">Patientenaufnahme</h4>
    </div>
    <v-row no-gutters>
      <!-- <v-col> -->
      <SidebarMenu />
      <!-- </v-col> -->
      <v-col style="background: #efefef">
        <v-pagination
          style="background: #ffd512"
          v-model="page"
          :length="maxPage"
          rounded="circle"
        ></v-pagination>
        <div style="background: white; height: 4em"></div>

        <v-container>
          <div style="padding: 1em">
            <div v-for="question in questions" :key="question.id">
              <h2 v-if="question.title" style="margin-top: 2em">
                {{ question.title }}
              </h2>
           
              <!-- Additional rendering based on question type -->
              <template v-if="question.type === 'text'">
               
                <v-text-field
                  style="margin-top: 1em; margin-bottom: 1em; background: white"
                  v-model="formData[question.id]"
                  :required="question.required"
                  :rules="getValidationRules(question)"
                  hide-details="auto"
                  :label="question.question_text"
                ></v-text-field>
              </template>
              <template v-else-if="question.type === 'bool'">
                <!-- Render boolean input -->
                <!-- <input type="checkbox" v-model="formData[question.id]" /> -->
                <div style="margin-top: 1em; margin-down: 1em">
                  <v-checkbox
                    v-model="formData[question.id]"
                    color="primary"
                    style="background: #f6f6f6; height: 3.3em"
                  >
                    <template v-slot:label="{ checked }">
                      <span style="font-weight: bold; color: black">{{
                        question.question_text
                      }}</span>
                    </template>
                  </v-checkbox>
                </div>
              </template>
              <!-- Add more conditionals for other question types -->
            </div>
            <!-- Add a button to submit the form -->
            <button @click="submitForm">Submit</button>
          </div>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import SidebarMenu from "@/components/sidebars/SidebarMenu.vue";
import { checkTokenAndRedirectDashboard } from "@/auth";
import { log } from "console";
import { baseUrl } from "@/config.js";
import { ref } from "vue";

interface Question {
  id: number;
  answer: string;
}

interface FormData {
  [key: string]: string; // Assuming all answers are strings
}

export default defineComponent({
  name: "LoginPage",
  components: {
    SidebarMenu,
  },
  data() {
    return {
      page: 1,
      maxPage: 11,
      rules: [
                value => !!value || 'Required.'
              ],

      questions: [] as Question[], // Initialize as an empty array of Question objects
      formData: {} as FormData, // Initialize as an empty object with FormData type
    };
  },
  methods: {
    getValidationRules(question: Question) {
      const rules = [];
      if (question.required) {
        rules.push((value: string) => !!value || 'This field is required');
      }
      return rules;
    },
    async fetchTemplatePages() {
      const self = this;
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `token ${token}`,
          },
        };
        const response = await axios.get(baseUrl + "templatequestions", config);
        this.questions = response.data.questions;
        console.log(this.questions);

        // Populate formData with answer values
        this.questions.forEach((question) => {
          this.formData[question.id.toString()] = question.answer;
          if (question.type === "bool") {
            // Convert answer to boolean
            self.formData[question.id.toString()] = question.answer === "True";
          } else {
            // For other types, directly assign the answer
            this.formData[question.id.toString()] = question.answer;
          }
        });
      } catch (error) {
        console.error("Error fetching template pages:", error);
      }
    },
    submitForm() {
      // Logic to submit the form data
      console.log("Form Data:", this.formData);
      // Make a POST request to save form data
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `token ${token}`,
        },
      };
      axios
        .post(baseUrl + "savetemplateform", this.formData, config)
        .then((response) => {
          console.log("Form submitted successfully:", response.data);
          // Optionally, you can reset the form data after submission
          // this.formData = {};
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        });
    },
  },

  computed: {
    requiredRule() {
      return [
        value => !!value || 'This field is required' // Custom validation rule
      ];
    }
  },

  created() {
    checkTokenAndRedirectDashboard();
    this.fetchTemplatePages();
  },
});
</script>
