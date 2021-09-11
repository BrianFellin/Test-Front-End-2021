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

function mapToFindProductObject(apiUrl, items) {
    let findProductObjectArray = [];

    items.forEach(item => {
        findProductObjectArray.push({
            id: item.id,
            title: item.title,
            price: item.price,
            picture: apiUrl + item.picture,
            condition: item.condition,
            free_shipping: item.free_shipping
        });
    });

    return findProductObjectArray;
}

function mapToGetProductObject(apiUrl, item) {
    let product = {};
    for (const property in item) {
        product[property] = item[property];
        if(property === 'picture'){
            product[property] = apiUrl + product[property];
        }
    }
    return product;
}

function startDB() {
    addProduct('Notebook Asus N4020 128gb Ssd 4gb 15.6 Full Hd Windows 10', 'ARG', 48999, 0, 'D_NQ_NP_850830-MLA46954324460_082021-V.webp', 'Nuevo', true, 10, 'Tipo de procesador Intel Celeron Capacidad de Disco Duro 128 GB Fabricante ASUS Condición Nuevo Velocidad del procesador 1,1 GHz Número de pieza del fabricante L510MA-WB04 Tecnología inalámbrica 802.11ac Memoria RAM 4 GB RAM máxima admitida 4 GB Sistema operativo Windows 10 Home en modo S Duración de la batería 8 h Modelo 90 NB0Q65-M06560 Tamaño de pantalla 15,6 pulg Marca ASUS Características Delgado y portátil 0,72 de grosor y pesa solo 3,59 libras (batería incluida)');
    addProduct('Notebook Hp Stream 14-ax112la Celeron N4020 4gb 64gb Win 10', 'ARG', 49999, 0, 'D_NQ_NP_666270-MLA47374585912_092021-V.webp', 'Nuevo', false, 54, 'Delgada, liviana y con atractivo diseño, la HP Stream Notebook te ofrece lo mejor de la nube sin complicaciones. Su batería de larga duración y su potente antena de Wi-Fi, ofrece la productividad y las funciones esenciales que desea.');
    addProduct('Notebook Banghó MAX L4 i1 gris oscura 14", Intel Celeron N4000  4GB de RAM 120GB SSD, Intel UHD Graphics 600 1366x768px Windows 10 Home', 'ARG', 59989, 0, 'D_NQ_NP_925102-MLA44939831146_022021-V.webp', 'Nuevo', false, 14, 'Su pantalla LCD de 14" y 1366x768 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.');
    addProduct('Notebook Lenovo IdeaPad 14IIL05  platinum gray 14", Intel Core i5 1035G1  8GB de RAM 512GB SSD, Gráficos Intel UHD G1 1920x1080px Windows 10 Home', 'ARG', 99499, 0, 'D_NQ_NP_879170-MLA45629747467_042021-V.webp', 'Nuevo', false, 500, 'La notebook Lenovo IdeaPad 3 fue pensada para hacer tu vida más sencilla. Su diseño elegante e innovador y su comodidad para transportarla, la convertirá en tu PC favorita. Cualquier tarea que te propongas, ya sea en casa o en la oficina, la harás con facilidad gracias a su poderoso rendimiento.');
}

function getById(apiUrl, id) {
    let product = products.filter(product => product.id === id)[0];
    return mapToGetProductObject(apiUrl, product);
}

function getDescriptionById(id) {
    let product = getById(id);
    return product ? product.description : '';
}

function findProduct(apiUrl, query, take) {
    let findResult = products.filter(item => item.title.toLowerCase().includes(query.toLowerCase())).slice(0, take);
    return mapToFindProductObject(apiUrl, findResult);
}

module.exports = {
    startDB,
    findProduct,
    getById,
    getDescriptionById
}