// Array of comic page URLs
const comicPages = [
  'https://example.com/komik1.jpg', // Ganti dengan URL gambar komik yang sesuai
  'https://example.com/komik2.jpg',
  'https://example.com/komik3.jpg',
  // Tambahkan lebih banyak URL gambar halaman komik
];

let currentPage = 0;

// Get DOM elements
const comicImage = document.getElementById('comicImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Update the comic image source
function updateComic() {
  comicImage.src = comicPages[currentPage];
}

// Event listeners for next and previous buttons
prevButton.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updateComic();
  }
});

nextButton.addEventListener('click', () => {
  if (currentPage < comicPages.length - 1) {
    currentPage++;
    updateComic();
  }
});

// Initialize with the first page
updateComic();
