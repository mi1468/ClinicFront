<template>
  <div>
    <!-- Mobile Sidebar -->
    <MobileSidebar v-if="isMobile" />

    <!-- PC Sidebar -->
    <PCSidebar v-else />
  </div>
</template>

<script lang="ts">
import MobileSidebar from "./MobileSidebar.vue";
import PCSidebar from "./PCSidebar.vue";

export default {
  components: {
    MobileSidebar,
    PCSidebar,
  },

  computed: {
    isMobile(): boolean {
      return window.innerWidth <= 960;
    },
  },

  // If you need to handle resize events to dynamically adjust the sidebar
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    handleResize() {
      // Force Vue to re-evaluate the computed property when the window is resized
      this.$forceUpdate();
    },
  },
};
</script>
