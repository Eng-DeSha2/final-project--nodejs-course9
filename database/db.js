const mongoose= require('mongoose');

const connecttodb = () =>{
  mongoose
    .connect(
    "mongodb+srv://mostafaaita:mostafa181970@finaltodolist.st8ko3j.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    }
  )
  .then(()=> console.log("mongodb conected"))
   .catch((err)=>console.log(err));
};



module.exports = connecttodb;