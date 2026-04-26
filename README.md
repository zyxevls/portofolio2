# Portofolio — Muhamad Jaelani (ZYXEVLS)

Website portofolio pribadi yang dibangun dengan **React + Vite + TailwindCSS**, menampilkan desain futuristik dengan efek neon, animasi halus, dan partikel interaktif.

---

## 🚀 Tech Stack

| Teknologi | Keterangan |
|---|---|
| [React](https://react.dev) | UI library utama |
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [TailwindCSS](https://tailwindcss.com) | Utility-first CSS framework |
| [Framer Motion](https://www.framer.com/motion/) | Animasi dan transisi |
| [Lucide React](https://lucide.dev) | Icon set |
| [React Type Animation](https://github.com/maxeth/react-type-animation) | Animasi teks mengetik |

---

## 📁 Struktur Folder

```
portofolio2/
├── public/
│   └── img/
│       └── profile.png        # Foto profil
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigasi atas
│   │   ├── Hero.jsx            # Halaman utama / landing
│   │   ├── About.jsx           # Tentang saya
│   │   ├── Skills.jsx          # Teknologi & tools
│   │   ├── Projects.jsx        # Proyek-proyek
│   │   ├── Education.jsx       # Riwayat pendidikan
│   │   ├── CardCyber.jsx       # Komponen kartu cyber
│   │   └── Footer.jsx          # Footer halaman
│   ├── App.jsx                 # Root komponen
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── vite.config.js
├── package.json
└── LICENSE
```

---

## 🎨 Fitur

- **Hero Section** — Animasi partikel canvas, teks mengetik otomatis, dan tombol Resume & View My Work
- **About Section** — Foto profil, deskripsi singkat, dan highlight kemampuan (Frontend Dev, System Logic, UI Design, Web Integration)
- **Skills / Technologies** — Grid ikon 24+ teknologi dengan efek hover 3D tilt
- **Projects** — Kartu proyek dengan efek holografik dan tilt 3D interaktif
- **Education** — Riwayat pendidikan dengan kartu animasi
- **Desain** — Tema gelap futuristik dengan warna neon `#80ffd4` (mint) dan `#b8c2ff` (lavender)

---

## ⚙️ Instalasi & Menjalankan

### Prasyarat

- [Node.js](https://nodejs.org) v18 atau lebih baru
- npm (sudah termasuk bersama Node.js)

### Langkah-langkah

```bash
# 1. Clone repositori
git clone https://github.com/zyxevls/portofolio2.git
cd portofolio2

# 2. Install dependensi
npm install

# 3. Jalankan development server
npm run dev
```

Buka browser dan akses `http://localhost:5173`.

### Build untuk Produksi

```bash
npm run build
```

File hasil build tersimpan di folder `dist/`.

### Preview Build

```bash
npm run preview
```

---

## 📜 Lisensi

Proyek ini dilisensikan di bawah [Apache License 2.0](LICENSE).

```
Copyright 2025 Muhamad Jaelani (ZYXEVLS)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
