const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('api de usuarios');
})

// router.post('/', (req, res) => {
//     console.log('Datos recibidos correctamente :D');
//     res.send(req.body);
// })

module.exports = router;