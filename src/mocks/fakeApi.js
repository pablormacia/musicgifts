const products = [
    {id:"01", category:'Escritorio', name:"Pentaregla", description:"Regla para dibujar pentagramas", image:"https://picsum.photos/200" ,stock:10},
    {id:"02", category:'Electro', name:"Auriculares bluetooth", description:"Auriculares inalámbricos marca Sony", image:"https://picsum.photos/201" ,stock:5},
    {id:"03", category:'Escritorio', name:"Cuaderno pentagramado", description:"Cuaderno pentagramado de 50 hojas 90grs", image:"https://picsum.photos/202" ,stock:7},
    {id:"04", category:'Instrumentos', name:"Metrónomo", description:"Metrónomo manual", image:"https://picsum.photos/203" ,stock:1},
    {id:"05", category:'Instrumentos', name:"Teclado sensitivo", description:"Teclado sensitivo 5 octavas Casio", image:"https://picsum.photos/204" ,stock:2},

]



export const getProds = (categoryId) =>{
    return new Promise ((resolve, reject) =>{
    const filteredProducts = products.filter(prod => prod.category === categoryId);
    setTimeout(()=>{
           categoryId?resolve(filteredProducts):resolve(products);
    },1000)
});
};

export const getProd = (detailId) =>{
    return new Promise ((resolve, reject) =>{
    const foundProduct = products.find(prod => prod.id === detailId)
    setTimeout(()=>{
          resolve(foundProduct)
    },1000)
});
};