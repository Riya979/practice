var {MongoClient}=require('mongodb')
var dev_url="mongodb://127.0.0.1:27017"

var client=new MongoClient(dev_url)

var dbName="test-inki"

var dbconnector=async()=>{
    await client.connect()
    console.log("db connected"  )
   let db= client.db(dbName)
   let col=db.collection('student')
   let data={name:'abiya',chocolate:'dairymilk'}
   col.insertOne(data)
   console.log("val inserted")
}
dbconnector()
 