const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articlesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        reqiured: true
    },
    link: {
        type: String,
        required: true
    }
});

const Articles = mongoose.model("Articles", articlesSchema);

module.exports = Articles;