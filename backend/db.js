const mongoose=require('mongoose')
const mongourl='mongodb://localhost:27017'
const connectToMongo=()=>{
    mongoose.connect(mongourl,{useNewUrlParser:true,useUnifiedTopology:true})
   let db= mongoose.connection
   db.once('open',function(){
   console.log('connected to database')
})
}
module.exports=connectToMongo;
