# -D-G-1--Microservicio-CL-EPS

# Punto 1: Obtener todos los pacientes de manera alfabética.

```
//establece la ruta o el end point
use.get('/punto1', async (req, res)=> {
    try {
//llama a los datos y conecta con la base de datos:
        const client = new MongoClient(data)
        await client.connect();
        const db = client.db('MicroservicioCLEPS');

//llama a la collecion de usuario
        const collection = db.collection('usuario')

//usa los datos y acomoda segun los datos alfabeticos para organizar los usu_nombre segun la inicial:
        const result = await collection.find().sort({"usu_nombre": 1}).toArray();

//imprime el resultado:
        res.json(result);
        client.close();


// muestra si hay errores:
    } catch (e) {
        console.log(e)
        res.status(404).json("dato no encontrado")
        
    }});
```

# Punto 2: Obtener las citas de una fecha en específico , donde se ordene los pacientes de manera alfabética.
```
//establece la ruta o el end point
use.get('/punto2', async (req, res)=> {
    try {
//llama a los datos y conecta con la base de datos:
        const client = new MongoClient(data)
        await client.connect();
        const db = client.db('MicroservicioCLEPS');

//llama a la collecion de citas
        const collection = db.collection('citas')

//definimos la fecha que se va a filtrar
        const fecha = "2023-09-15";

//buscamos el dato en cit_fecha y asignamos el valor al que vamos a filtar
        const date = {"cit_fecha": fecha};

//generamos el procedimiento para el filtrado segun el date en un find y como el codigo anterior usa los datos y acomoda segun los datos alfabeticos para organizar los usu_nombre segun la inicial
        const result = await collection.find(date).sort({"usu_nombre": 1}).toArray();

//imprime el resultado:
        res.json(result);
        client.close();


// muestra si hay errores:
    } catch (e) {
        console.log(e)
        res.status(404).json("dato no encontrado")
        
    }});
```
# Punto 3: Obtener todos los médicos de una especialidad en específico (por ejemplo, ‘Cardiología’).
```
//establece la ruta o el end point:
use.get('/punto3', async (req, res)=> {
    try {
//llama a los datos y conecta con la base de datos:
        const client = new MongoClient(data)
        await client.connect();
        const db = client.db('MicroservicioCLEPS');

//creamos las dos constantes que se encargaran de suministar la informacion tanto del tipo de especialidad y la especialidad del medico:
        const medicosCollection = db.collection('medicos');
        const especialidadesCollection = db.collection('especialidad');

//metemos el filtrado de los datos que se van a acomodar segun el nombre de la especialidad que le demos:
        const especialidad = await especialidadesCollection.findOne({ "esp_nombre": 'Cardiología' });

//generamos la resopectiva operacion para validar que los datos coincidan con los del medio y su especialidad e imprimimos :
        const query = { "med_especialidad": especialidad.esp_id };
        const result = await medicosCollection.find(query).toArray();

        res.json(result);
        client.close();
        
//imprime el resultado:
        res.json(result);
        client.close();

// muestra si hay errores:
    } catch (e) {
        console.log(e)
        res.status(404).json("dato no encontrado")
        
    }});
```
# Punto 4:
# Punto 5:
# Punto 6:
# Punto 7:
# Punto 8:
# Punto 9:
# Punto 10:
# Punto 11:
# Punto 12:
