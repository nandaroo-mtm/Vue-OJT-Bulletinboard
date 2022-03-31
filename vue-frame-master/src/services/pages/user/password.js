import { mapGetters } from "vuex"

export default {
    data() {
        return {
            user: {},
            oldPassword: '',
            valid: true,
            newPassword: '',
            confirmPassword: '',
            oldPasswordRules: [
                value => !!value || 'Please fill old password!',
            ],
            passwordRules: [
                value => !!value || 'Please fill new password!',
                value => (value && value.length >= 6) || 'Password can be at least 6 characters!',
            ],
            confirmPasswordRules: [
                value => !!value || 'Please fill confirm password!',
                value =>
                    value === this.newPassword || 'The password confirmation does not match.',
            ],
        }
    },
    computed: {
        ...mapGetters(['userId'])
    },
    methods: {
        changePassword() {
            this.$axios.get(`http://localhost:8000/api/users/${this.userId}`)
                .then((response) => {
                    this.user = response.data;
                    this.$axios.post(`http://localhost:8000/api/login`, {
                        email: this.user.email,
                        password: this.oldPassword
                    })
                        .then(() => {
                            this.$axios.patch(`http://localhost:8000/api/users/${this.userId}/edit`, {
                                password: this.newPassword
                            })
                                .then(() => {
                                    this.$router.go(-1)
                                })
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
}