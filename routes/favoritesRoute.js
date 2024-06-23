const express  = require('express')
const { favorites, removeFavorites } = require('../ctrls/favorites')

const router = express.Router()


router.post('/favorite_add', favorites)

router.post('/rm_favorite', removeFavorites)



module.exports = router