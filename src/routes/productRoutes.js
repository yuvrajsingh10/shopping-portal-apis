const express = require('express')
const router = express.Router()
const { newProduct, getAllProducts, deleteProduct, getProduct, updateProduct } = require("../controllers/productController")

router.get("/all-products", getAllProducts)
router.get("/:id", getProduct)

router.patch("/:id", updateProduct)
router.post("/new-product", newProduct)
router.delete("/:id", deleteProduct)

module.exports = router;