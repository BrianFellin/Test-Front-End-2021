const { query } = require("express");
const express = require("express");
const db = require("./localdb");

const PORT = process.env.PORT || 3001;

const app = express();

db.startDB();

function defaultErrorResponse(error) {
    return {
        message: 'No encontramos lo que estás buscando',
        error: error
    }
};

function defaultErrorResponse(error) {
    return {
        message: 'No encontramos lo que estás buscando',
        error: error
    }
};

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/welcome.html');
});

app.get("/api/items", (req, res) => {
    let query = req.query.q;
    try {        
        if (!query) {
            res.statusCode = 404;
            res.json(defaultErrorResponse('La búsqueda no es válida'));
        }
        else {
            let apiURL = `${req.protocol}:\/\/${req.get('host')}\/api/file\/`;
            let findProducts = db.findProduct(apiURL, query, 4);
            res.json({
                author: {
                    name: '',
                    lastname: ''
                },
                categories: [],
                items: findProducts
            });
        }
    } catch (e) {
        res.statusCode = 500;
        res.json(defaultErrorResponse(e));
    }
});

app.get('/api/items/:id', function (req, res) {
    try {
        if (req.params.id) {
            let apiURL = `${req.protocol}:\/\/${req.get('host')}\/api/file\/`;
            let product = db.getById(apiURL, req.params.id);

            if (product) {
                res.json({
                    author: {
                        name: '',
                        lastname: ''
                    },
                    item: product ? product : null
                });

                return;
            }
        }

        res.statusCode = 404;
        res.json(defaultErrorResponse('Producto no válido'));
    }
    catch (e) {
        res.statusCode = 500;
        res.json(defaultErrorResponse(e));
    }
});

app.get('/api/items/:id/description', function (req, res) {
    try {
        if (!req.params.id) {
            res.statusCode = 404;
            res.json(defaultErrorResponse('Producto no válido'));
        }
        else {
            let productDescription = db.getDescriptionById(req.params.id);
            res.send(productDescription);
        }
    }
    catch (e) {
        res.statusCode = 500;
        res.json(defaultErrorResponse(e));
    }
});

app.get('/api/file/:name', function (req, res) {
    const file = `${__dirname}/files/${req.params.name}`;
    res.download(file);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
    console.warn('Endpoints:');
    app._router.stack.forEach(element => {
        if (element.route) {
            console.info('* path:', element.route.path, 'type:', element.route.methods);
        }
    });
});