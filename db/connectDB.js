const mongoose = require("mongoose");
const Local_URL = 'mongodb://127.0.0.1:27017/admissionPortal'
const Live_URL = "mongodb+srv://chiragkushwah06:ram123@cluster0.ytcxkya.mongodb.net/admissionPortal?retryWrites=true&w=majority&appName=Cluster0"

const connectDb = () => {
    return mongoose.connect(Live_URL)
        .then(() => {
            console.log("Connect Successfully")
        }).catch((error) => {
            console.log(error)
        })
}
module.exports = connectDb