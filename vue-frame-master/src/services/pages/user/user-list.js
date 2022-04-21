import { mapGetters } from "vuex";
export default {
    data() {
        return {
            keyword: '',
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
                    value: "created_user",
                }/* ,
                {
                    text: "Operation",
                    value: "operation",
                }, */
            ],
            userList: [],
            showList: [],
        };
    },
    computed: {
        ...mapGetters(["isLoggedIn", "userId", "userType"]),
        headers() {
            /* if (!this.isLoggedIn) {
                return this.headerList.slice(0, this.headerList.length - 1);
            } else {
                return this.headerList;
            } */
            if (this.userType == 0) {
                this.headerList.push({
                    text: "Operation",
                    value: "operation",
                });
                return this.headerList;
            } else {
                return this.headerList;
            }
        }
    },
    created() {
        this.$axios
            .get(`http://localhost:8000/api/users/`)
            .then((response) => {
                this.userList = response.data;
                var i = 0
                var unixTime, date;
                var adminList = [];
                for (i = 0; i < this.userList.length; i++) {
                    unixTime = this.userList[i].dob;
                    date = new Date(unixTime);
                    this.userList[i].dob = date.toLocaleDateString();
                    if (this.userList[i].type == 0) {
                        adminList.push(this.userList[i])
                    }
                }

                this.userList = this.userList.filter((user) => {
                    return (
                        user.deleted_user_id === null && user.deleted_at === null
                    )
                });
                var j;
                this.showList = this.userList
                for (i = 0; i < this.showList.length; i++) {
                    for (j = 0; j < adminList.length; j++) {
                        if(this.showList[i].created_user_id === adminList[j].id) {
                            this.showList[i].created_user = adminList[j].name
                        }
                    }
                }
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
            this.showList = this.userList.filter(user => {
                return (
                    (user.name.toLowerCase().includes(this.keyword.toLowerCase()) ||
                        user.email.toLowerCase().includes(this.keyword.toLowerCase()) ||
                        user.address.toLowerCase().includes(this.keyword.toLowerCase())) &&
                    user.deleted_user_id === null && user.deleted_at === null
                )
            });
        },
        deleteUser(id) {
            if (confirm('Are you sure you want to delete this user?')) {
                this.$axios
                    .patch("/users/" + id + "/edit", {
                        "deleted_user_id": this.userId,
                        "deleted_at": new Date().getTime(),
                    })
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
