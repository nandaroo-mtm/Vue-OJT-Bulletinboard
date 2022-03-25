export default {
    data(){
        return {
            user:{}
        }
    },
    created(){
        this.$axios.get(`http://localhost:8000/api/users/${this.$route.params.userId}`)
        .then((response)=> {
            this.user=response.data
            console.log(response.data)
        })
    }
}