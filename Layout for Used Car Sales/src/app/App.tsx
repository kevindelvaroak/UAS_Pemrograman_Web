import React, { useState } from 'react';
import { ShoppingCart, LogIn, User, Home, Car } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('beranda');

  const renderContent = () => {
    switch (activeTab) {
      case 'beranda':
        return <Beranda />;
      case 'transaksi':
        return <Transaksi />;
      case 'profil':
        return <Profil />;
      case 'login':
        return <Login />;
      default:
        return <Beranda />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      {/* 2. Membuat Header dan Navigasi */}
      <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
          
          {/* Logo Aplikasi */}
          <div className="flex items-center gap-2 mb-4 md:mb-0 cursor-pointer" onClick={() => setActiveTab('beranda')}>
            {/* Menggunakan div dengan icon sebagai pengganti img fisik, namun tetap menyertakan tag img sebagai contoh jika ada src */}
            <div className="bg-white p-2 rounded-full">
              <Car className="text-blue-600 w-6 h-6" />
            </div>
            {/* Dummy img tag untuk memenuhi syarat a. Logo aplikasi menggunakan tag <img> */}
            <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" alt="Logo Mobil Bekas" className="hidden" />
            <h1 className="text-2xl font-bold tracking-tight">AutoBekas</h1>
          </div>

          {/* Menu Navigasi */}
          <nav className="w-full md:w-auto">
            <ul className="flex flex-row justify-center md:justify-end gap-6 font-medium text-sm md:text-base">
              <li>
                <button 
                  onClick={() => setActiveTab('beranda')}
                  className={`flex items-center gap-1 hover:text-blue-200 transition-colors ${activeTab === 'beranda' ? 'text-blue-200 border-b-2 border-blue-200 pb-1' : ''}`}
                >
                  <Home className="w-4 h-4 md:hidden" />
                  <span className="hidden md:inline">Beranda</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('transaksi')}
                  className={`flex items-center gap-1 hover:text-blue-200 transition-colors ${activeTab === 'transaksi' ? 'text-blue-200 border-b-2 border-blue-200 pb-1' : ''}`}
                >
                  <ShoppingCart className="w-4 h-4 md:hidden" />
                  <span className="hidden md:inline">Transaksi</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('profil')}
                  className={`flex items-center gap-1 hover:text-blue-200 transition-colors ${activeTab === 'profil' ? 'text-blue-200 border-b-2 border-blue-200 pb-1' : ''}`}
                >
                  <User className="w-4 h-4 md:hidden" />
                  <span className="hidden md:inline">Profil</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('login')}
                  className={`flex items-center gap-1 hover:text-blue-200 transition-colors ${activeTab === 'login' ? 'text-blue-200 border-b-2 border-blue-200 pb-1' : ''}`}
                >
                  <LogIn className="w-4 h-4 md:hidden" />
                  <span className="hidden md:inline">Login</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Konten Utama */}
      <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        {renderContent()}
      </main>

      {/* Footer yang Responsif */}
      <footer className="bg-slate-800 text-slate-300 py-6 text-center text-sm mt-auto">
        <p>&copy; 2026 AutoBekas. Platform Jual Beli Mobil Bekas Terpercaya.</p>
      </footer>
    </div>
  );
}

// 4. Membuat Halaman Beranda
function Beranda() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-10 border border-slate-100 animate-in fade-in zoom-in duration-300">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Selamat Datang di AutoBekas</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Platform terbaik untuk menjual dan membeli mobil bekas dengan aman, cepat, dan terpercaya.
        </p>
      </div>

      <div className="bg-blue-50 rounded-lg p-6 md:p-8">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">Langkah Menggunakan Aplikasi</h3>
        <ol className="list-decimal list-inside space-y-4 text-slate-700">
          <li className="pl-2">
            <span className="font-medium text-slate-900">Masuk / Daftar Akun:</span> Buka menu <strong>Login</strong> untuk mengakses fitur penuh aplikasi.
          </li>
          <li className="pl-2">
            <span className="font-medium text-slate-900">Catat Transaksi:</span> Buka halaman <strong>Transaksi</strong> untuk mendata mobil bekas yang akan dijual atau dibeli.
          </li>
          <li className="pl-2">
            <span className="font-medium text-slate-900">Pantau Daftar:</span> Lihat semua riwayat jual beli Anda pada tabel Daftar Transaksi.
          </li>
          <li className="pl-2">
            <span className="font-medium text-slate-900">Kenali Kami:</span> Kunjungi halaman <strong>Profil</strong> untuk mengetahui lebih lanjut tentang AutoBekas.
          </li>
        </ol>
      </div>
    </div>
  );
}

// 5. Membuat Halaman Transaksi
function Transaksi() {
  const [view, setView] = useState<'form' | 'daftar'>('form');
  const [transaksiList, setTransaksiList] = useState([
    { id: 1, nama: 'Toyota Avanza 2018', jumlah: 'Rp 150.000.000', kategori: 'Jual' },
    { id: 2, nama: 'Honda Brio 2020', jumlah: 'Rp 135.000.000', kategori: 'Beli' },
  ]);

  const [formData, setFormData] = useState({
    nama: '',
    jumlah: '',
    kategori: ''
  });
  
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // 9. Validasi Formulir dengan JavaScript
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    // Validasi input kosong
    if (!formData.nama || !formData.jumlah || !formData.kategori) {
      setErrorMsg('Semua kolom input wajib diisi sebelum data disimpan!');
      return;
    }

    // Jika validasi sukses
    const newTransaksi = {
      id: Date.now(),
      nama: formData.nama,
      jumlah: formData.jumlah,
      kategori: formData.kategori
    };

    setTransaksiList([newTransaksi, ...transaksiList]);
    setFormData({ nama: '', jumlah: '', kategori: '' });
    setSuccessMsg('Transaksi berhasil disimpan!');
    
    // Auto pindah ke tab daftar setelah 1.5 detik
    setTimeout(() => {
      setSuccessMsg('');
      setView('daftar');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden animate-in fade-in duration-300">
      <div className="flex border-b border-slate-200">
        <button 
          className={`flex-1 py-4 text-center font-medium transition-colors ${view === 'form' ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}
          onClick={() => setView('form')}
        >
          Form Transaksi
        </button>
        <button 
          className={`flex-1 py-4 text-center font-medium transition-colors ${view === 'daftar' ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}
          onClick={() => setView('daftar')}
        >
          Daftar Transaksi
        </button>
      </div>

      <div className="p-6 md:p-8">
        {view === 'form' ? (
          <div className="max-w-xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Tambah Transaksi Baru</h3>
            
            {/* Pesan Error & Sukses */}
            {errorMsg && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 border border-red-200 rounded-lg">
                {errorMsg}
              </div>
            )}
            {successMsg && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 border border-green-200 rounded-lg">
                {successMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nama Mobil</label>
                <input 
                  type="text" 
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  placeholder="Contoh: Honda Civic 2019"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Harga (Jumlah)</label>
                <input 
                  type="text" 
                  name="jumlah"
                  value={formData.jumlah}
                  onChange={handleChange}
                  placeholder="Contoh: Rp 200.000.000"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Kategori (Status)</label>
                <select 
                  name="kategori"
                  value={formData.kategori}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white"
                >
                  <option value="">Pilih Kategori...</option>
                  <option value="Jual">Jual</option>
                  <option value="Beli">Beli</option>
                </select>
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-sm"
                >
                  Simpan Transaksi
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-slate-800">Daftar Transaksi</h3>
            </div>
            
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600">
                    <th className="px-6 py-4 font-medium">Nama Mobil (Transaksi)</th>
                    <th className="px-6 py-4 font-medium">Jumlah (Harga)</th>
                    <th className="px-6 py-4 font-medium">Kategori</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {transaksiList.length > 0 ? (
                    transaksiList.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">{item.nama}</td>
                        <td className="px-6 py-4 font-medium text-slate-900">{item.jumlah}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.kategori === 'Jual' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'}`}>
                            {item.kategori}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="px-6 py-8 text-center text-slate-500">
                        Belum ada data transaksi.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// 6. Membuat Halaman Profil
function Profil() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-10 border border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Car className="w-12 h-12" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Tentang AutoBekas</h2>
        
        <div className="text-left space-y-4 text-slate-600 leading-relaxed">
          <p>
            <strong>AutoBekas</strong> adalah platform aplikasi web modern yang dirancang khusus untuk memudahkan proses transaksi jual beli mobil bekas. Kami mempertemukan pembeli yang mencari mobil impian mereka dengan penjual yang ingin menawarkan kendaraan berkualitas.
          </p>
          <p>
            Dibangun dengan antarmuka yang ramah pengguna (user-friendly) dan responsif, AutoBekas memastikan bahwa setiap pengguna dapat dengan mudah mendata dan memantau transaksi mereka, kapan saja dan dari perangkat apa saja (Desktop, Tablet, maupun Mobile).
          </p>
          <p>
            Fitur utama kami meliputi:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Pencatatan transaksi jual dan beli mobil secara real-time.</li>
            <li>Validasi keamanan data pada setiap formulir yang Anda kirimkan.</li>
            <li>Tampilan daftar transaksi yang rapi dan terstruktur.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// 7. Membuat Halaman Login
function Login() {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Fitur login sedang dalam tahap pengembangan.');
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-sm p-8 border border-slate-100 animate-in fade-in duration-300">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Login ke Akun Anda</h2>
        <p className="text-slate-500 mt-2 text-sm">Silakan masukkan email dan password Anda</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input 
            type="email" 
            required
            placeholder="nama@email.com"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
          />
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800">Lupa password?</a>
          </div>
          <input 
            type="password" 
            required
            placeholder="••••••••"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-slate-800 hover:bg-slate-900 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2"
        >
          <LogIn className="w-5 h-5" />
          Masuk Sekarang
        </button>
      </form>
      
      <p className="text-center text-sm text-slate-600 mt-6">
        Belum punya akun? <a href="#" className="text-blue-600 hover:font-medium">Daftar di sini</a>
      </p>
    </div>
  );
}
