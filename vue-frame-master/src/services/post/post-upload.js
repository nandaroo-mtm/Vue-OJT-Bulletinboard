import Axios from "axios";
import store from "../../store";
export default {
    data() {
        return {
            valid: false,
            csvFile: null,
            csvData: [],
            fileRules: [
                value => !!value || 'Please choose file!',
            ],
        }
    },
    methods: {
        uploadCsv() {
            var input = this.csvFile;
            const reader = new FileReader();
            reader.onload = function (e) {
                const str = e.target.result;
                const headers = str.slice(0, str.indexOf("\n")).split(/[,\r]+/);
                var userId=store.getters.userId;

                const rows = str.slice(str.indexOf("\n") + 1).split("\n");
                const arr = rows.map(function (row) {
                    const values = row.split(',');
                    const el = headers.reduce(function (object, header, index) {
                        object[header] = values[index];
                        return object;
                    }, {});
                    return el;
                });
                arr.forEach(post => {
                    Axios.post("http://localhost:8000/api/posts/create", {
                        title: post.title,
                        description: post.description,
                        created_user_id: userId,
                        updated_user_id: userId,
                        deleted_user_id: null,
                        deleted_at: null,
                        status: 1,
                    })
                        .catch((err) => {
                            console.log(err);
                        });
                });
            };

            reader.readAsText(input);
            this.$router.go(-1)
        }
    }
}