

const products = [
    {id:"01", category:'Escritorio', name:"Bolígrafo pentagrama", description:"Bolígrafo de 5 puntas para dibujar pentagramas", image:"../../assets/images/boligrafo_pentagrama.jpg" ,price:600, stock:10},
    {id:"02", category:'Electro', name:"Auriculares bluetooth", description:"Auriculares inalámbricos marca Sony", image:"../../assets/images/auriculares_bluetooth.jpg" ,price:2500, stock:5},
    {id:"03", category:'Escritorio', name:"Cuaderno pentagramado", description:"Cuaderno pentagramado de 50 hojas 90grs", image:"../../assets/images/cuaderno_pentagramado.jpg" ,price:480, stock:7},
    {id:"04", category:'Instrumentos', name:"Metrónomo", description:"Metrónomo manual", image:"../../assets/images/metronomo.jpg" ,price:12000, stock:1},
    {id:"05", category:'Instrumentos', name:"Teclado sensitivo", description:"Teclado sensitivo 5 octavas Casio", image:"../../assets/images/teclado_sensitivo_61.jpg" ,price:45000, stock:2},
    {id:"06", category:'Electro', name:"Parlantes 2.0", description:"Parlantes 2.0 estereo 50W", image:"../../assets/images/parlantes_estereo.jpg" ,price:14000, stock:0},

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