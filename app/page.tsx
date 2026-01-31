'use client';

import React, { useState } from 'react';
import { ShoppingBag, Star, Smartphone, Gamepad2, MessageCircle, CheckCircle, Zap, Instagram, ChevronRight, Users, Globe, X, Send, User, Lock, Link as LinkIcon, Edit3, Search } from 'lucide-react';

// --- TIPE DATA ---
type Product = {
  id: number;
  category: string;
  name: string;
  price: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
};

type Category = {
  id: string;
  name: string;
};

export default function JulianStore() {
  // --- STATE ---
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState(''); // State untuk pencarian
  
  // State Form
  const [formData, setFormData] = useState({
    name: '',
    target: '',     
    account: '',    
    password: '',   
    detail: '',     
    budget: ''      
  });

  // --- DATA KATEGORI ---
  const categories: Category[] = [
    { id: 'all', name: 'Semua' },
    { id: 'website', name: 'Jasa Website' },
    { id: 'premium', name: 'Aplikasi Premium' },
    { id: 'smm', name: 'Suntik Followers' },
    { id: 'joki', name: 'Joki Tugas & Game' },
    { id: 'bot', name: 'Sewa Bot WA' },
  ];

  // --- DATA PRODUK ---
  const products: Product[] = [
    // Kategori: JASA WEBSITE
    {
      id: 99,
      category: 'website',
      name: 'Custom Jasa Website',
      price: 'Mulai Rp 50.000',
      desc: 'Formulir request website (Tugas/Bisnis/Portfolio).',
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      color: 'from-cyan-900/40 to-black'
    },

    // Kategori: APLIKASI PREMIUM
    {
      id: 1,
      category: 'premium',
      name: 'Netflix Premium 1 Bulan',
      price: 'Rp 22.000',
      desc: 'Sharing profil, anti on hold. Full Garansi.',
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      color: 'from-red-900/40 to-black'
    },
    {
      id: 2,
      category: 'premium',
      name: 'Spotify Family Plan',
      price: 'Rp 15.000',
      desc: 'Via invite email, legal region Indo, perpanjang aman.',
      icon: <Smartphone className="w-8 h-8 text-green-500" />,
      color: 'from-green-900/40 to-black'
    },
    {
      id: 3,
      category: 'premium',
      name: 'Youtube Premium 1 Bulan',
      price: 'Rp 5.000',
      desc: 'Via invite family, bebas iklan, play background.',
      icon: <Smartphone className="w-8 h-8 text-red-400" />,
      color: 'from-red-800/40 to-black'
    },

    // Kategori: SUNTIK FOLLOWERS
    {
      id: 4,
      category: 'smm',
      name: '1000 Followers Instagram',
      price: 'Rp 35.000',
      desc: 'Akun pasif/bot, proses instan, garansi refill 30 hari.',
      icon: <Instagram className="w-8 h-8 text-pink-500" />,
      color: 'from-pink-900/40 to-black'
    },
    {
      id: 5,
      category: 'smm',
      name: '1000 Followers TikTok',
      price: 'Rp 35.000',
      desc: 'High quality, instan, bisa untuk syarat live.',
      icon: <Smartphone className="w-8 h-8 text-gray-200" />,
      color: 'from-gray-800/40 to-black'
    },

    // Kategori: JOKI
    {
      id: 6,
      category: 'joki',
      name: 'Joki Tugas Kuliah / Sekolah',
      price: 'Mulai Rp 20.000',
      desc: 'Makalah, PPT, Rangkuman. Beres hari ini juga.',
      icon: <CheckCircle className="w-8 h-8 text-yellow-500" />,
      color: 'from-yellow-900/40 to-black'
    },
    {
      id: 7,
      category: 'joki',
      name: 'Joki Rank MLBB (Per Bintang)',
      price: 'Rp 5.000',
      desc: 'Epic - Legend - Mythic. Penjoki fast hand.',
      icon: <Gamepad2 className="w-8 h-8 text-blue-500" />,
      color: 'from-blue-900/40 to-black'
    },

    // Kategori: BOT WA
    {
      id: 8,
      category: 'bot',
      name: 'Sewa Bot WhatsApp (1 Bulan)',
      price: 'Rp 25.000',
      desc: 'Fitur welcome, menu store otomatis, broadcast.',
      icon: <Zap className="w-8 h-8 text-teal-500" />,
      color: 'from-teal-900/40 to-black'
    },
  ];

  const [activeTab, setActiveTab] = useState('all');

  // --- LOGIKA FILTERING (SEARCH + KATEGORI) ---
  const filteredProducts = products.filter(product => {
    // 1. Cek apakah ada Search Query?
    if (searchQuery) {
        // Kalau ada ketikan search, cari nama produk yang cocok (abaikan Tab Kategori)
        return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    // 2. Kalau tidak ada search, filter berdasarkan Tab Kategori
    return activeTab === 'all' ? true : product.category === activeTab;
  });

  const handleOrderClick = (product: Product) => {
    setSelectedProduct(product);
    setFormData({ name: '', target: '', account: '', password: '', detail: '', budget: '' }); 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;

    const phone = "6283854921907";
    let message = "";

    if (selectedProduct.category === 'website') {
      message = `*ORDER JASA WEBSITE*\n---------------------------\n👤 Nama: ${formData.name}\n💰 Budget: ${formData.budget}\n📝 Detail: ${formData.detail}\n---------------------------`;
    } 
    else if (selectedProduct.category === 'smm') {
      message = `*ORDER SUNTIK SOSMED*\n---------------------------\n📦 Layanan: ${selectedProduct.name}\n👤 Nama Pemesan: ${formData.name}\n🔗 Username/Link: ${formData.target}\n---------------------------`;
    }
    else if (selectedProduct.category === 'joki' && selectedProduct.name.includes('MLBB')) {
      message = `*ORDER JOKI GAME*\n---------------------------\n🎮 Layanan: ${selectedProduct.name}\n👤 Nama: ${formData.name}\n📧 Login (Email/Moonton): ${formData.account}\n🔑 Password: ${formData.password}\n📝 Request Hero/Catatan: ${formData.detail}\n---------------------------`;
    }
    else {
      message = `*ORDER LAYANAN BARU*\n---------------------------\n📦 Produk: ${selectedProduct.name}\n💵 Harga: ${selectedProduct.price}\n👤 Nama Pemesan: ${formData.name}\n📝 Catatan/Info: ${formData.detail || '-'}\n---------------------------`;
    }

    message += `\n\nHalo Admin, mohon diproses pesanan saya. Terima Kasih.`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    setSelectedProduct(null); 
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-purple-500 selection:text-white pb-20 relative">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-30 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent flex items-center gap-2">
            <Zap className="text-purple-500 fill-purple-500" size={24} />
            Julian Store.
          </h1>
          
          <div className="hidden md:flex gap-3">
             <a 
              href="https://chat.whatsapp.com/E6LeAjbw1lZ7qbMRu11IU1?mode=gi_t" 
              target="_blank"
              className="text-sm font-medium flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition"
            >
              <Users size={16} />
              Gabung Grup
            </a>
            <a href="#testimoni" className="text-sm font-medium px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 transition">
              Cek Testimoni
            </a>
          </div>
        </div>
      </nav>

      {/* HERO HEADER & SEARCH */}
      <section className="pt-32 pb-6 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold border border-purple-500/20 mb-6">
            <Star className="w-3 h-3 fill-purple-400" />
            Pusat Top Up & Joki Termurah
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            Solusi Digital <br />
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Tanpa Ribet.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto mb-8">
            Pilih layanan yang kamu butuhkan di bawah ini. Proses cepat, admin fast respon.
          </p>

          {/* --- SEARCH BAR BARU --- */}
          <div className="relative max-w-xl mx-auto mb-4 group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition" size={20} />
                <input 
                  type="text"
                  placeholder="Cari layanan (Netflix, Joki, Followers)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 rounded-full bg-[#111] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-[#151515] transition shadow-xl"
                />
            </div>
          </div>
          
          <div className="md:hidden flex justify-center pb-4 mt-4">
            <a 
              href="https://chat.whatsapp.com/E6LeAjbw1lZ7qbMRu11IU1?mode=gi_t"
              target="_blank"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/50 text-sm font-bold"
            >
              <Users size={16} />
              Gabung Grup Komunitas
            </a>
          </div>
        </div>
      </section>

      {/* TABS KATEGORI */}
      <section className="sticky top-16 z-20 bg-[#0a0a0a]/95 backdrop-blur-sm py-4 border-b border-white/5 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex space-x-2 md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                    setActiveTab(cat.id);
                    setSearchQuery(''); // Reset search saat ganti tab biar ga bingung
                }}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border
                  ${activeTab === cat.id && !searchQuery
                    ? 'bg-white text-black border-white scale-105 shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                    : 'bg-white/5 text-gray-400 border-transparent hover:bg-white/10 hover:text-white'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DAFTAR PRODUK */}
      <section className="max-w-6xl mx-auto px-4 py-8 min-h-[500px]">
        {searchQuery ? (
             <h3 className="text-xl font-bold mb-6 text-gray-200 border-l-4 border-purple-500 pl-4">
                Hasil Pencarian: <span className="text-white">"{searchQuery}"</span>
             </h3>
        ) : (
            <h3 className="text-xl font-bold mb-6 text-gray-200 border-l-4 border-purple-500 pl-4">
                Kategori: <span className="text-white">{categories.find(c => c.id === activeTab)?.name}</span>
            </h3>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((item) => (
            <div 
              key={item.id}
              className={`group relative p-6 rounded-2xl bg-gradient-to-br ${item.color} border border-white/5 hover:border-white/20 transition-all hover:-translate-y-2 duration-300 shadow-lg flex flex-col justify-between`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md">
                    {item.icon}
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-white/10 text-white text-sm font-bold border border-white/10">
                    {item.price}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.name}</h3>
                <p className="text-sm text-gray-400 mb-6">{item.desc}</p>
              </div>
              
              <button 
                onClick={() => handleOrderClick(item)}
                className="w-full py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <ShoppingBag size={18} />
                Order Sekarang
              </button>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <Search className="w-12 h-12 mx-auto mb-3 opacity-20" />
            <p className="text-lg font-bold">Layanan tidak ditemukan.</p>
            <p className="text-sm">Coba cari dengan kata kunci lain.</p>
          </div>
        )}
      </section>

      {/* --- MODAL FORM --- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#111] border border-white/10 w-full max-w-md rounded-2xl p-6 relative shadow-2xl shadow-purple-900/20 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>

            <div className="mb-6">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">{selectedProduct.category === 'smm' ? 'Suntik Followers' : selectedProduct.category.toUpperCase()}</span>
                <h3 className="text-xl font-bold text-white mt-1">{selectedProduct.name}</h3>
                <p className="text-sm text-gray-400">{selectedProduct.price}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* FIELD NAMA */}
              <div>
                <label className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-2">
                    <User size={14} /> NAMA PEMESAN
                </label>
                <input 
                  type="text" required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 outline-none"
                  placeholder="Nama Kamu"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              {/* FIELD KHUSUS SMM */}
              {selectedProduct.category === 'smm' && (
                <div>
                   <label className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-2">
                        <LinkIcon size={14} /> USERNAME / LINK TARGET
                   </label>
                   <input 
                    type="text" required
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 outline-none"
                    placeholder="Contoh: @julianstore atau Link Post"
                    value={formData.target}
                    onChange={(e) => setFormData({...formData, target: e.target.value})}
                  />
                </div>
              )}

              {/* FIELD KHUSUS JOKI GAME MLBB */}
              {selectedProduct.category === 'joki' && selectedProduct.name.includes('MLBB') && (
                <>
                   <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 mb-2">EMAIL/MOONTON</label>
                            <input 
                                type="text" required
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 outline-none"
                                placeholder="Email Akun"
                                value={formData.account}
                                onChange={(e) => setFormData({...formData, account: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 mb-2">PASSWORD</label>
                            <input 
                                type="text" required
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 outline-none"
                                placeholder="Password"
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                            />
                        </div>
                   </div>
                   <p className="text-xs text-red-400 italic">*Data akun aman 100% terjaga privasinya.</p>
                </>
              )}

              {/* FIELD KHUSUS WEBSITE */}
              {selectedProduct.category === 'website' && (
                 <div>
                    <label className="block text-xs font-bold text-gray-500 mb-2">PERKIRAAN BUDGET</label>
                    <input 
                        type="text" 
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 outline-none"
                        placeholder="Contoh: 150rb - 300rb"
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    />
                 </div>
              )}

              {/* FIELD CATATAN / DETAIL */}
              <div>
                <label className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-2">
                    <Edit3 size={14} /> 
                    {selectedProduct.category === 'joki' ? 'REQUEST HERO / CATATAN' : 
                     selectedProduct.category === 'website' ? 'SPESIFIKASI WEBSITE' : 'CATATAN TAMBAHAN'}
                </label>
                <textarea 
                  rows={3}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 outline-none"
                  placeholder={selectedProduct.category === 'website' ? "Jelaskan detail website yang dimau..." : "Ada request khusus? tulis disini..."}
                  value={formData.detail}
                  onChange={(e) => setFormData({...formData, detail: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-bold text-white hover:opacity-90 transition active:scale-95 flex items-center justify-center gap-2 mt-4"
              >
                <Send size={18} />
                Lanjut ke WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

      {/* KOMUNITAS & TESTIMONI */}
      <section id="testimoni" className="py-20 mt-10 border-t border-white/10 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-purple-400 text-sm font-bold tracking-widest uppercase">Trusted Seller</span>
          <h2 className="text-3xl font-bold mb-8 text-white mt-2">Komunitas & Testimoni</h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-10 text-left">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex gap-1 mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} className="fill-yellow-500 text-yellow-500 w-4 h-4" />)}
                </div>
                <p className="text-gray-300 text-sm">"Netflix nya awet banget bang (1 tahun), pelayanan ramah. Next order lagi."</p>
                <p className="text-xs text-gray-500 mt-2 font-bold">- User Julian Store</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex gap-1 mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} className="fill-yellow-500 text-yellow-500 w-4 h-4" />)}
                </div>
                <p className="text-gray-300 text-sm">"Joki tugasnya cepet banget kelar, nilainya juga aman. Makasih min!"</p>
                <p className="text-xs text-gray-500 mt-2 font-bold">- Anak Kuliah</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a 
              href="https://whatsapp.com/channel/0029Vb7DeKp4SpkEQoAQVH1e" 
              target="_blank"
              className="w-full md:w-auto flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-[#25D366] text-black font-bold hover:bg-[#1ebc57] transition hover:scale-105 shadow-[0_0_20px_rgba(37,211,102,0.3)] text-sm"
            >
              <MessageCircle size={18} />
              <span>Saluran Testi</span>
            </a>

            <a 
              href="https://chat.whatsapp.com/E6LeAjbw1lZ7qbMRu11IU1?mode=gi_t" 
              target="_blank"
              className="w-full md:w-auto flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)] text-sm"
            >
              <Users size={18} />
              <span>Grup Diskusi</span>
            </a>

            <a 
              href="https://www.instagram.com/market_julianstore?igsh=MXg1ejl1bzFxb2V1MA==" 
              target="_blank"
              className="w-full md:w-auto flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold hover:opacity-90 transition hover:scale-105 shadow-[0_0_20px_rgba(236,72,153,0.3)] text-sm"
            >
              <Instagram size={18} />
              <span>INSTAGRAM</span>
            </a>
          </div>

          <p className="mt-6 text-xs text-gray-500">Klik tombol di atas untuk bergabung ke komunitas kami.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>&copy; 2026 Julian Store. All rights reserved.</p>
        <p className="mt-2 text-xs">Amanah & Terpercaya.</p>
      </footer>
    </div>
  );
}