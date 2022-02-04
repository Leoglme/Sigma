export default {
  name: "HomeCarousel",
  data(){
    return {
      slides: 3
    }
  },
  computed: {
    settings(){
      return {
        "dots": true,
        "dotsClass": "slick-dots custom-dot-class",
        "edgeFriction": 0.35,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  }
}
