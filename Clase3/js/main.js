let datos = [
    {titulo: 'Carne', cantidad: 12, precio: 2500},
    {titulo: 'Jabon', cantidad: 15, precio: 3000},
];

let datosPrevios = [];

const btnAgregar = document.querySelector("#btnAgregar");
const btnDeshacer = document.querySelector("#btnDeshacer");
const inpBusqueda = document.querySelector('#inpBusqueda');
const inpAgregar = document.querySelector('#inpAgregar');
const galeria = document.querySelector('#galeria');
const lknLimpiarLista = document.querySelector('#lknLimpiarLista');
 
//Funciones
const template = ({titulo, cantidad, precio}) => `<div class="item">
<div class="titulo">
    ${titulo}
</div>
<div class="controles">
    <span>${cantidad}</span>
    <span>${precio}</span>
</div>
<div class="borrar">
  <a href="#" class="borrar">Eliminar</a>
</div>
</div>`

function render (lista = [{titulo: '', cantidad: 0, precio: 0}]){
    galeria.innerHTML = '';
    lista.forEach(item => {
        galeria.innerHTML += template(item)
    })
};
    
//Eventos 
//    -al cargar la página

document.addEventListener('DOMContentLoaded', () => render(datos));

//    -al hacer click en el boton Agregar item.
    
btnAgregar.addEventListener('click', () => {
    datosPrevios = datos.slice(0); // antes de incertar un nuevo elemento a la estructura me quedo con el estado anterior
    datos.push({
        titulo: inpAgregar.value,
        cantidad: 0,
        precio: 0
    })
    render(datos);
    inpAgregar.value = '';
});    

//    -Al hacer click en el botón Deshacer  

btnDeshacer.addEventListener('click', () =>{
    datos = datosPrevios;
    render(datos);
});


//    -Al ingresar datos en  el campo de busqueda

inpBusqueda.addEventListener('input', e => {
    /*let vista = datos.filter((val) => {
        if(val.titulo.includes(e.target.value)){
            return true
        }else{
            return false
        }
    })*/
    let vista = datos.filter(val => val.titulo.includes(e.target.value))
    render(vista);
});

    //    -Al hacer click en Limpiar lista

lknLimpiarLista.addEventListener('click', () => {
    datosPrevios = datos.slice(0);
    datos = [];
    render(datos);
})

    //    -Al hacer click en Guardar lista
    //    -Al hacer click en Cargar lista
    //    -Al hacer click en un item con la clase Borrar
    //Objetos