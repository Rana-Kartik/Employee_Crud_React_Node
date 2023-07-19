import {connect , connection} from 'mongoose'

const conn = {
    isConnected  : false
}

export async function dbConnect(){
    if(conn.isConnected) return

    const db = await connect(process.env.mongodb_uri)
    conn.isConnected = db.connections[0].readyState

    console.log(db.connection.db.databaseName)
}

connection.on("connected", () => {
    console.log("Mongodb connected")
})


connection.on("error", (err) => {
    console.log("Error in connecting the db",err.message )
})