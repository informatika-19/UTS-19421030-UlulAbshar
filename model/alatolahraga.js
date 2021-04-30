const mongoose = require('mongoose')
const Schema = mongoose.Schema

const alatolahragaSchema = new Schema({
    namapembeli:{
        type: String
        },
        jenisbarang:{
            type: String
        },
        namabarang:{
            type: String
        },
        hargabarang:{
            type: String
        },
        jumlahbeli:{
            type: String
        },
        totalharga :{
            type: String
            
        }
})
module.exports =mongoose.model('alatolahraga',alatolahragaSchema)