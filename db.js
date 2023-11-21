const mongoose = require('mongoose')


mongoose.connect("mongodb://localhost:27017/metrimony_backend")
const db = mongoose.connection

db.on('error',error=>console.log('connection not established with DB',error));
db.on('open',()=>{console.log('connection Established with DB');
})

// mongoose.connect(`mongodb://localhost:27017/matrimony_project
// `)
// const db = mongoose.connection;
// db.on("error", error => console.log("error", error))
// db.on("open", () => console.log("Connection Established With DB"))

// module.exports = db


module.exports=db