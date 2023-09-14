const express = require('express')
const { MongoClient } = require('mongodb')
const dotenv = require('dotenv')
const use = express.Router()

dotenv.config()

const data = process.env.MONGO_URI;

const datos = "MicroservicioCLEPS"

const mongodb = require('mongodb').MongoClient

use.get('/punto1', async (req, res)=> {
    try {
        const client = new MongoClient(data)
        await client.connect();
        const db = client.db('MicroservicioCLEPS');
        const collection = db.collection('usuario')
        const result = await collection.find().sort({"usu_nombre": 1}).toArray();
        res.json(result);
        client.close();
        
    } catch (e) {
        console.log(e)
        res.status(404).json("dato no encontrado")
        
    }});

use.get('/punto2', async (req, res)=> {
    try {
        const client = new MongoClient(data)
        await client.connect();
        const db = client.db('MicroservicioCLEPS');
        const collection = db.collection('citas')

        const fecha = "2023-09-15";

        const date = {"cit_fecha": fecha};

        const result = await collection.find(date).sort({"usu_nombre": 1}).toArray();

        res.json(result);
        client.close();
    } catch (e) {
        console.log(e)
        res.status(404).json("dato no encontrado")
    }
});

use.get('/punto3', async (req, res)=> {
    try {
        const client = new MongoClient(data)
        await client.connect();
        const db = client.db('MicroservicioCLEPS');
        const medicosCollection = db.collection('medicos');
        const especialidadesCollection = db.collection('especialidad');
        
        const especialidad = await especialidadesCollection.findOne({ "esp_nombre": 'Cardiología' });

        const query = { "med_especialidad": especialidad.esp_id };

        const result = await medicosCollection.find(query).toArray();

        res.json(result);
        client.close();
        
    } catch (error) {
        console.log(e)
        res.status(404).json("dato no encontrado")
    }
});

use.get('/punto4', async (req, res)=> {
    try {
        const client = new MongoClient(data)
        await client.connect();
        const db = client.db('MicroservicioCLEPS');
        const collection = db.collection('usuario')

         /* const pasiente = "1"
        
         const actual = new Date();
         
         const citaEnproceso = {
            "cit_datosUsuario": pasiente,
            "cit_fecha": { "$gte": actual }
        };

        const opera = { "cit_fecha": 1 };

        const result = await collection.find(citaEnproceso).sort(opera).limit(1).toArray(); */


        res.json(result);
        client.close();
    } catch (error) {
        
    }
});

use.get('/punto5', async (req, res)=> {
    try {
        const client = new MongoClient(data)
        await client.connect();
        const db = client.db('MicroservicioCLEPS');
        const collection = db.collection('medicos')

        
        res.json(result);
        client.close();
    } catch (error) {
        
    }
});

use.get('/punto6', async (req, res)=> {
    try {
        
    } catch (error) {
        
    }
});

use.get('/punto7', async (req, res)=> {
    try {
        
    } catch (error) {
        
    }
});

use.get('/punto8', async (req, res)=> {
    try {
        
    } catch (error) {
        
    }
});

use.get('/punto9', async (req, res)=> {
    try {
        
    } catch (error) {
        
    }
});

use.get('/punto10', async (req, res)=> {
    try {
        
    } catch (error) {
        
    }
});

use.get('/punto11', async (req, res)=> {
    try {
        
    } catch (error) {
        
    }
});

use.get('/punto12', async (req, res)=> {
    try {
        
    } catch (error) {
        
    }
});

module.exports = use;