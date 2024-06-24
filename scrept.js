// script.js

// Mengambil elemen form
const contactForm = document.getElementById('contactForm');

// Menangani event submit form
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Menghentikan pengiriman formulir

    // Mengambil nilai dari input
    const name = contactForm.querySelector('#nama').value;
    const email = contactForm.querySelector('#email').value;
    const message = contactForm.querySelector('#pesan').value;

    // Validasi sederhana
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Silakan lengkapi semua field!');
        return;
    }

    // Simulasi pengiriman data ke server (di sini hanya alert untuk tujuan demonstrasi)
    alert(`Data yang akan dikirim:\nNama: ${name}\nEmail: ${email}\nPesan: ${message}`);

    // Reset form setelah pengiriman berhasil
    contactForm.reset();
});

// Contoh penanganan event lainnya (misalnya, klik tombol)
const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function() {
    alert('Tombol telah diklik!');
});
