//este archivo nos ayudara a realizar, las peticiones de una manera mas sencilla, ya que esa es su funcionalidad, hara las distintas peticicones fetch segun los parametros que le pasemos

//XQ esta en una carpeta aparte y no con los componentes? Debido a que los componentes suelen tener una parte que se renderiza, es decir, tienen funcionalidad y una parte visual, este no, x eso no lo consideramos un componente y lo ponemos como un helper, una funcion que ayuda

//Esto no es un Hook Personalizado, ya que para ser considerado asi debe tener internamente algun hook de react, y este no lo posee

//no lo exportamos por defecto, ya que cuando se hace eso, y se importa en un archivo se le puede dar el nombre que queramos, en este caso si queremos que se llame helpHttp

export const helpHttp = () => {

    //esta sera nuestra funcion que haga la peticion, recibira tres parametros, el endpoint al que hace la peticion, y las opciones que puede recibir esa peticion

    const customFetch = (endpoint , options) => {

        //definimos una variable que usaremos como cabecera de nuestras peticiones, a menos que se necesite alguna mas especifica, en este caso solo le diremos a la cabecera que reciba valores json

        const defaultHeader = {
            accept: "application/json",
        }

        //usaremos un objeto llamado AbortController, que sirve para que en caso de que nuestra peticion fetch no reciba una respuesta del servidor, podamos abortar la peticion cuando queramos

        const controller = new AbortController();

        //para usar el abortController solo debemos, agregar a las options que recibe customFetch, en la propiedad signal, el objeto que en este caso esta guardado en la constante controller, y darle la "propiedad" signal, esto nos permite manejar mejor el error

        options.signal = controller.signal;

        //metodo que usara, en este caso el que usemos debe pasarlo el usuario en el parametro de options, en caso contrario por defecto se usara GET

        options.method = options.method || "GET";

        //sobre la cabecera lo mismo, si viene cabecera haremos uso del spread operator y mezclaremos lo que viene en options.headers con nuestra defaultHeader, en caso contrario solo dejamos defaultHeader

        options.headers = options.headers 
        ? {...defaultHeader , ...options.headers}
        : defaultHeader;

        //las peticiones que no son de tipo get, tienen un body en el cual envian la info de la peticion, estos datos vienen en un formato que no podemos entender, por eso debemos pasarlos a cadena de texto, mediante el metodo stringify
        //en caso de que la peticion tenga un body, ejecutaremos el metodo stringify al body, en caso contrario la definimos como false ya que en una operacion get no enviamos datos

        options.body = JSON.stringify(options.body) || false;
        //No podemos mandar el body como false, eso esta prohibido, x eso hacemos la sgte validacion, si el body viene como false, ejecutamos el metodo delete que nos permite remover una propiedad de un objeto, y en este caso eliminamos el body de options, para no tener errores
        if(!options.body) delete options.body
        //console.log(options)
        //Manejo de la peticion en caso de NO RESPUESTA
        //ejecutamos un timeout, y si luego de 3 segundos no obtenemos una respuesta, ejecutamos el metodo abort del objeto AbortController que esta guardado en la variable controller, el cual detiene la ejecucion de la peticion
        //como esto esta al final se ejecuta todo lo anterior primero, por eso los 3 segundos si no recibimos respuesta del servidor
        //entonces pasaria a ejecutarse el catch del manejo de los errores, por que la peticion fue aoprtada
        setTimeout( () => controller.abort() ,3000)

        //LO QUE DEVUELVE LA FUNCION
        //en este caso todos los datos que retorne estan en el return en forma de promesa
        //la peticion fetch que retorna recibe el endpoint que es la url donde se hace la peticion y las options que le pase el usuario mas las que agregramos nosotros mas arriba
    
        //en caso de una respuesta positiva, ejecutamos un operador ternario, si la promesa se resuelve y el parametro ok de la respuesta es positivo la respuesta la convertimos a json, en caso contrario(se ejecuta la promesa pero la peticion falla) rechazamos la promesa y enviamos al catch, con el metodo reject, un objeto con los valores que se ven abajo. El catch recibe estos valores y los usa para mostrar el mensaje de error

        return fetch (endpoint, options)

            .then((res) => 
                res.ok ? res.json() : Promise.reject({
                    err: true,
                    status: res.status || "00",
                    statusText: res.statusText || "Ocurrio un error"
                })
            )
            .catch((err)=> {
                console.log(err)
                //con esto listo ahora vamos a crear las funciones de cada metodo de fetch
            })
    }
        
    //tendremos una funcion para cada uno de los metodos

    //esta funcion recibira dos parametros, la url y unas opciones, en caso de que no reciba opciones estas por defecto seran iguales a un objeto vacio, por eso el igual dentro de los () de parametros
    //luego llamara a la funcion customFetch que hicimos antes y le pasamos la url y las opciones que pueden estar o no
    const get = (url , options = {}) => customFetch(url,options);

    //en el caso de post, le agregamos al objeto options el method post, ya que no viene por defecto como en el caso de get
    //en los dos sgtes solo repetimos el proceso
    const post = (url , options = {}) => {
        options.method = "POST";
        return customFetch(url , options);
    }

    const put = (url , options = {}) => {
        options.method = "PUT";
        return customFetch(url , options);
    }

    const del = (url , options = {}) => {
        options.method = "DELETE";
        return customFetch(url , options);
    }

    //el archivo retornara un objeto, con los distintos metodos que tenemos mas arriba

    //como las propiedades que retornara el objeto se llaman iguales a los valores que poseen, podemos pasarle simplemente el nombre que js se encarga de asignarle el valor con el mismo nombre, como esta indicado en la linea comentada de abajo

    return{
        get: get,
        post: post,
        put: put,
        del: del,
        //get,post,put,del,
    }

}

