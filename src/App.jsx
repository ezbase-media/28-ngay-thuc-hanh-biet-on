import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DayDetail from './pages/DayDetail';

function App() {
  return (
    <div className="min-h-screen bg-warm-50 text-warm-900 transition-colors duration-300">
      <header className="bg-white/70 backdrop-blur-md shadow-sm border-b border-warm-200 sticky top-0 z-10 transition-all duration-300">
        <div className="max-w-5xl mx-auto px-4 py-5 text-center">
          <h1 className="text-3xl font-serif font-bold text-warm-800 tracking-tight">28 Ngày Lòng Biết Ơn</h1>
          <p className="text-warm-500 mt-2 font-light italic">Cuốn sổ tay chữa lành của bạn</p>
        </div>
      </header>
      
      <main className="max-w-5xl mx-auto px-4 py-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-warm-100/50 to-transparent pointer-events-none h-48 rounded-t-3xl" />
        <div className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/day/:id" element={<DayDetail />} />
          </Routes>
        </div>
      </main>
      
      <footer className="mt-12 py-8 text-center text-warm-500 text-sm border-t border-warm-200 bg-warm-100/30">
        <p>Hành trình 28 ngày phép màu &copy; {new Date().getFullYear()} by Lou</p>
        <p className="text-warm-400 text-xs mt-1">Thực hành lòng biết ơn mỗi ngày để thu hút điều tốt đẹp</p>
      </footer>
    </div>
  );
}

export default App;
