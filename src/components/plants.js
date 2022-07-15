const plants = [
    {
        id: 1,
        genre: 'Philodendron',
        species: 'Philodendron missionum',
        family: 'Araceae',
        image: 'https://tuplantainterior.com.ar/wp-content/uploads/2019/11/arriba-filom-700x700.jpg'
    },
    {
        id: 2,
        genre: 'Monstera',
        species: 'Monstera Deliciosa',
        family: 'Araceae',
        image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/262/427/products/whatsapp-image-2022-04-09-at-1-33-00-pm1-84c0f55f6cd48d0a5216495269869372-480-0.jpeg'
    },
    {
        id: 3,
        genre: 'Pilea',
        species: 'Pilea Peperomioides',
        family: 'Urticaceae',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Pilea_peperomioides_Chinese_money_plant.jpg/640px-Pilea_peperomioides_Chinese_money_plant.jpg'
    }
]

export const getPlants = () => {

    return new Promise ((resolve, reject) => {
        resolve(plants)
    })
}