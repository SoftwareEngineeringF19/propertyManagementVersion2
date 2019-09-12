// This is the connection to MongoStitch for Tenants page:
const {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} = require('mongodb-stitch-browser-sdk');

const client = Stitch.initializeDefaultAppClient('propertymanagment-tonay');

const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('Property_Management');

client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
  db.collection('Tenant').updateOne({owner_id: client.auth.user.id}, {$set:{number:42}}, {upsert:true})
).then(() =>
  db.collection('Tenant').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
).then(docs => {
    console.log("Found docs", docs)
    console.log("[MongoDB Stitch] Connected to Stitch")
}).catch(err => {
    console.error(err)
});
