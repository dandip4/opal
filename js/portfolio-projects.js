/**
 * Data  proyek portofolio — ganti detail nanti sesuai CV asli.
 */
(function () {
  var PORTFOLIO_IMAGES = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1555065226-8e3a73e9dd59?w=600&h=400&fit=crop",
  ];

  var PORTFOLIO_PROJECTS = [
    {
      id: "food-rescue-2026",
      year: 2026,
      category: "mobile",
      title: "Food Rescue Platform",
      client: "Personal Project",
      status: "ongoing",
      url: "",
      tech: ["Flutter", "Laravel", "MySQL"],
      summary: "Platform pengurangan food waste — modul donasi, pickup, dan dasbor (, detail menyusul).",
      detail:
        "Proyek pribadi untuk menghubungkan penyedia makanan berlebih dengan penerima. Rencana fitur: autentikasi, listing stok, notifikasi, dan panel admin ringan.",
    },
    {
      id: "inventory-distributed-2026",
      year: 2026,
      category: "data",
      title: "Distributed Inventory System",
      client: "Personal Project",
      status: "ongoing",
      url: "",
      tech: ["Node.js", "MySQL", "React"],
      summary: "Sistem inventori terdistribusi antar cabang — stok, transfer, dan rekonsiliasi ().",
      detail: "Eksperimen arsitektur multi-lokasi dengan sinkronisasi stok dan audit trail. Detail teknis dan diagram alur akan dilengkapi.",
    },
    {
      id: "library-2026",
      year: 2026,
      category: "data",
      title: "Library Management System",
      client: "Personal Project",
      status: "ongoing",
      url: "",
      tech: ["Laravel", "PHP", "MySQL"],
      summary: "Manajemen koleksi buku, peminjaman, dan anggota perpustakaan ().",
      detail: "Modul katalog, sirkulasi peminjaman, denda, dan laporan harian. Cocok sebagai studi kasus CRUD + aturan bisnis.",
    },
    {
      id: "pathcare-2026",
      year: 2026,
      category: "web",
      title: "Pathcare System",
      client: "Client Project",
      status: "ongoing",
      url: "",
      tech: ["Laravel", "JavaScript", "MySQL"],
      summary: "Sistem informasi untuk klien Pathcare — alur klinis dan administrasi ().",
      detail: "Kolaborasi dengan klien untuk kebutuhan operasional kesehatan. Spesifikasi modul dan integrasi akan diperbarui setelah finalisasi scope.",
    },
    {
      id: "dmc-store-2025",
      year: 2025,
      category: "web",
      title: "DMC Computer System",
      client: "DMC Computer Cicurug",
      status: "internal",
      url: "",
      richModal: true,
      image: "img/DMC/dashboard-admin.png",
      gallery: [
        { src: "img/DMC/landing-page.png", alt: "Landing page DMC Computer System" },
        { src: "img/DMC/dashboard-admin.png", alt: "Dashboard admin DMC" },
        { src: "img/DMC/dashboard-konsumen.png", alt: "Dashboard portal konsumen" },
      ],
      tech: [
        "Laravel 13",
        "Next.js 16",
        "React 19",
        "TypeScript",
        "MySQL",
        "Sanctum",
        "Spatie Permission",
        "Tailwind CSS 4",
      ],
      summary:
        "Aplikasi web full-stack untuk operasional toko komputer terpusat — penjualan, service, inventori, keuangan, dan portal pelanggan dengan RBAC multi-role.",
      detail:
        "REST API Laravel 13 dan frontend Next.js 16 dengan dashboard dinamis per peran pengguna.",
    },
    {
      id: "simpeg-cigombong-2025",
      year: 2025,
      category: "data",
      title: "Sistem Informasi Pengelolaan Kepegawaian",
      client: "Sekjen Kecamatan Cigombong",
      status: "internal",
      url: "",
      tech: ["Laravel", "PHP", "MySQL"],
      summary: "Modul data pegawai, riwayat jabatan, dan dokumen kepegawaian tingkat kecamatan.",
      detail: "Proyek internal pemerintahan daerah. Menyederhanakan pencatatan ASN dan pelaporan administratif.",
    },
    {
      id: "elearning-2025",
      year: 2025,
      category: "web",
      title: "E-Learning Application",
      client: "Client Project",
      status: "live",
      url: "",
      tech: ["Laravel", "JavaScript", "MySQL"],
      summary: "Platform pembelajaran daring: materi, kuis, dan progres peserta.",
      detail: "Peran full stack pada pengembangan modul kursus dan autentikasi peran (admin/instruktur/peserta).",
    },
    {
      id: "eduwisata-2025",
      year: 2025,
      category: "web",
      title: "Sistem Informasi Desa Wisata",
      client: "Desa Wisata Tamansari, Bogor",
      status: "live",
      url: "https://eduwisata.creators.co.id/",
      tech: ["Laravel", "Tailwind", "MySQL"],
      summary: "Website dan sistem informasi desa wisata edukatif.",
      detail: "Menampilkan paket wisata, galeri, dan konten edukasi. Integrasi konten dinamis untuk pengelola desa.",
    },
    {
      id: "personal-web-2025",
      year: 2025,
      category: "web",
      title: "Personal Website",
      client: "Myself",
      status: "ongoing",
      url: "https://danadipa-nugraha.vercel.app/",
      tech: ["HTML", "Tailwind", "JavaScript"],
      summary: "Portofolio pribadi dan blog — halaman ini bagian dari proyek tersebut.",
      detail: "Situs statis dengan dark mode, animasi GSAP, dan halaman blog/artikel terpisah.",
    },
    {
      id: "dinamika-si-2025",
      year: 2025,
      category: "web",
      title: "Website Korporat Dinamika SI",
      client: "PT. Dinamika Solusi Informatika",
      status: "live",
      url: "https://dinamika-si.com/",
      richModal: true,
      image: "img/Dinamika/Screenshot%202026-05-15%20184620.png",
      gallery: [
        {
          src: "img/Dinamika/Screenshot%202026-05-15%20184412.png",
          alt: "Website publik PT. Dinamika Solusi Informatika",
        },
        {
          src: "img/Dinamika/Screenshot%202026-05-15%20184547.png",
          alt: "Halaman konten dan navigasi multibahasa",
        },
        {
          src: "img/Dinamika/Screenshot%202026-05-15%20184620.png",
          alt: "Dashboard admin CMS dan analytics",
        },
      ],
      tech: [
        "Laravel 12",
        "PHP 8.2",
        "MySQL",
        "Pusher",
        "Tailwind CSS 4",
        "Vite 6",
        "Spatie Translatable",
      ],
      summary:
        "Website korporat full-stack: situs publik multibahasa, CMS admin, analytics pengunjung, live chat real-time, dan autentikasi OTP + reCAPTCHA.",
      detail:
        "Monolith Laravel 12 dengan Blade, Tailwind CSS 4, dan integrasi Pusher untuk komunikasi real-time.",
    },
    {
      id: "dinsos-bekasi-2025",
      year: 2025,
      category: "web",
      title: "Rework Website Dinas Sosial Kota Bekasi",
      client: "Dinas Sosial Kota Bekasi",
      status: "live",
      url: "https://dinsos.bekasikota.go.id/",
      tech: ["Laravel", "PHP", "MySQL"],
      summary: "Perombakan tampilan dan struktur konten portal dinas.",
      detail: "Memperbarui navigasi, template halaman, dan integrasi konten layanan sosial agar lebih mudah diakses warga.",
    },
    {
      id: "ldk-kampus-2024",
      year: 2024,
      category: "web",
      title: "Website Campus Community",
      client: "LDK DKM Al-Kautsar Pakuan University",
      status: "ongoing",
      url: "",
      tech: ["Laravel", "PHP", "MySQL"],
      summary: "Portal komunitas kampus untuk kegiatan dan informasi organisasi.",
      detail: "Masih berjalan — modul pengumuman, galeri, dan registrasi kegiatan direncanakan bertahap.",
    },
    {
      id: "sahabat-safety-2024",
      year: 2024,
      category: "web",
      title: "Company Profile Website",
      client: "PT. Sahabat Selamat Indonesia",
      status: "live",
      url: "https://sahabatsafety.co.id/",
      tech: ["Laravel", "PHP", "Bootstrap"],
      summary: "Profil perusahaan alat keselamatan kerja dan layanan terkait.",
      detail: "Menyajikan katalog produk, tentang perusahaan, dan kanal kontak bisnis.",
    },
    {
      id: "pps-bahasa-2024",
      year: 2024,
      category: "data",
      title: "Sistem Kerjasama Persatuan Prodi Bahasa Indonesia",
      client: "Client Project",
      status: "live",
      url: "",
      tech: ["Laravel", "PHP", "MySQL"],
      summary: "Sistem informasi kerjasama antar program studi bahasa Indonesia.",
      detail: "Pencatatan kegiatan kolaborasi, dokumen, dan pelaporan untuk asosiasi program studi.",
    },
    {
      id: "fundraising-2024",
      year: 2024,
      category: "web",
      title: "Website Penggalangan Dana",
      client: "Personal Project (Course BWA)",
      status: "live",
      url: "",
      tech: ["HTML", "CSS", "JavaScript"],
      summary: "Landing page kampanye donasi — proyek kursus.",
      detail: "Fokus pada storytelling, form donasi , dan responsif mobile.",
    },
    {
      id: "ewallet-2024",
      year: 2024,
      category: "mobile",
      title: "E-Wallet Application",
      client: "Personal Project (Course BWA)",
      status: "live",
      url: "",
      tech: ["Flutter", "Dart", "Firebase"],
      summary: "Aplikasi dompet digital simulasi — transfer dan riwayat ().",
      detail: "Latihan UI mobile, state management, dan integrasi backend ringan untuk kursus.",
    },
    {
      id: "absensi-wajah-2024",
      year: 2024,
      category: "mobile",
      title: "Aplikasi Absensi Berbasis Wajah",
      client: "Personal Project",
      status: "live",
      url: "",
      tech: ["Flutter", "Python", "MySQL"],
      summary: "Presensi dengan pengenalan wajah — proof of concept.",
      detail: "Eksperimen capture wajah, validasi kehadiran, dan rekapitulasi untuk admin.",
    },
    {
      id: "belantara-2024",
      year: 2024,
      category: "web",
      title: "Feature Update Project",
      client: "Belantara Foundation",
      status: "live",
      url: "https://belantara.or.id/",
      tech: ["Laravel", "PHP", "JavaScript"],
      summary: "Pembaruan fitur pada website yayasan lingkungan.",
      detail: "Iterasi modul konten dan perbaikan alur publikasi artikel/kegiatan.",
    },
    {
      id: "quiz-kehati-2024",
      year: 2024,
      category: "web",
      title: "Quiz Game Website",
      client: "SMA 1 Sukaraja, Bogor",
      status: "live",
      url: "https://quizkehati.com/",
      tech: ["PHP", "JavaScript", "MySQL"],
      summary: "Game kuis interaktif untuk edukasi kehatiapan.",
      detail: "Soal bergilir, skor, dan leaderboard sederhana untuk kegiatan sekolah.",
    },
    {
      id: "baznas-zakathon-2024",
      year: 2024,
      category: "mobile",
      title: "Prototype Aplikasi Baznas",
      client: "Lomba Zakathon Baznas",
      status: "live",
      url: "",
      tech: ["Figma", "Flutter"],
      summary: "Prototipe aplikasi zakat — kompetisi Zakathon.",
      detail: "Wireframe hingga prototipe interaktif untuk alur donasi dan transparansi.",
    },
    {
      id: "sijadwal-2024",
      year: 2024,
      category: "web",
      title: "Sistem Jadwal Kuliah",
      client: "Personal Project",
      status: "live",
      url: "",
      tech: ["Laravel", "PHP", "MySQL"],
      summary: "Manajemen jadwal perkuliahan pribadi/mahasiswa.",
      detail: "Input mata kuliah, reminder, dan tampilan mingguan.",
    },
    {
      id: "klinik-dna-2023",
      year: 2023,
      category: "data",
      title: "Clinic Management System",
      client: "Klinik Pratama DNA Favorit",
      status: "internal",
      url: "",
      tech: ["Laravel", "PHP", "MySQL"],
      summary: "Sistem internal klinik: pasien, antrian, dan rekam medis ringkas.",
      detail: "Digunakan operasional harian klinik. Modul laporan kunjungan dan stok obat dasar.",
    },
    {
      id: "listin-2023",
      year: 2023,
      category: "web",
      title: "Community System Update",
      client: "listin.com",
      status: "archived",
      url: "",
      tech: ["Laravel", "JavaScript", "MySQL"],
      summary: "Pembaruan fitur komunitas — proyek diarsipkan.",
      detail: "Perbaikan modul listing dan interaksi pengguna. Deployment tidak lagi aktif.",
    },
    {
      id: "von-phanue-2023",
      year: 2023,
      category: "web",
      title: "Company Profile Website",
      client: "Von Phanue Kennel",
      status: "archived",
      url: "",
      tech: ["PHP", "HTML", "CSS"],
      summary: "Website profil bisnis peternakan — diarsipkan.",
      detail: "Galeri, layanan, dan kontak. Diganti hosting/domain oleh klien.",
    },
    {
      id: "billing-putik-2022",
      year: 2022,
      category: "data",
      title: "Billing and Payment System",
      client: "PUTIK Pakuan University",
      status: "internal",
      url: "",
      tech: ["Laravel", "PHP", "MySQL"],
      summary: "Tagihan dan pembayaran internal unit universitas.",
      detail: "Modul invoice, status bayar, dan rekapitulasi untuk admin keuangan.",
    },
    {
      id: "korespondensi-feb-2022",
      year: 2022,
      category: "web",
      title: "Implementasi Fitur Korespondensi FEB UNPAK",
      client: "PUTIK Pakuan University",
      status: "internal",
      url: "",
      tech: ["Laravel", "PHP", "MySQL"],
      summary: "Surat masuk/keluar digital untuk Fakultas Ekonomi.",
      detail: "Alur disposisi, arsip digital, dan pencarian surat.",
    },
    {
      id: "simpeg-putik-2022",
      year: 2022,
      category: "data",
      title: "Modul Data Pegawai SIMPEG UNPAK",
      client: "PUTIK Pakuan University",
      status: "internal",
      url: "",
      tech: ["Laravel", "PHP", "MySQL"],
      summary: "Pengembangan modul kepegawaian pada SIMPEG universitas.",
      detail: "CRUD pegawai, riwayat, dan integrasi dengan modul existing SIMPEG.",
    },
  ];

  var activeCategory = "all";
  var activeYear = "all";

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function statusLabel(status) {
    var map = {
      ongoing: "Berjalan",
      live: "Live",
      internal: "Internal",
      archived: "Arsip",
    };
    return map[status] || status;
  }

  function categoryLabel(cat) {
    var map = { web: "Web", mobile: "Mobile", data: "Sistem informasi" };
    return map[cat] || cat;
  }

  function buildDmcModalHtml(p) {
    var gallery = (p.gallery || [])
      .map(function (g) {
        return (
          '<img src="' +
          escapeHtml(g.src) +
          '" alt="' +
          escapeHtml(g.alt) +
          '" class="gallery-image" loading="lazy" width="400" height="300" />'
        );
      })
      .join("");

    return (
      '<div class="modal-detail space-y-4">' +
      "<h3>Tentang proyek</h3>" +
      "<p>DMC Computer System adalah aplikasi web full-stack yang dirancang untuk membantu operasional toko komputer secara terpusat — mulai dari transaksi penjualan, service perangkat, inventori barang, pengelolaan keuangan, hingga portal pelanggan.</p>" +
      "<p>Sistem menggunakan arsitektur REST API berbasis Laravel 13 dan frontend modern menggunakan Next.js 16 dengan dashboard yang menyesuaikan peran pengguna secara dinamis.</p>" +
      "<h3>Role-Based Access Control</h3>" +
      '<table class="modal-rbac-table"><thead><tr><th scope="col">Peran</th><th scope="col">Akses utama</th></tr></thead><tbody>' +
      "<tr><td>Admin</td><td>Akses operasional penuh</td></tr>" +
      "<tr><td>Kasir</td><td>Penjualan, pembayaran, hutang</td></tr>" +
      "<tr><td>Teknisi</td><td>Alur service &amp; pembaruan perbaikan</td></tr>" +
      "<tr><td>Manager</td><td>Monitoring &amp; pelaporan</td></tr>" +
      "<tr><td>Customer</td><td>Portal pelanggan &amp; pelacakan</td></tr>" +
      "</tbody></table>" +
      "<p>RBAC dibangun menggunakan Sanctum dan Spatie Permission dengan 50+ izin granular agar setiap pengguna hanya mengakses fitur sesuai tanggung jawabnya.</p>" +
      "<h3>Fitur inti</h3>" +
      "<p><strong>Manajemen operasional</strong></p>" +
      "<ul>" +
      "<li>Transaksi penjualan multi-item</li>" +
      "<li>Order service &amp; pelacakan perbaikan</li>" +
      "<li>Pengurangan stok otomatis</li>" +
      "<li>Manajemen hutang &amp; cicilan</li>" +
      "<li>Sistem invoice yang dapat dicetak</li>" +
      "</ul>" +
      "<p><strong>Sistem inventori</strong></p>" +
      "<ul>" +
      "<li>Manajemen produk &amp; supplier</li>" +
      "<li>Alur penyesuaian stok</li>" +
      "<li>Monitoring stok rendah</li>" +
      "<li>Dukungan impor/ekspor Excel</li>" +
      "</ul>" +
      "<p><strong>Keuangan &amp; pelaporan</strong></p>" +
      "<ul>" +
      "<li>Snapshot saldo harian</li>" +
      "<li>Pencatatan pemasukan &amp; pengeluaran</li>" +
      "<li>Analitik kinerja pengguna</li>" +
      "<li>Activity log &amp; audit trail</li>" +
      "</ul>" +
      "<p><strong>Portal pelanggan</strong></p>" +
      "<ul>" +
      "<li>Riwayat pembelian</li>" +
      "<li>Pelacakan progres service</li>" +
      "<li>Visibilitas tagihan &amp; hutang</li>" +
      "<li>Dashboard pelanggan khusus</li>" +
      "</ul>" +
      "<h3>Sorotan teknis</h3>" +
      "<ul>" +
      "<li>Arsitektur REST API dengan <code>/api/v1</code></li>" +
      "<li>Alur bisnis aman transaksi (transaction-safe)</li>" +
      "<li>Navigasi dinamis berbasis peran</li>" +
      "<li>Arsitektur CRUD yang dapat digunakan ulang</li>" +
      "<li>Pengujian otomatis fitur backend</li>" +
      "<li>Komponen frontend modular</li>" +
      "<li>Sinkronisasi keuangan &amp; inventori terintegrasi</li>" +
      "</ul>" +
      "<h3>Tech stack</h3>" +
      "<p><strong>Backend:</strong> PHP 8.3, Laravel 13, Sanctum, Spatie Permission, MySQL, PhpSpreadsheet</p>" +
      "<p><strong>Frontend:</strong> Next.js 16, React 19, TypeScript, Tailwind CSS 4, shadcn/ui</p>" +
      "<h3>Tantangan yang diselesaikan</h3>" +
      "<ul>" +
      "<li>Sinkronisasi otomatis antara transaksi, stok, hutang, dan saldo harian</li>" +
      "<li>Pemisahan akses antar peran staff dan pelanggan</li>" +
      "<li>Dashboard berbeda berdasarkan peran pengguna</li>" +
      "<li>Pelacakan progres service perangkat secara real-time</li>" +
      "<li>Struktur frontend modular untuk mempercepat penambahan fitur</li>" +
      "</ul>" +
      "<h3>Galeri</h3>" +
      '<div class="project-gallery">' +
      gallery +
      "</div>" +
      "<h3>Hasil</h3>" +
      "<p>Proyek ini berhasil mengintegrasikan berbagai alur operasional toko komputer dalam satu platform terpusat dengan sistem berbasis peran yang scalable dan mudah dirawat. Sistem juga memberi pengalaman pelanggan yang lebih transparan melalui portal pelacakan service dan tagihan.</p>" +
      "</div>"
    );
  }

  function buildDinamikaModalHtml(p) {
    var gallery = (p.gallery || [])
      .map(function (g) {
        return (
          '<img src="' +
          escapeHtml(g.src) +
          '" alt="' +
          escapeHtml(g.alt) +
          '" class="gallery-image" loading="lazy" width="400" height="300" />'
        );
      })
      .join("");

    return (
      '<div class="modal-detail space-y-4">' +
      "<h3>Tentang proyek</h3>" +
      "<p>Proyek website korporat full-stack untuk perusahaan IT berbasis Laravel yang mencakup website publik multibahasa, admin CMS lengkap, analytics pengunjung custom, live chat real-time, serta sistem autentikasi admin menggunakan OTP email dan reCAPTCHA.</p>" +
      "<h3>Fitur inti</h3>" +
      "<p><strong>CMS korporat</strong></p>" +
      "<ul>" +
      "<li>Manajemen halaman dinamis</li>" +
      "<li>Manajemen berita &amp; artikel</li>" +
      "<li>Landing page builder</li>" +
      "<li>Manajemen menu hierarkis</li>" +
      "<li>Manajemen produk &amp; mitra</li>" +
      "</ul>" +
      "<p><strong>Sistem multibahasa</strong></p>" +
      "<ul>" +
      "<li>Dukungan Bahasa Indonesia &amp; English</li>" +
      "<li>Konten terjemahan dinamis</li>" +
      "<li>Pergantian locale berbasis sesi</li>" +
      "</ul>" +
      "<p><strong>Analytics &amp; pelacakan</strong></p>" +
      "<ul>" +
      "<li>Dashboard analytics pengunjung</li>" +
      "<li>Pelacakan perangkat &amp; geolokasi</li>" +
      "<li>Pelacakan klik WhatsApp</li>" +
      "<li>Analytics pesan kontak</li>" +
      "</ul>" +
      "<p><strong>Keamanan</strong></p>" +
      "<ul>" +
      "<li>Autentikasi OTP via email</li>" +
      "<li>Proteksi reCAPTCHA</li>" +
      "<li>Middleware security headers</li>" +
      "<li>Reset password via OTP</li>" +
      "</ul>" +
      "<p><strong>Fitur real-time</strong></p>" +
      "<ul>" +
      "<li>Live chat dengan admin</li>" +
      "<li>Integrasi bot FAQ</li>" +
      "<li>Pesan real-time dengan Pusher</li>" +
      "</ul>" +
      "<h3>Peran admin</h3>" +
      '<table class="modal-rbac-table"><thead><tr><th scope="col">Area</th><th scope="col">Kemampuan</th></tr></thead><tbody>' +
      "<tr><td>Dashboard admin</td><td>Statistik konten, analytics pengunjung, monitoring operasional</td></tr>" +
      "<tr><td>Manajemen konten</td><td>Halaman, berita, menu, produk, tim, dan section landing</td></tr>" +
      "<tr><td>Interaksi pelanggan</td><td>Kotak kontak, FAQ, dan penanganan live chat</td></tr>" +
      "<tr><td>Alat operasional</td><td>Backup database, pengaturan situs, dan manajemen SEO</td></tr>" +
      "</tbody></table>" +
      "<h3>Sorotan teknis</h3>" +
      "<ul>" +
      "<li>Arsitektur controller FE/BE modular</li>" +
      "<li>Alur CMS siap produksi</li>" +
      "<li>Sistem analytics pengunjung custom</li>" +
      "<li>Komunikasi real-time dengan Pusher</li>" +
      "<li>Landing page builder dinamis</li>" +
      "<li>Otomasi SEO &amp; generasi sitemap</li>" +
      "<li>Arsitektur konten multibahasa</li>" +
      "<li>Autentikasi admin berbasis OTP</li>" +
      "</ul>" +
      "<h3>Arsitektur</h3>" +
      '<pre class="modal-architecture text-xs sm:text-sm p-4 rounded-lg bg-gray-100 dark:bg-gray-900 overflow-x-auto whitespace-pre-wrap">Website Publik\nAdmin CMS Panel\nSistem Live Chat\n        ↓\nAplikasi Monolith Laravel 12\n        ↓\nDatabase MySQL</pre>' +
      "<h3>Tech stack</h3>" +
      "<p><strong>Backend:</strong> Laravel 12, PHP 8.2, MySQL, Spatie Translatable, Pusher</p>" +
      "<p><strong>Frontend:</strong> Blade, Tailwind CSS 4, Vite 6, JavaScript</p>" +
      "<h3>Galeri</h3>" +
      '<div class="project-gallery">' +
      gallery +
      "</div>" +
      "<h3>Hasil</h3>" +
      "<p>Platform terintegrasi yang menggabungkan presence korporat multibahasa, CMS fleksibel, insight pengunjung, dan kanal komunikasi real-time — dengan lapisan keamanan OTP dan reCAPTCHA untuk panel admin.</p>" +
      "</div>"
    );
  }

  function getModalBodyHtml(p) {
    if (p.richModal && p.id === "dmc-store-2025") return buildDmcModalHtml(p);
    if (p.richModal && p.id === "dinamika-si-2025") return buildDinamikaModalHtml(p);
    if (p.modalHtml) return p.modalHtml;
    return "<p>" + escapeHtml(p.detail || p.summary) + "</p>";
  }

  function contactHref() {
    var path = (window.location.pathname || "").toLowerCase();
    if (!path || path.endsWith("/") || path.endsWith("index.html")) return "#contact";
    return "index.html#contact";
  }

  function setChipActive(selector, activeBtn, activeClasses, inactiveClasses) {
    document.querySelectorAll(selector).forEach(function (b) {
      inactiveClasses.forEach(function (c) {
        b.classList.remove(c);
      });
      activeClasses.forEach(function (c) {
        b.classList.remove(c);
      });
      b.classList.add.apply(b.classList, inactiveClasses);
    });
    activeBtn.classList.remove.apply(activeBtn.classList, inactiveClasses);
    activeClasses.forEach(function (c) {
      activeBtn.classList.add(c);
    });
  }

  function cardMatches(card) {
    var cat = card.getAttribute("data-category");
    var year = card.getAttribute("data-year");
    var catOk = activeCategory === "all" || cat === activeCategory;
    var yearOk = activeYear === "all" || year === String(activeYear);
    return catOk && yearOk;
  }

  function updateResultsCount() {
    var el = document.getElementById("portfolio-results-count");
    if (!el) return;
    var visible = 0;
    document.querySelectorAll(".project-item").forEach(function (card) {
      if (cardMatches(card)) visible++;
    });
    el.textContent =
      "Menampilkan " + visible + " dari " + PORTFOLIO_PROJECTS.length + " proyek";
  }

  function applyPortfolioFilters(animate) {
    var visible = [];
    document.querySelectorAll(".project-item").forEach(function (card) {
      var show = cardMatches(card);
      card.style.display = show ? "" : "none";
      if (show) visible.push(card);
    });
    updateResultsCount();

    if (!animate) return;
    var reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof gsap === "undefined" || !visible.length) return;

    requestAnimationFrame(function () {
      if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
      gsap.from(visible, {
        opacity: 0,
        y: 28,
        duration: 0.55,
        stagger: 0.05,
        ease: "power3.out",
        overwrite: "auto",
      });
    });
  }

  function renderPortfolioGrid() {
    var grid = document.getElementById("portfolio-grid");
    if (!grid) return;

    grid.innerHTML = PORTFOLIO_PROJECTS.map(function (p, i) {
      var img = p.image || PORTFOLIO_IMAGES[i % PORTFOLIO_IMAGES.length];
      var techHtml = (p.tech || [])
        .slice(0, 4)
        .map(function (t) {
          return '<span class="tech-badge">' + escapeHtml(t) + "</span>";
        })
        .join("");

      var links = "";
      if (p.url) {
        links +=
          '<a href="' +
          escapeHtml(p.url) +
          '" target="_blank" rel="noopener noreferrer" class="font-medium text-primary hover:underline">Live</a>' +
          '<span class="text-gray-300 dark:text-gray-600" aria-hidden="true">·</span>';
      }
      links +=
        '<button type="button" class="font-medium text-gray-700 dark:text-gray-300 hover:underline bg-transparent border-0 p-0 cursor-pointer portfolio-detail-btn" data-project-id="' +
        escapeHtml(p.id) +
        '">Detail</button>';

      return (
        '<article class="project-item group card-hover flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200/80 dark:border-gray-700/80 shadow-lg hover:shadow-2xl transition-all duration-500" data-category="' +
        escapeHtml(p.category) +
        '" data-year="' +
        p.year +
        '" data-project-id="' +
        escapeHtml(p.id) +
        '">' +
        '<div class="relative overflow-hidden shrink-0">' +
        '<img src="' +
        img +
        '" alt="' +
        escapeHtml(p.title) +
        '" class="w-full h-52 object-cover transform transition-transform duration-500 group-hover:scale-110" loading="lazy" width="600" height="400" />' +
        '<span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-gray-100">' +
        p.year +
        "</span>" +
        "</div>" +
        '<div class="p-6 flex flex-col flex-grow">' +
        '<p class="text-xs font-medium uppercase tracking-wide text-primary dark:text-gray-400 mb-1">' +
        escapeHtml(categoryLabel(p.category)) +
        " · " +
        escapeHtml(statusLabel(p.status)) +
        "</p>" +
        "<h3 class=\"text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 transition-colors group-hover:text-primary\">" +
        escapeHtml(p.title) +
        "</h3>" +
        '<p class="text-xs text-gray-500 dark:text-gray-400 mb-2">' +
        escapeHtml(p.client) +
        "</p>" +
        '<p class="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow leading-relaxed line-clamp-3">' +
        escapeHtml(p.summary) +
        "</p>" +
        '<div class="flex flex-wrap gap-2 mb-4">' +
        techHtml +
        "</div>" +
        '<div class="flex flex-wrap items-center gap-x-2 gap-y-1 mt-auto pt-2 border-t border-gray-100 dark:border-gray-700 text-sm">' +
        links +
        "</div>" +
        "</div>" +
        "</article>"
      );
    }).join("");

    grid.querySelectorAll(".project-item").forEach(function (el) {
      el.classList.add("card-hover-effect");
    });

    grid.addEventListener("click", function (e) {
      var btn = e.target.closest(".portfolio-detail-btn");
      if (btn) openPortfolioModal(btn.getAttribute("data-project-id"));
    });

    applyPortfolioFilters(false);
    document.dispatchEvent(new CustomEvent("portfolio:rendered"));
  }

  function openPortfolioModal(projectId) {
    var p = PORTFOLIO_PROJECTS.find(function (x) {
      return x.id === projectId;
    });
    if (!p) return;

    var modal = document.getElementById("portfolio-detail-modal");
    if (!modal) return;

    var titleEl = modal.querySelector("[data-modal-title]");
    var metaEl = modal.querySelector("[data-modal-meta]");
    var bodyEl = modal.querySelector("[data-modal-body]");
    var techEl = modal.querySelector("[data-modal-tech]");
    var actionsEl = modal.querySelector("[data-modal-actions]");

    if (titleEl) titleEl.textContent = p.title;
    if (metaEl) {
      var meta =
        p.year + " · " + p.client + " · " + statusLabel(p.status);
      if (!p.richModal) meta += " (data )";
      metaEl.textContent = meta;
    }
    if (bodyEl) {
      if (p.richModal || p.modalHtml) {
        bodyEl.innerHTML = getModalBodyHtml(p);
      } else {
        bodyEl.textContent = p.detail || p.summary;
      }
    }
    if (techEl) {
      techEl.innerHTML = (p.tech || [])
        .map(function (t) {
          return '<span class="tech-badge">' + escapeHtml(t) + "</span>";
        })
        .join("");
      techEl.style.display = p.richModal ? "none" : "";
    }
    if (actionsEl) {
      actionsEl.innerHTML = p.url
        ? '<a href="' +
          escapeHtml(p.url) +
          '" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-opacity-90">Buka situs</a>'
        : '<a href="' +
          contactHref() +
          '" class="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-opacity-90">Hubungi saya</a>';
    }

    document.querySelectorAll(".portfolio-modal.active").forEach(function (m) {
      m.classList.remove("active");
    });
    modal.classList.add("active");
    document.body.classList.add("modal-open");

    var box = modal.querySelector(".modal-content");
    if (box) {
      if (p.richModal) box.classList.add("modal-content--rich");
      else box.classList.remove("modal-content--rich");
    }
    var reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (box && typeof gsap !== "undefined" && !reduce) {
      gsap.fromTo(
        box,
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power3.out" }
      );
    }
  }

  function closePortfolioModal() {
    var modal = document.getElementById("portfolio-detail-modal");
    if (!modal) return;
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
  }

  function initPortfolioFilters() {
    var activeChip = ["bg-primary", "text-white"];
    var inactiveChip = ["bg-gray-200", "dark:bg-gray-700", "text-gray-800", "dark:text-gray-200"];

    document.querySelectorAll(".portfolio-filter").forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeCategory = btn.getAttribute("data-filter");
        setChipActive(".portfolio-filter", btn, activeChip, inactiveChip);
        applyPortfolioFilters(true);
      });
    });

    document.querySelectorAll(".portfolio-year-filter").forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeYear = btn.getAttribute("data-year");
        setChipActive(".portfolio-year-filter", btn, activeChip, inactiveChip);
        applyPortfolioFilters(true);
      });
    });
  }

  window.openPortfolioModal = openPortfolioModal;
  window.closePortfolioModal = closePortfolioModal;

  document.addEventListener("DOMContentLoaded", function () {
    renderPortfolioGrid();
    initPortfolioFilters();

    var modal = document.getElementById("portfolio-detail-modal");
    if (modal) {
      modal.addEventListener("click", function (e) {
        if (e.target === modal) closePortfolioModal();
      });
      var closeBtn = modal.querySelector(".modal-close");
      if (closeBtn) closeBtn.addEventListener("click", closePortfolioModal);
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closePortfolioModal();
    });
  });
})();
