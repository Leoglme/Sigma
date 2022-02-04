export default {
  name: "Navbar",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key: any, keyPath: any) {
      console.log(key, keyPath);
    }
  }
}
