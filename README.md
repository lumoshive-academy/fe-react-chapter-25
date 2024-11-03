# Tailwind CSS
## Langkah 1: Instal Tailwind CSS dan Dependensi yang Diperlukan
Jalankan perintah berikut di terminal untuk menginstal tailwindcss, postcss, dan autoprefixer sebagai dev dependencies:
```bash
npm install -D tailwindcss postcss autoprefixer
```
## Langkah 2: Inisialisasi Konfigurasi Tailwind CSS dan PostCSS
Setelah menginstal dependensi, jalankan perintah berikut untuk membuat file konfigurasi tailwind.config.js dan postcss.config.js:
```bash
npx tailwindcss init -p
```
Setelah perintah ini dijalankan, dua file akan dibuat:
- tailwind.config.js: File konfigurasi utama untuk Tailwind CSS.
- postcss.config.js: File konfigurasi untuk PostCSS.
## Langkah 3: Konfigurasikan File Template di tailwind.config.js
Buka tailwind.config.js dan tambahkan konfigurasi berikut pada properti content untuk menentukan di mana Tailwind harus mencari file template. Dengan konfigurasi ini, Tailwind akan memproses CSS di semua file dalam folder src dan index.html.
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
## Langkah 4: Buat File CSS untuk Tailwind (misalnya src/index.css)
Di dalam folder src, buat file CSS baru dengan nama index.css. Tambahkan direktif Tailwind berikut untuk mengimpor gaya dasar, komponen, dan utilitas dari Tailwind CSS:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## Langkah 5: Impor File CSS di Proyek React
Pastikan Anda mengimpor index.css di file index.js atau App.js di dalam proyek React Anda untuk menerapkan gaya Tailwind CSS:
```javascript
import './index.css';
```
## Selesai!
Anda sekarang sudah menginstal dan mengonfigurasi Tailwind CSS di proyek React Anda. Anda bisa mulai menggunakan kelas-kelas utilitas Tailwind CSS di komponen React Anda. Misalnya:
```javascript
function ExampleComponent() {
  return (
    <div className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold">Hello, Tailwind CSS!</h1>
      <p className="mt-2">This is styled with Tailwind CSS.</p>
    </div>
  );
}
```

# Configurasi Tailwind CSS

## 1. Konfigurasi Dasar Tailwind CSS dengan Warna Kustom dan Mode Gelap
Edit file tailwind.config.js untuk menambahkan warna kustom dan mode gelap yang diaktifkan melalui kelas dark. Berikut adalah konfigurasi lengkapnya:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warna kustom
        primary: '#1DA1F2',
        secondary: '#14171A',
        accent: '#FFAD1F',
      },
    },
  },
  darkMode: 'class', // Mengaktifkan mode gelap dengan menambahkan kelas 'dark'
};
```
- Warna Kustom: Menambahkan warna primary, secondary, dan accent yang dapat digunakan di seluruh proyek.
Mode Gelap: Mode gelap diaktifkan dengan menambahkan kelas dark pada elemen - root (misalnya `<html>` atau `<body>`).
## 2. Komponen React dengan Tema Mode Gelap
Buat komponen React FormComponent yang memungkinkan pengguna beralih antara tema terang dan gelap. Berikut adalah contoh kode:
```javascript
import React, { useState } from "react";

export default function FormComponent() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    // Menambahkan atau menghapus kelas 'dark' dari <body> saat mode diubah
    isDarkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  };

  return (
    <div className="container mx-auto mt-3">
      <button
        onClick={toggleDarkMode}
        className="bg-slate-400 py-2 px-4 border mb-3"
      >
        Theme {isDarkMode ? "Light" : "Dark"}
      </button>
      <div className="bg-white dark:bg-slate-800 rounded-lg p-2 border">
        <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
          Writes Upside-Down
        </h3>
        <p className="text-slate-500 dark:text-slate-400">
          The Zero Gravity Pen can be used to write in any orientation.
        </p>
      </div>
    </div>
  );
}
```
- toggleDarkMode: Fungsi untuk menambah atau menghapus kelas dark dari elemen `<body>` saat tombol diklik.
- Kelas Dark Mode: Menggunakan kelas dark:bg-slate-800 dan dark:text-slate-400 untuk mengubah warna latar dan teks pada elemen saat mode gelap aktif.
## 3. Instal Plugin Tailwind CSS Typography
Tambahkan plugin @tailwindcss/typography untuk menyediakan gaya tipografi tambahan. Instal plugin dengan perintah berikut:
```bash
npm install @tailwindcss/typography
```
Setelah itu, tambahkan plugin ini ke tailwind.config.js:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
        accent: '#FFAD1F',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'), // Plugin untuk tipografi
  ],
};
```

## 4. Menggunakan Kelas Tipografi di Komponen
Setelah menambahkan plugin, Anda dapat menggunakan kelas prose untuk menerapkan gaya tipografi secara otomatis:
```html
<div className="prose dark:prose-invert">
  <h1>Welcome to the Tailwind CSS Dark Mode Example</h1>
  <p>This is an example paragraph with custom typography styling.</p>
</div>
```
- Kelas prose: Menambahkan gaya tipografi untuk teks.
- Kelas dark:prose-invert: Mengubah warna teks untuk mode gelap.
## Kesimpulan
Dengan mengikuti langkah-langkah di atas, Anda sekarang telah:
- Mengonfigurasi Tailwind CSS dengan warna kustom.
- Menambahkan mode gelap dengan kelas dark.
- Menginstal dan menggunakan plugin @tailwindcss/typography untuk gaya tipografi tambahan.