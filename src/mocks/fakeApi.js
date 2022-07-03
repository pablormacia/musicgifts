const products = [
    {id:"01", name:"Pentaregla", description:"Regla para dibujar pentagramas", image:"https://picsum.photos/200" ,stock:10},
    {id:"02", name:"Auriculares bluetooth", description:"Auriculares inalámbricos marca Sony", image:"https://picsum.photos/201" ,stock:5},
    {id:"03", name:"Cuaderno pentagramado", description:"Cuaderno pentagramado de 50 hojas 90grs", image:"https://picsum.photos/202" ,stock:7},
    {id:"04", name:"Metrónomo", description:"Metrónomo manual", image:"https://picsum.photos/203" ,stock:1},
    {id:"05", name:"Teclado sensitivo", description:"Teclado sensitivo 5 octavas Casio", image:"https://picsum.photos/204" ,stock:2},

]

export const getProds = new Promise ((resolve, reject) =>{
    const condition = true;
    setTimeout(()=>{
       if(condition){
        resolve(products);
       }else{
        reject("Ups. Falló obtener lista de productos");
       }     
    },2000)
})

export const getProd = new Promise ((resolve, reject) =>{
    const condition = true;
    setTimeout(()=>{
       if(condition){
        resolve(products[0]);
       }else{
        reject("Ups. Falló obtener producto");
       }     
    },2000)
})