const mongoose = require ('mongoose');


const taskSchema = new mongoose.Schema({
    task:{
        type: String,
        require: true,
    },
    check:{
        type: Boolean,
        require: true,
    },
    // data:{
    //     type: Data,
    //     default: data.now(),
    // },
  
});


module.exports = mongoose.model("Task" , taskSchema);