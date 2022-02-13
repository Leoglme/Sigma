import Logo from "~/components/common/Logo/index.vue";
import navs from '@/data/navs.json';

interface Link {
  "role": string,
  "name": string,
  "to": string | undefined
}

export default {
  name: "Navbar",
  components: {Logo},
  data() {
    return {
      menuOpened: false,
      links: navs.navbar.links,
      swiperOption: {
        initialSlide: 1,
        resistanceRatio: 0,
        slidesPerView: 'auto'
      }
    }
  }
}
