# 🎨 Portofolio Arrozy Adi Falaqi

Portfolio website built with **Next.js 14 + Framer Motion + Tailwind CSS**.

---

## 🚀 Setup Lokal (Pertama Kali)

### 1. Pastikan Node.js sudah terinstall
Download di https://nodejs.org → pilih versi **LTS**

### 2. Buat project Next.js baru
```bash
npx create-next-app@latest portofolio-arrozy
```
Pilih opsi:
- TypeScript → **No**
- Tailwind CSS → **Yes**
- App Router → **Yes**
- Semua lainnya → **No**

### 3. Masuk ke folder project
```bash
cd portofolio-arrozy
```

### 4. Install library animasi
```bash
npm install framer-motion react-intersection-observer lucide-react
```

### 5. Copy semua file dari folder ini
Salin semua file ke folder project kamu sesuai strukturnya:
```
portofolio-arrozy/
├── app/
│   ├── page.jsx
│   ├── layout.jsx
│   └── globals.css
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── Divider.jsx
├── data/
│   └── portfolio.js   ← EDIT INI untuk update konten
└── tailwind.config.js
```

### 6. Jalankan di browser
```bash
npm run dev
```
Buka http://localhost:3000 ✅

---

## ✏️ Cara Edit Konten

Semua konten ada di **`data/portfolio.js`** — tinggal edit file ini:

| Yang mau diubah | Bagian di file |
|---|---|
| Nama, bio, email | `personal` object |
| Nomor WhatsApp | `personal.whatsapp` |
| Statistik (2+, 10+, dll) | `stats` array |
| Pengalaman kerja | `experiences` array |
| Project portofolio | `projects` array |
| Skill & persentase | `skills` array |

### Cara tambah foto profil
1. Taruh foto kamu di folder `public/` dengan nama `photo.jpg`
2. Di `components/About.jsx`, cari komentar:
   ```jsx
   {/* Ganti dengan foto nyata: ... */}
   ```
3. Ganti dengan:
   ```jsx
   <Image src="/photo.jpg" width={176} height={176} className="object-cover rounded-full" alt="Arrozy" />
   ```
4. Tambahkan import di atas file: `import Image from "next/image";`

---

## 🌐 Deploy ke Vercel (Gratis)

### Langkah 1 — Upload ke GitHub
1. Buat akun di https://github.com
2. Klik **New Repository** → beri nama `portofolio-arrozy`
3. Ikuti instruksi untuk push kode dari terminal:
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/USERNAME/portofolio-arrozy.git
git push -u origin main
```

### Langkah 2 — Connect ke Vercel
1. Buka https://vercel.com → Login dengan GitHub
2. Klik **Add New → Project**
3. Pilih repo `portofolio-arrozy` → klik **Deploy**
4. Tunggu ~2 menit → selesai! 🎉

Kamu dapat URL seperti: `https://portofolio-arrozy.vercel.app`

### Langkah 3 — Custom nama domain (opsional)
Di dashboard Vercel → Settings → Domains → ubah nama jadi misalnya:
`arrozy-portfolio.vercel.app`

### Update konten setelah deploy
Setiap kali edit file dan push ke GitHub:
```bash
git add .
git commit -m "update konten"
git push
```
Vercel otomatis deploy ulang dalam 1-2 menit! 🔄

---

## 🎨 Animasi yang Sudah Ada

| Animasi | Komponen |
|---|---|
| Floating orbs di background | Hero |
| Staggered fade-up per elemen | Hero |
| Scroll reveal per section | Semua section |
| Floating avatar | About |
| Accordion expand/collapse | Experience |
| Hover lift + border glow | Semua card |
| Animated skill bars on scroll | Skills |
| Soft skill tags hover | Skills |
| Project thumbnail hover overlay | Projects |
| Contact card lift on hover | Contact |
| Animated sticky navbar | Navbar |
| Mobile hamburger menu | Navbar |

---

## 📞 Butuh Bantuan?

Tanya di Claude AI dengan melampirkan error message yang muncul di terminal.
