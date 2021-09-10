var products = [];

function addProduct(title, priceCurrency, priceAmount, priceDecimals, picture, condition, freeShipping, soldQuantity, description) {
    let id = products.length + 1;

    products.push({
        id: id.toString(),
        title: title,
        price: {
            currency: priceCurrency,
            amount: priceAmount,
            decimals: priceDecimals
        },
        picture: picture,
        condition: condition,
        free_shipping: freeShipping,
        sold_quantity: soldQuantity,
        description: description
    });
}

function mapToFindProductObject(items) {
    let findProductObjectArray = [];

    items.forEach(item => {
        findProductObjectArray.push({
            id: item.id,
            title: item.title,
            price: item.price,
            picture: item.picture,
            condition: item.condition,
            free_shipping: item.free_shipping
        });
    });

    return findProductObjectArray;
}

function startDB() {
    addProduct('Notebook Asus N4020 128gb Ssd 4gb 15.6 Full Hd Windows 10', 'ARG', 48999, 0, 'D_NQ_NP_850830-MLA46954324460_082021-V.webp', 'Nuevo', true, 10, 'Tipo de procesador Intel Celeron Capacidad de Disco Duro 128 GB Fabricante ASUS Condición Nuevo Velocidad del procesador 1,1 GHz Número de pieza del fabricante L510MA-WB04 Tecnología inalámbrica 802.11ac Memoria RAM 4 GB RAM máxima admitida 4 GB Sistema operativo Windows 10 Home en modo S Duración de la batería 8 h Modelo 90 NB0Q65-M06560 Tamaño de pantalla 15,6 pulg Marca ASUS Características Delgado y portátil 0,72 de grosor y pesa solo 3,59 libras (batería incluida)');
}

function getById(id){
    return products.filter(product => product.id === id)[0]
}

function getDescriptionById(id){
    let product = getById(id);
    return product ? product.description : '';
}

function findProduct(query, take) {
    let findResult = products.filter(item => item.title.toLowerCase().includes(query.toLowerCase())).slice(0, take);
    return mapToFindProductObject(findResult);
}

module.exports = {
    startDB,
    findProduct,
    getById,
    getDescriptionById
}