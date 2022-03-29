import { mapGetters } from "vuex";
export default {
    data() {
        return {
            post: {},
            userList: [],
            createdUser: '',
        }
    },
    computed: {
        ...mapGetters(["isLoggedIn", "userType", "userName"]),
    },
    created() {
        this.$axios.get(`http://localhost:8000/api/posts/${this.$route.params.postId}/show`)
            .then((response) => {
                this.post = response.data;
                this.post.created_at = new Date(this.post.created_at).toLocaleDateString()
                this.$axios
                    .get(`http://localhost:8000/api/users/`)
                    .then((response) => {
                        this.userList = response.data;
                        var i;
                        var arr = this.userList;
                        for (i = 0; i < arr.length; i++) {
                            if (arr[i].id === this.post.created_user_id) {
                                this.createdUser = arr[i].name;
                                break;
                            }
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
    }
}