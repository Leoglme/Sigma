import Vue from 'vue'
import reglement from "@/static/data/reglement.json"
import replace from "~/mixins/replace";
export default Vue.extend({
  name: "ReglementPage",
  mixins: [replace],
  data(){
    return {
      reglement
    }
  },
  computed: {
    description(): string{
      return this.breakReplace(this.reglement.description)
    }
  }
})
