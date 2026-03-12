import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { daysData } from '../data/days';
import { BookHeart, CheckCircle2, Trash2 } from 'lucide-react';
import { initStorage, getCycles, getActiveCycle, setActiveCycle, createNewCycle, getDayData, deleteCycle } from '../utils/storage';

const Home = () => {
  const [cycles, setCycles] = useState([]);
  const [activeCycleId, setActiveCycleId] = useState(1);

  useEffect(() => {
    initStorage();
    setCycles(getCycles());
    setActiveCycleId(getActiveCycle());
  }, []);

  const handleCycleChange = (e) => {
    const newId = parseInt(e.target.value);
    setActiveCycle(newId);
    setActiveCycleId(newId);
  };

  const handleNewCycle = () => {
    if (window.confirm("Bạn muốn bắt đầu một hành trình 28 ngày mới? (Hành trình cũ vẫn được lưu lại)")) {
      const newId = createNewCycle();
      setCycles(getCycles());
      setActiveCycleId(newId);
    }
  };

  const handleDeleteCycle = () => {
    const activeCycleName = cycles.find(c => c.id === activeCycleId)?.name || 'này';
    if (window.confirm(`Bạn có chắc chắn muốn xóa vĩnh viễn hành trình "${activeCycleName}" và tất cả dữ liệu ghi chép trong hành trình này không? Hành động này không thể hoàn tác.`)) {
      const newActiveId = deleteCycle(activeCycleId);
      setCycles(getCycles());
      if (newActiveId) {
          setActiveCycleId(newActiveId);
      }
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl font-serif text-warm-700 mb-4">Hành Trình Thực Hành Lòng Biết Ơn</h2>
        <p className="text-warm-600 leading-relaxed mb-6">
          Mỗi ngày là một cơ hội để nhận ra những phép màu xung quanh ta. Hãy chọn một ngày để bắt đầu viết xuống những điều khiến bạn cảm thấy hạnh phúc và biết ơn.
        </p>
        
        {cycles.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-white/60 p-2 sm:p-3 rounded-2xl shadow-sm border border-warm-100/50 inline-flex relative justify-self-center mx-auto max-w-fit">
            <select 
              value={activeCycleId} 
              onChange={handleCycleChange}
              className="bg-white border border-warm-200 text-warm-700 text-sm rounded-lg focus:ring-warm-400 focus:border-warm-400 block p-2 outline-none font-medium cursor-pointer shadow-sm"
            >
              {cycles.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
            <button 
              onClick={handleNewCycle}
              className="text-sm bg-pastel-darkgreen text-white hover:bg-pastel-darkgreen/90 px-3 py-2 rounded-lg font-medium transition-colors whitespace-nowrap shadow-sm"
            >
              + Hành trình mới
            </button>
            <button
              onClick={handleDeleteCycle}
              title="Xóa hành trình này"
              className="text-red-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors ml-1"
            >
              <Trash2 size={18} />
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {daysData.map((day) => {
          const dayData = getDayData(activeCycleId, day.id);
          const isCompleted = dayData && dayData.content.trim().length > 0;
          
          let dateStr = '';
          if (isCompleted && dayData.timestamp) {
             const d = new Date(dayData.timestamp);
             dateStr = d.toLocaleDateString('vi-VN') + ' ' + d.toLocaleTimeString('vi-VN', {hour: '2-digit', minute:'2-digit'});
          }

          return (
            <Link 
              key={day.id} 
              to={`/day/${day.id}`}
              className="group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-warm-100 hover:border-warm-300 transform hover:-translate-y-1 overflow-hidden flex flex-col items-start h-full"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-warm-300 to-warm-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              
              <div className="flex justify-between items-start w-full mb-4">
                <div className="bg-warm-50 text-warm-600 p-2 rounded-lg group-hover:bg-warm-100 transition-colors">
                  <BookHeart size={24} strokeWidth={1.5} />
                </div>
                {isCompleted && (
                  <div className="flex flex-col items-end">
                    <CheckCircle2 size={20} className="text-pastel-darkgreen mb-1" />
                    <span className="text-[10px] text-warm-400 font-medium">{dateStr}</span>
                  </div>
                )}
              </div>
              
              <h3 className="font-serif font-medium text-warm-800 text-lg mb-2 leading-snug flex-grow">
                {day.title}
              </h3>
              
              <p className="text-warm-400 text-sm mt-4 group-hover:text-warm-600 transition-colors inline-flex items-center">
                {isCompleted ? 'Xem lại nhật ký' : 'Viết nhật ký'} <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
