import Logo from "~/components/common/Logo/index.vue";


export default {
  name: "Navbar",
  components: {Logo},
  data() {
    return {
      menuOpened: false,
      swiperOption: {
        initialSlide: 1,
        resistanceRatio: 0,
        slidesPerView: 'auto'
      },
      on: {
        slideChange: () => {
          console.log("SLIDER")
          this.menuOpened = !this.menuOpened
        }
      }
    }
  },
  methods: {
    toggleMenu(event) {
      console.log("togglemenu")
      this.menuOpened = !this.menuOpened;
      this.menuOpened
        ? this.$refs.swiperNav.$swiper.slidePrev()
        : this.$refs.swiperNav.$swiper.slideNext()
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
