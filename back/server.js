import mongodb from 'mongodb';
const { MongoClient } = mongodb;
const url = 'mongodb://localhost:27017';
const dbName = 'fdjdb'
let FDJDb;

export default async () => {
    if (FDJDb) {
        return FDJDb;
    }
    const  t= await MongoClient.connect(url);
    return FDJDb = t.db(dbName);
}


