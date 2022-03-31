import { mapGetters } from "vuex"

export default {
    data(){
        return {
            user:{}
        }
    },
    computed: {
        ...mapGetters(["userId"])
    },
    created(){
        this.$axios.get(`http://localhost:8000/api/users/${this.$store.getters.userId}`)
            .then((response) => {
                this.user = response.data
                var unixTime = this.user.dob;
                var date = new Date(unixTime);
                this.user.dob = date.toLocaleDateString();
            })
    }
}