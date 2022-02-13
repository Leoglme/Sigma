import sections from "~/data/sections.json";

export default {
  name: "Captures",
  async fetch(){},
  computed: {
    captureSection() {
      return sections.find(e => e.id === "captures");
    }
  }
}
