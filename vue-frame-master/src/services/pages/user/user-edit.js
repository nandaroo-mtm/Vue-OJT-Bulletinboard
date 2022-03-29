import { mapGetters } from "vuex";
export default {
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            dob: '',
            type: '',
            address: '',
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
    created() {
        this.$axios.get(`http://localhost:8000/api/users/${this.$route.params.userId}/show`)
            .then((response) => {
                var user = response.data;
                var d = new Date(user.dob * 1000)
                var month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();

                if (month.length < 2)
                    month = '0' + month;
                if (day.length < 2)
                    day = '0' + day;
                this.name=user.name,
                this.email=user.email,
                this.phone=user.phone,
                this.address=user.address,
                this.type=user.type,
                this.dob = [year, month, day].join('-');

            })
    },
    methods: {
        confirm() {
            this.dialog = true
        },
        userEdit(){
            this.$axios.patch(`http://localhost:8000/api/users/${this.$route.params.userId}/edit`,{
                name: this.name,
                email: this.email,
                address: this.address,
                phone: this.phone,
                type: this.type,
                dob: Math.floor(new Date(this.dob).getTime() / 1000),
                created_user_id: 1,
                updated_user_id: this.userId,
            })
            .then(()=> {
                this.$router.push('/user/list')
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
}