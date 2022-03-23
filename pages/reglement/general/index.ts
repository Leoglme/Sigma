import SkeletonTabs from "~/components/Skeleton/SkeletonTabs/index.vue";
import reglement from "@/static/data/reglement.json"
import replace from "~/mixins/replace";
import router from "~/mixins/router";
export default {
  name: "ReglementGeneralPage",
  mixins: [replace, router],
  components: {SkeletonTabs},
  data() {
    return {
      currentTabs: 'lexique',
      parentTabName: "general",
      defaultTab: "lexique",
      reglement: reglement.general,
      loaded: false,
      tabs: [
        {
          name: "lexique",
          to: "lexique"
        },
        {
          name: "zones",
          to: "zones"
        },
        {
          name: "interdictions",
          to: "interdictions"
        },
        {
          name: "mort rp",
          to: "mort-rp"
        },
        {
          name: "coma",
          to: "coma"
        }
      ]
    };
  },
  beforeMount() {
    this.currentTabs = (this.routeName === this.parentTabName ? this.defaultTab : this.routeName)
    this.loaded = true;
  },
  watch: {
    $route(to) {
      const splitPath = to.path.split('/');
      this.currentTabs = splitPath[splitPath.length - 1]
    }
  },
  computed: {
    description(): string{
      return this.breakReplace(this.reglement.description)
    }
  },
}
