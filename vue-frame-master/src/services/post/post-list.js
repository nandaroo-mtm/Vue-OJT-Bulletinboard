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
                    text: "Post Title",
                    value: "title",
                },
                {
                    text: "Post Desciption",
                    value: "description",
                },
                {
                    text: "Posted User Id",
                    value: "created_user_id",
                },
                {
                    text: "Operation",
                    value: "operation",
                },
            ],
            postList: [],
            showList: [],
        };
    },
    computed: {
        ...mapGetters(["isLoggedIn", "userId"]),
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
            .get("http://localhost:8000/api/posts")
            .then((response) => {
                this.postList = response.data;
                this.postList = this.postList.filter((post) => {
                    return (
                        post.deleted_user_id === null && post.deleted_at === null
                    )
                })
                this.showList = this.postList
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
        filterPosts() {
            this.showList = this.postList.filter((post) => {
                return (
                    post.title.toLowerCase().includes(this.keyword.toLowerCase()) ||
                    post.description.toLowerCase().includes(this.keyword.toLowerCase())
                );
            });
        },
        deletePost(id) {
            if (confirm('Are you sure you want to delete this item?')) {
                this.$axios
                    .patch("/posts/" + id + "/edit", {
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

        },
        downloadCsvFile() {
            var csv = 'title,description\n';
            var arr = []

            this.postList.forEach(function (row) {
                arr.push([
                    row.title, row.description
                ])
            });

            arr.forEach(function (row) {
                csv += row.join(',');
                csv += "\n";
            });
            
            var hiddenElement = document.createElement('a');
            hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
            hiddenElement.target = '_blank';
            hiddenElement.download = 'postsList.csv';
            hiddenElement.click();
        }
    },
};
