const express = require('express');
const router = express.Router();
const { StandarSatuanHarga } = require('../models');

// Create a new StandarSatuanHarga
router.post('/', async (req, res) => {
    try {
        const { kodeKomponen, uraianKomponen, spesifikasi, satuan, hargaSatuan, tkdn } = req.body;
        const item = await StandarSatuanHarga.create({ kodeKomponen, uraianKomponen, spesifikasi, satuan, hargaSatuan, tkdn });
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
