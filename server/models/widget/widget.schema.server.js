const mongoose = require ("mongoose");

const WidgetSchema = mongoose.Schema({
    name: String,
    widgetType: {type: String, enum: 	
        ['HEADING', 'IMAGE', 'YOUTUBE']},
    text: String,
    url: String,
    width: String,
    size: Number,
    pageId: {type: mongoose.Schema.Types.ObjectId,
    ref: "PageModel"},
    dateCreated: {type: Date, default: Date.now}
}, {collection: "widget"}
);

module.exports = WidgetSchema;