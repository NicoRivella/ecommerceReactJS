const Products = [
    {
        id: '1',
        title: 'Río Sagrado',
        category: 'libro',
        description: 'Descripción de Río Sagrado',
        price: '500',
        stock: 21,
        pictureUrl: 'http://www.duomoediciones.com/clases/tools/imgManager.php?url=/cont/catalogo/imagePot/RIO_SAGRADO_def_web.jpg&width=175',
    },
    {
        id: '2',
        title: 'Help!',
        category: 'musica',
        description: 'Descripción de Help!',
        price: '200',
        stock: 3,
        pictureUrl: 'https://i.discogs.com/6Fm8a2B68MHw6QLSGNtohNnUqsvFw7OuW84q9GXIoMk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMDcy/MzU4LTE0OTExMjg4/ODctNjU2Ny5qcGVn.jpeg',
    },
    {
        id: '3',
        title: '300',
        category: 'pelicula',
        description: 'Descripción de 300',
        price: '450',
        stock: 8,
        pictureUrl: 'https://jorgecine1997.files.wordpress.com/2020/01/300.jpg',
    },
    {
        id: '4',
        title: 'El Club de la Pelea',
        category: 'pelicula',
        description: 'Descripción de El Club de la Pelea',
        price: '300',
        stock: 13,
        pictureUrl: 'https://www.cinconoticias.com/wp-content/uploads/el-club-de-la-lucha-portada.jpg',
    },
    {
        id: '5',
        title: 'El Soberano del Nilo',
        category: 'libro',
        description: 'El Soberano del Nilo',
        price: '340',
        stock: 6,
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1323203263i/1403862.jpg',
    },
    {
        id: '6',
        title: 'Use your illusion I',
        category: 'musica',
        description: 'Descripción de Use your illusion I',
        price: '420',
        stock: 18,
        pictureUrl: 'https://eliteentretenimiento.com/1912-large_default/vinilos-guns-n-roses-use-your-illusion-1.jpg',
    },
    
]

const categories = [
    {id: 'libro', description: "Libros"},
    {id: 'musica', description: "Música"},
    {id: 'pelicula', description: 'Películas'}
]
    
    
export const GetProduct = (idProducto) => {

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
