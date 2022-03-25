import { mapGetters } from "vuex";
export default {
    data() {
        return {
            title: '',
            valid: true,
            description: '',
            dialog: false,
            userId: '',
            userRole: '',
            titleRules: [
                value => !!value || "The title field is required.",
                value => value.length <=50  || "The title field may not be greater than 50 characters!"
            ],
            descriptionRules:[
                value => !!value || "The description field is required."
            ],
        }
    },
    mounted() {
        this.userId = this.$store.getters.userId;
        this.uesrRole = this.$store.getters.userRole;

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
                status: 1,
            })
                .then((response) => {
                    console.log(response)
                    this.$router.push('/post/list');
                })
                .catch((err) => {
                    console.log(err);
                });

        }
    }

}