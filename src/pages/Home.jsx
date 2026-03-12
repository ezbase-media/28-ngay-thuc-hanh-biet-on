import React from 'react';
import { Link } from 'react-router-dom';
import { daysData } from '../data/days';
import { BookHeart, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl font-serif text-warm-700 mb-4">Hành Trình Thực Hành Lòng Biết Ơn</h2>
        <p className="text-warm-600 leading-relaxed">
          Mỗi ngày là một cơ hội để nhận ra những phép màu xung quanh ta. Hãy chọn một ngày để bắt đầu viết xuống những điều khiến bạn cảm thấy hạnh phúc và biết ơn.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {daysData.map((day) => {
          // Check if user has saved data for this day
          const savedData = localStorage.getItem(`gratitude_day_${day.id}`);
          const isCompleted = savedData && savedData.trim().length > 0;

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
                  <CheckCircle2 size={20} className="text-pastel-darkgreen" />
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
