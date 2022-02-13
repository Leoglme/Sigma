import SkeletonTabs from "~/components/Skeleton/SkeletonTabs/index.vue";
export default {
  async fetch(){},
  name: "ReglementGeneralPage",
  components: {SkeletonTabs},
  data() {
    return {
      currentTabs: 'lexique',
      parentTabName: "general",
      defaultTab: "lexique",
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
    const splitPath = this.$route.path.split('/');
    const name = splitPath[splitPath.length - 1];

    this.currentTabs = name === this.parentTabName
      ? this.defaultTab
      : splitPath[splitPath.length - 1]
    this.loaded = true;
  },
  watch: {
    $route(to) {
      const splitPath = to.path.split('/');
      this.currentTabs = splitPath[splitPath.length - 1]
    }
  },
  computed: {
    isAppend() {
      const finds = [this.parentTabName, 'index'];
      return finds.includes(this.routeName);
    },
    routeName() {
      const names = this.$route.name.split('-');
      return names[names.length - 1]
    },
    title() {
      if (this.currentTabs === "tags") return "Mots clés"
      return this.capitalizeFirstLetter(this.currentTabs)
    }
  },
}
