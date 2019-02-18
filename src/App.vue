<template>
  <div>
    <loading v-show="bLoading"></loading>
    <transition enter-active-class="animated fadeIn">
      <router-view></router-view>
    </transition>
    <footbar v-show="bFoot"></footbar>
    <!-- <sass-component></sass-component> -->
  </div>
</template>

<script>
import "vue-swipe/dist/vue-swipe.css";
import home from "@/components/home";
import footbar from "@/components/footbar";
import { mapGetters } from "vuex";
import * as types from "./store/types";
import SassComponent from "./components/sass-component";

export default {
  name: "app",
  components: { home, footbar, SassComponent },
  computed: mapGetters(["bFoot", "bLoading"]),
  watch: {
    $route: {
      handler: function(to) {
        let path = to.path;
        if (/home|shop|shops/.test(path)) {
          this.$store.dispatch(types.VIEW_FOOT, true);
        }
        if (/proDetail|login|reg/.test(path)) {
          this.$store.dispatch(types.VIEW_FOOT, false);
        }
        if (/my/.test(path)) {
          this.$store.dispatch(types.VIEW_FOOT, true);
        }
      },
      immediate: true
    }
  }
};
</script>
