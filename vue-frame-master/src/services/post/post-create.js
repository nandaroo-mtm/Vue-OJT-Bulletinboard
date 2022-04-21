import { mapGetters } from "vuex";
export default {
    data() {
        return {
            title: '',
            valid: true,
            description: '',
            dialog: false,
            titleRules: [
                value => !!value || "The title field is required.",
                value => value.length <= 50 || "The title field may not be greater than 50 characters!"
            ],
            descriptionRules: [
                value => !!value || "The description field is required."
            ],
        }
    },
    computed: {
        ...mapGetters(["isLoggedIn", "userType", "userId"]),
    },
    methods: {
        confirm() {
            this.dialog = true;
        },
        postCreate() {
            this.$axios.post("http://localhost:8000/api/posts/create", {
                title: this.title,
                description: this.description,
                created_user_id: this.userId,
                updated_user_id: this.userId,
                deleted_user_id: null,
                deleted_at: null,
                status: 1,
            })
                .then((response) => {
                    console.log(response)
                    this.$router.push('/post/list');
                })
                .catch((err) => {
                    console.log(err);
                });

        },
        clear() {
            this.title = ''
            this.description = ''
        }
    }

}