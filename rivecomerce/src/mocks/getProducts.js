const Products = [
    {
        id: '1',
        title: 'Río Sagrado',
        category: 'libro',
        description: 'Descripción de Río Sagrado',
        price: '150',
        pictureUrl: 'http://www.duomoediciones.com/clases/tools/imgManager.php?url=/cont/catalogo/imagePot/RIO_SAGRADO_def_web.jpg&width=175',
    },
    {
        id: '2',
        title: 'Help!',
        category: 'musica',
        description: 'Descripción de Help!',
        price: '200',
        pictureUrl: 'https://i.discogs.com/6Fm8a2B68MHw6QLSGNtohNnUqsvFw7OuW84q9GXIoMk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMDcy/MzU4LTE0OTExMjg4/ODctNjU2Ny5qcGVn.jpeg',
    },
    {
        id: '3',
        title: '300',
        category: 'pelicula',
        description: 'Descripción de 300',
        price: '450',
        pictureUrl: 'https://jorgecine1997.files.wordpress.com/2020/01/300.jpg',
    },
    
]

const categories = [
    {id: 'libro', description: "Libros"},
    {id: 'musica', description: "Música"},
    {id: 'pelicula', description: 'Películas'}
]


export const GetProduct = (idProducto) => {
        console.log(idProducto)
        
        console.log(Products.find(prod => prod.id === '2'))
        console.log(Products.find(prod => prod.id === idProducto))

        return new Promise (resolve => {
            setTimeout(() => {

                resolve(Products.find(prod => prod.id === idProducto))
            }, 500)
    })     
}

export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}
const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const ok = true;
            setTimeout(() => {
                if (ok) {
                    resolve(categoryId ? Products.filter(prod => prod.category === categoryId) : Products);
                } else {
                    reject('error');
                }
            }, 500);  
    })
}

export default getProducts;
