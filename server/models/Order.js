const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = new Schema(
    {
        userName: {
            type: String
        },
        fullName: {
            type: String
        },
        address: {
            type: String
        },
        phoneNumBer: {
            type: String
        },
        status: {
            type: String
        },
        note: {
            type: String
        },
        listOrder: {
        },
        total: {
            type: String
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("order", Order);
