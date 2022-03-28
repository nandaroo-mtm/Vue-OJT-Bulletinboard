//import axios from 'axios'
export default {
    data() {
        return {
            title: '',
            valid: true,
            description: '',
            status: false,
            dialog: false,
            post: {},
            userId: '',
            titleRules: [
                value => !!value || "The title field is required.",
                value => value.length <= 50 || "The title field may not be greater than 50 characters!"
            ],
            descriptionRules: [
                value => !!value || "The description field is required."
            ],
        }
    },
    mounted() {
        this.$axios.get(`http://localhost:8000/api/posts/${this.$route.params.postId}/show`)
            .then((response) => {
                this.title = response.data.title;
                this.description = response.data.description;
                this.status = response.data.status;
            })
        this.userId = this.$store.getters.userId
    },
    methods: {
        confirm() {
            this.dialog = true;
        },
        postEdit() {
            this.$axios
                .patch(`http://localhost:8000/api/posts/${this.$route.params.postId}/edit`, {
                    title: this.title,
                    description: this.description,
                    updated_user_id: this.userId,
                    status: this.status
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