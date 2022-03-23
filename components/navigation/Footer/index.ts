import LogoSmall from "~/components/common/LogoSmall/index.vue";
import footer from '~/static/data/navs.json';
import moment from "moment/moment";
import website from '~/static/data/website.json'

export default  {
  name: "Footer",
  data(){
    return {
      links: footer.footer.links,
      current_year: moment().format('YYYY'),
      website_name: website.name,
      website_author: {
        name: website.author,
        url: website.author_website
      },
      social_media: footer.footer.social_media
    }
  },
  components: {LogoSmall}
}
