var {MongoClient}=require('mongodb')
var dev_url="mongodb://127.0.0.1:27017"

var client=new MongoClient(dev_url)

var dbName="test-inki-pinki"

var dbconnector=async()=>{
    await client.connect()
    console.log("db connected"  )
   let db= client.db(dbName)
   let col=db.collection('student')

   let data=col.updateOne({name:'vibhav'},{$set:{choxalate:'kit-kat'}})
   console.log(await data)
}
dbconnector()