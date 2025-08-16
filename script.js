function simpanTransaksi() {
    const nama = document.getElementById("nama").value;
    const produk = document.getElementById("produk").value;
    const jumlah = parseInt(document.getElementById("jumlah").value);
    const alamat = document.getElementById("alamat").value;

    localStorage.setItem("nama", nama);
    localStorage.setItem("produk", produk);
    localStorage.setItem("jumlah", jumlah);
    localStorage.setItem("alamat", alamat);

    window.location.href = "struk.html";
}

function tampilkanStruk() {
    const nama = localStorage.getItem("nama");
    const produk = localStorage.getItem("produk");
    const jumlah = parseInt(localStorage.getItem("jumlah"));
    const alamat = localStorage.getItem("alamat");

    // Harga produk
    const hargaProduk = {
        "Beras Raja Platinum 5KG": 74500,
        "Beras Sania Premium": 78000
    };

    const harga = hargaProduk[produk] || 0;
    const total = jumlah * harga;

    document.getElementById("outNama").innerText = nama;
    document.getElementById("outProduk").innerText = produk;
    document.getElementById("outJumlah").innerText = jumlah;
    document.getElementById("outAlamat").innerText = alamat;
    document.getElementById("outTotal").innerText = "Rp" + total.toLocaleString("id-ID");
}

function isiProdukOtomatis() {
    const params = new URLSearchParams(window.location.search);
    const produk = params.get("produk");
    if (produk) {
        document.getElementById("produk").value = produk;
    }
}