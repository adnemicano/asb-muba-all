const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const standarSatuanHargaRoutes = require('./routes/standarSatuanHarga');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/standarSatuanHarga', standarSatuanHargaRoutes); // Pastikan ini ada

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
