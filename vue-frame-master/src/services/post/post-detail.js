import { mapGetters } from "vuex";
export default {
    data(){
        return {
            post:{},
        }
    },
    computed: {
        ...mapGetters(["isLoggedIn", "userType", "userName"]),
    },
    created(){
        this.$axios.get(`http://localhost:8000/api/posts/${ this.$route.params.postId }/show`)
        .then((response) =>{
            this.post=response.data;
        })
    }
}