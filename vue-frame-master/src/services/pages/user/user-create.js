export default {
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            dob: '',
            address: '',
            nameRules: [
                value => !!value || 'Please fill user name!',
            ],
            emailRules: [
                value => !!value || 'Please fill email!',
                value=> !value || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'E-mail must be valid'
            ],
            addressRules: [
                value => !!value || 'Please fill address!',
                value => value.length <= 150 || 'Password can be at least 6 characters!',
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
            dateMenu: false
        }
    }
}