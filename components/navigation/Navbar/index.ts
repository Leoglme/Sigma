import Logo from "~/components/common/Logo/index.vue";


export default {
  name: "Navbar",
  components: {Logo},
  data() {
    return {
      activeIndex: '/hello',
      isActive: false
    };
  },

  methods: {
    handleSelect(key: any, keyPath: any) {
      console.log(key, keyPath);
    },
    select() {
      this.isActive = !this.isActive;
    }
  }
}
