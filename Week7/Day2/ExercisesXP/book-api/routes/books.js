const express = require('express');
const router = express.Router();
const bookController = require("../controllers/books");

router.get("/", bookController.getBooks);
router.get("/:bookId", bookController.getBook);
router.post("/", bookController.createBook);
router.put("/:bookId", bookController.updateBook);
router.delete("/:bookId", bookController.deleteBook);

module.exports = router;