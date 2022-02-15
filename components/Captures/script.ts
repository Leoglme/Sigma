import sections from "~/data/sections.json";
import media from "~/mixins/media";

export default {
  name: "Captures",
  async fetch(){},
  mixins: [media],
  computed: {
    captureSection() {
      return sections.find(e => e.id === "captures");
    }
  }
}
