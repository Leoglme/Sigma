export default {
    data() {
        return {
            matchSm: this.breakpointSm(),
            matchMd: this.breakpointMd(),
            screenWidth: process.browser ? window.innerWidth : null,
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
    },

    methods: {
        onResize() {
            this.screenWidth = window.innerWidth
            this.matchSm = this.breakpointSm()
            this.matchMd = this.breakpointMd()
        },
        breakpointSm() {
            if (!process.browser) return false;
            return window.innerWidth <= 850;
        },
        breakpointMd() {
            if (!process.browser) return false;
            return window.innerWidth <= 768;
        },
    }

}
