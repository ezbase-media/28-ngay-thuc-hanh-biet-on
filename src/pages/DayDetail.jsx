import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { daysData } from '../data/days';
import { ArrowLeft, Save, Heart, BookOpen, Clock } from 'lucide-react';
import SpecialTaskBuilder from '../components/SpecialTasks/SpecialTaskBuilder';
import { getDayData, saveDayData, getActiveCycle } from '../utils/storage';

const renderInstruction = (text) => {
  if (!text) return null;
  return (
    <div 
      className="text-warm-700 leading-relaxed md:text-lg prose prose-warm max-w-none"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

const DayDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const day = daysData.find(d => d.id === parseInt(id));
  
  const cycleId = getActiveCycle();
  const [content, setContent] = useState('');
  const [timestamp, setTimestamp] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const dayData = getDayData(cycleId, id);
    if (dayData) {
      setContent(dayData.content);
      setTimestamp(dayData.timestamp);
    } else {
      setContent('');
      setTimestamp(null);
    }
  }, [cycleId, id]);

  const handleSave = () => {
    saveDayData(cycleId, id, content);
    setIsSaved(true);
    const updatedData = getDayData(cycleId, id);
    if (updatedData) setTimestamp(updatedData.timestamp);
    setTimeout(() => setIsSaved(false), 3000);
  };

  if (!day) return <div className="text-center py-20 text-warm-500">Không tìm thấy ngày này!</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm border border-warm-100 p-6 md:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={() => navigate('/')}
        className="flex items-center text-warm-500 hover:text-warm-800 transition-colors mb-8 group font-medium"
      >
        <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
        Về trang chủ
      </button>

      <header className="mb-10 lg:text-center">
        <div className="inline-flex items-center justify-center p-3 bg-warm-50 text-warm-600 rounded-full mb-4">
          <BookOpen size={28} strokeWidth={1.5} className="text-warm-600" />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-warm-800 mb-6 tracking-tight">{day.title}</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-warm-200 via-warm-400 to-warm-200 lg:mx-auto rounded-full mb-8"></div>
        
        <div className="bg-warm-50/50 rounded-2xl p-6 md:p-8 text-left border border-warm-100 shadow-inner">
          <h4 className="font-serif font-semibold text-warm-800 mb-4 text-lg">Hành động nhiệm màu:</h4>
          {renderInstruction(day.instruction)}
        </div>
      </header>

      {day.specialTask && typeof day.specialTask === 'object' && (
        <SpecialTaskBuilder config={day.specialTask} dayId={day.id} />
      )}

      <div className="mb-8 relative group">
        <label htmlFor="journal" className="block text-warm-700 font-medium mb-3 ml-2 flex items-center text-lg">
          <Heart size={20} className="text-pastel-darkgreen mr-2" strokeWidth={2} />
          Viết 10 điều bạn cảm thấy biết ơn hôm nay:
        </label>
        <div className="relative rounded-2xl overflow-hidden ring-1 ring-warm-200 transition-shadow focus-within:ring-2 focus-within:ring-warm-400 focus-within:shadow-md">
          <textarea
            id="journal"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="1. Tôi thật sự may mắn/hạnh phúc khi có được... vì... Cảm Ơn, Cảm Ơn, Cảm Ơn&#10;2. Tôi rất hạnh phúc và biết ơn... vì... Cảm Ơn, Cảm Ơn, Cảm Ơn&#10;3. Từ tận đáy lòng tôi chân thành biết ơn... vì... Cảm Ơn, Cảm Ơn, Cảm Ơn&#10;...&#10;10."
            className="w-full h-[500px] p-8 md:px-12 bg-orange-50/30 focus:bg-orange-50/50 border-none rounded-2xl focus:outline-none transition-colors resize-y text-warm-800 leading-[36px] font-sans text-lg"
            style={{
              backgroundImage: 'linear-gradient(transparent, transparent 35px, #eaddd7 35px, #eaddd7 36px)',
              backgroundSize: '100% 36px',
              backgroundAttachment: 'local'
            }}
          ></textarea>
        </div>
        {timestamp && (
          <div className="mt-3 flex items-center text-warm-400 text-sm italic ml-2">
            <Clock size={14} className="mr-1" />
            Lần cập nhật cuối: {new Date(timestamp).toLocaleDateString('vi-VN')} lúc {new Date(timestamp).toLocaleTimeString('vi-VN', {hour: '2-digit', minute:'2-digit'})}
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-6 border-t border-warm-100">
        <div className="text-sm text-pastel-darkgreen font-medium min-h-[20px] mb-4 sm:mb-0 transition-opacity flex items-center">
          {isSaved && (
            <>
              <svg className="w-4 h-4 mr-1 animate-pulse" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              Đã lưu thành công 10 điều biết ơn!
            </>
          )}
        </div>
        <button
          onClick={handleSave}
          className="w-full sm:w-auto flex items-center justify-center bg-gradient-to-r from-warm-600 to-warm-700 hover:from-warm-700 hover:to-warm-800 text-white px-10 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95 font-medium tracking-wide"
        >
          <Save size={20} className="mr-2" />
          Lưu nhật ký
        </button>
      </div>
    </div>
  );
};

export default DayDetail;
