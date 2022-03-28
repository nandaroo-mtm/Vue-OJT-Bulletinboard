export default {
    data() {
        return {
            user: {}
        }
    },
    created() {
        this.$axios.get(`http://localhost:8000/api/users/${this.$route.params.userId}`)
            .then((response) => {
                this.user = response.data
                var unixTime = this.user.dob;
                var date = new Date(unixTime);
                this.user.dob = date.toLocaleDateString();
                console.log(response.data)
            })
    }
}