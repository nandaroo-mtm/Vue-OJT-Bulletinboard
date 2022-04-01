export default {
    data() {
        return {
            valid: true,
            csvFile:null,
            csvData:[],
            fileRules: [
                value => !!value || 'Please choose file!',
            ],
        }
    },
    methods: {

    }
}