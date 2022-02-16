import SkeletonTabs from "~/components/Skeleton/SkeletonTabs/index.vue";
import reglement from "@/data/reglement.json"
import replace from "~/mixins/replace";
import router from "~/mixins/router";
export default {
  name: "ReglementLegalPage",
  mixins: [replace, router],
  components: {SkeletonTabs},
  data() {
    return {
      currentTabs: 'criminel',
      parentTabName: "illegal",
      defaultTab: "criminel",
      reglement: reglement.illegal,
      loaded: false,
      tabs: [
        {
          name: "criminel",
          to: "criminel"
        },
        {
          name: "gang",
          to: "gang"
        },
        {
          name: "organisation",
          to: "organisation"
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
