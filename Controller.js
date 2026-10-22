import { dataPengguna } from './data.js';

// ==========================================
// 1. MELIHAT DATA MENGGUNAKAN map()[cite: 6]
// ==========================================
function lihatData() {
    console.log("=== DAFTAR PENGGUNA ===");
    
    // Menggunakan method map() untuk menampilkan data[cite: 6]
    dataangunkanMap();
}

function angunkanMap() {
    const hasilMap = dataPengguna.map((item, index) => {
        return `${index + 1}. Nama: ${item.nama} | Umur: ${item.umur} th | Alamat: ${item.alamat} | Email: ${item.email}`;
    });

    hasilMap.forEach(teks => console.log(teks));
    console.log("========================\n");
}

// ==========================================
// 2. MENAMBAH DATA MENGGUNAKAN push() (Minimal 2 Data)[cite: 6]
// ==========================================
function tambahData(namaBaru, umurBaru, alamatBaru, emailBaru) {
    const dataBaru = {
        id: dataPengguna.length + 1,
        nama: namaBaru,
        umur: umurBaru,
        alamat: alamatBaru,
        email: emailBaru
    };

    // Menggunakan proses push untuk menambahkan data[cite: 6]
    dataPengguna.push(dataBaru);
    console.log(`Berhasil menambahkan data: ${namaBaru}`);
}

// ==========================================
// 3. MENGHAPUS DATA BERDASARKAN ID
// ==========================================
function hapusData(id) {
    const index = dataPengguna.findIndex(item => item.id === id);
    if (index !== -1) {
        const dihapus = dataPengguna.splice(index, 1);
        console.log(`Berhasil menghapus data: ${dihapus[0].nama}`);
    } else {
        console.log(`Data dengan ID ${id} tidak ditemukan.`);
    }
}

// ==========================================
// EKSEKUSI / PENGUJIAN PROGRAM
// ==========================================

console.log("--- MENAMPILKAN DATA AWAL ---");
lihatData();

console.log("--- MENAMBAHKAN 2 DATA BARU (PUSH) ---");
tambahData("Kartika Putri", 22, "Bogor", "kartika@gmail.com"); // Data ke-11[cite: 6]
tambahData("Lukman Hakim", 25, "Depok", "lukman@gmail.com");   // Data ke-12[cite: 6]

console.log("\n--- MENAMPILKAN DATA SETELAH DITAMBAHKAN ---");
lihatData();

console.log("--- MENGHAPUS DATA (ID 3) ---");
hapusData(3);

console.log("\n--- MENAMPILKAN DATA TERAKHIR ---");
lihatData();