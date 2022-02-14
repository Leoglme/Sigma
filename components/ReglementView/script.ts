import replace from "~/mixins/replace";
import reglement from "~/data/reglement.json";

export default {
  name: "ReglementView",
  mixins: [replace],
  props: {
    name: {type: String, default: null},
    parentTabName: {type: String, default: 'general'}
  },
  data(){
    return {
      reglement: reglement[this.parentTabName]?.rules?.find(e => e.name.toLowerCase() === this.name)
    }
  },
  computed: {
    description(): string {
      if (!this.reglement || !this.reglement.description) return null
      return this.breakReplace(this.capitalizeFirstLetter(this.reglement.description))
    }
  }
}
