import { mapGetters } from "vuex";
export default {
    data() {
        return {
            keyword:'',
            postInfo: null,
            dialogTitle: "",
            dialog: false,
            isDeleteDialog: false,
            headerList: [
                {
                    text: "ID",
                    align: "start",
                    value: "id",
                },
                {
                    text: "Name",
                    value: "name",
                },
                {
                    text: "Email",
                    value: "email",
                },
                {
                    text: "Phone No",
                    value: "phone",
                },
                {
                    text: "Address",
                    value: "address",
                },
                {
                    text: "Date Of Birth",
                    value: "dob",
                },
                {
                    text: "Created User",
                    value: "created_user_id",
                },
                {
                    text: "Operation",
                    value: "operation",
                },
            ],
            userList: [],
            showList: [],
        };
    },
    computed: {
        ...mapGetters(["isLoggedIn"]),
        headers() {
            if (!this.isLoggedIn) {
                return this.headerList.slice(0, this.headerList.length - 1);
            } else {
                return this.headerList;
            }
        }
    },
    created() {
        this.$axios
            .get("/users")
            .then((response) => {
                this.userList = response.data;
                
                var i = 0
                var dob,dateString,currentTime,month,day,year,date;
                for (i = 0; i < this.userList.length; i++) {
                    dob = this.userList[i].dob;
                    dateString = `Date(${dob})`.substr(6);
                    currentTime = new Date(parseInt(dateString));
                    month = currentTime.getMonth() + 1;
                    day = currentTime.getDate();
                    year = currentTime.getFullYear();
                    date = day + "/" + month + "/" + year;
                    this.userList[i].dob = date;
                }
                this.showList = this.userList;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    methods: {
        /**
         * This is to filter posts of datatable.
         * @returns void
         */
         filterUsers() {
             console.log(this.name);
            this.showList = this.userList.filter((user) => {
                return (
                    user.name.toLowerCase().includes(this.keyword.toLowerCase()) ||
                    user.email.toLowerCase().includes(this.keyword.toLowerCase()) ||
                    user.address.toLowerCase().includes(this.keyword.toLowerCase())
                );
            });
            console.log(this.showList)
        },
        deletePost(id) {
            if (confirm('Are you sure you want to delete this item?')) {
                this.$axios
                    .delete("/posts/" + id + "/delete")
                    .then((response) => {
                        console.log(response)
                        this.$router.go()
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }

        }
    },
};
