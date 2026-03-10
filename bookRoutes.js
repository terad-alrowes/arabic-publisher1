const express = require('express');
const router  = express.Router();

const {
    createBook,
    getAllBooks,
    getBook,
    updateBook,
    deleteBook,
    searchBooks,
    rateBook,
    getTopViewed,
} = require('../controllers/bookController');

// Replace with your actual auth middleware
const protect = require('../middleware/auth');

// ── Public routes ─────────────────────────────────────
router.get('/top-viewed',  getTopViewed);   // GET  /api/books/top-viewed
router.get('/search',      searchBooks);    // GET  /api/books/search?q=...
router.get('/',            getAllBooks);     // GET  /api/books
router.get('/:id',         getBook);        // GET  /api/books/:id

// ── Protected routes ──────────────────────────────────
router.post('/',           protect, createBook);        // POST   /api/books
router.patch('/:id',       protect, updateBook);        // PATCH  /api/books/:id
router.delete('/:id',      protect, deleteBook);        // DELETE /api/books/:id
router.post('/:id/rate',   protect, rateBook);          // POST   /api/books/:id/rate

module.exports = router;
