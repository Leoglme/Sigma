import SkeletonTabs from "~/components/Skeleton/SkeletonTabs/index.vue";
import reglement from "@/data/reglement.json"
import replace from "~/mixins/replace";
export default {
  name: "ReglementGeneralPage",
  mixins: [replace],
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
    const splitPath = this.$route.path.split('/').filter(e => e !== "");
    const name = splitPath[splitPath.length - 1];

    this.currentTabs = (name === this.parentTabName ? this.defaultTab : name)
    this.loaded = true;
  },
  watch: {
    $route(to) {
      const splitPath = to.path.split('/');
      this.currentTabs = splitPath[splitPath.length - 1]
    }
  },
  computed: {
    routeName() {
      const splitPath = this.$route.path.split('/').filter(e => e !== "");
      return splitPath[splitPath.length - 1];
    },
    description(): string{
      return this.breakReplace(this.reglement.description)
    }
  },
}
