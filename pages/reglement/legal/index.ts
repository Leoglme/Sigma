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
      currentTabs: 'civil',
      parentTabName: "legal",
      defaultTab: "civil",
      reglement: reglement.legal,
      loaded: false,
      tabs: [
        {
          name: "civil",
          to: "civil"
        },
        {
          name: "LSPD/BCSO",
          to: "lspd-bcso"
        },
        {
          name: "ems",
          to: "ems"
        },
        {
          name: "entreprises",
          to: "entreprises"
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
