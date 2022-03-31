import { mapGetters } from "vuex";
//import http from "../../../http-common"

export default {
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            dob: '',
            type: '',
            address: '',
            profile: '',
            dialog: false,
            nameRules: [
                value => !!value || 'Please fill user name!',
            ],
            emailRules: [
                value => !!value || 'Please fill email!',
                value => !value || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'E-mail must be valid'
            ],
            typeRules: [
                value => !!value || 'Please choose user type!',
            ],
            addressRules: [
                value => !!value || 'Please fill address!',
                value => value.length <= 150 || 'Password can be at least 6 characters!',
            ],
            phoneRules: [
                value => !!value || 'Please fill phone number!',
            ],
            dobRules: [
                value => !!value || 'Please fill date of birth!',
            ],
            passwordRules: [
                value => !!value || 'Please fill password!',
                value => (value && value.length >= 6) || 'Password can be at least 6 characters!',
            ],
            confirmPasswordRules: [
                value => !!value || 'Please fill confirm password!',
                value =>
                    value === this.password || 'The password confirmation does not match.',
            ],
            valid: true,
            today: new Date().toISOString().slice(0, 10),
            dateMenu: false,
        }
    },
    computed: {
        ...mapGetters(["userId"]),
    },
    methods: {
        confirm() {
            this.dialog = true;
        },
        userCreate() {
            let formData = new FormData();
            formData.append("file", this.profile);
            formData.append("email", this.email);
            formData.append("password", this.password);
            this.$axios.post(`http://localhost:8000/api/users`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                  }
            })

           /*  this.$axios.post(`http://localhost:8000/api/users`, {
                name: this.name,
                email: this.email,
                address: this.address,
                phone: this.phone,
                type: this.type,
                password: this.password,
                dob: Math.floor(new Date(this.dob).getTime() / 1000),
                created_user_id: this.userId,
                updated_user_id: this.userId,
                deleted_user_id: null,
                deleted_at: null,
            })
                .then(() => {
                    this.dialog = false
                    this.$router.push('/user/list')
                })
                .catch((err) => {
                    console.log(err);
                }); */
        },

    }
}