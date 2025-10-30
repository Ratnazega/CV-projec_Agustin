// index.js
// Jalankan dengan: node index.js
// Server ini digunakan untuk menampilkan file CV (index.html) kamu di browser

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Menyajikan semua file statis seperti HTML, CSS, JS, dan gambar
app.use(express.static(__dirname));

// Route utama untuk halaman index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});
