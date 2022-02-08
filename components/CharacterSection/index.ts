import sections from "@/data/sections.json"
export default {
  name: "CharacterSection",
  computed: {
    characterSection() {
      return sections.find(e => e.id === "characters");
    }
  }
}
