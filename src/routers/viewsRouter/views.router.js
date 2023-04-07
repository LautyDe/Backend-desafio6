import { Router } from "express";
import ProductManager from "../../dao/productManagerFS.js";

const router = Router();
const productManager = new ProductManager("src/db/jsons/products.json");

/* home */
router.get("/", async (req, res) => {
  const products = await productManager.getAll();
  res.render("home", {
    style: "home.css",
    title: "Home",
    products: products,
  });
});

/* realTimeProducts */
router.get("/realtimeproducts", async (req, res) => {
  const products = await productManager.getAll();
  res.render("realTimeProducts", {
    style: "realTimeProducts.css",
    title: "Real Time Products",
    products: products,
  });
});

export default router;
