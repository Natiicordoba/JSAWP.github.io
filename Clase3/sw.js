//Proceso de service worker
//fetch: se ejecuta al interceptar una petición saliente
//self: es una técnica para dejar el objeto this guardado en el "self", es un global de this para windows
self.addEventListener('fetch', e => {

});

//preparación
//install: se ejecuta una vez al principio

self.addEventListener('install', e =>{
    //Copiado de archivos a la cache
});

//activate: se ejecuta al haber un cambio en este archivo
self.addEventListener('activate', e => {
    //Actualización de los archivos de la cache
})