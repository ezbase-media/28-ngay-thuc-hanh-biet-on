import React, { useState, useEffect } from 'react';
import { Camera, Check, Clock } from 'lucide-react';
import { getActiveCycle } from '../../utils/storage';

export const saveSpecialTaskData = (cycleId, dayId, fieldId, content) => {
    localStorage.setItem(`gratitude_c${cycleId}_d${dayId}_special_${fieldId}`, JSON.stringify({
        content,
        timestamp: new Date().toISOString()
    }));
};

export const getSpecialTaskData = (cycleId, dayId, fieldId) => {
    const data = localStorage.getItem(`gratitude_c${cycleId}_d${dayId}_special_${fieldId}`);
    if (data) {
        try {
            return JSON.parse(data);
        } catch(e) {
            return { content: data, timestamp: null };
        }
    }
    return { content: null, timestamp: null };
};

const SpecialTaskBuilder = ({ config, dayId }) => {
  const cycleId = getActiveCycle();
  const [data, setData] = useState({});
  const [timestamps, setTimestamps] = useState({});
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const initialData = {};
    const initialTimestamps = {};
    config.fields.forEach(field => {
        const savedData = getSpecialTaskData(cycleId, dayId, field.id);
        if (savedData.content) {
            initialData[field.id] = savedData.content;
            initialTimestamps[field.id] = savedData.timestamp;
        } else {
            if (field.type === 'list') {
                initialData[field.id] = Array(field.count || 3).fill('');
            } else {
                initialData[field.id] = '';
            }
        }
    });
    setData(initialData);
    setTimestamps(initialTimestamps);
  }, [cycleId, dayId, config]);

  const handleChange = (fieldId, value, index = null) => {
    setData(prev => {
        const newData = { ...prev };
        if (index !== null) {
            const newList = [...(newData[fieldId] || [])];
            newList[index] = value;
            newData[fieldId] = newList;
        } else {
            newData[fieldId] = value;
        }
        return newData;
    });
  };

  const handlePhotoUpload = (fieldId, e) => {
      const file = e.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
              handleChange(fieldId, reader.result);
          };
          reader.readAsDataURL(file);
      }
  };

  const handleSave = () => {
      const newTimestamps = { ...timestamps };
      config.fields.forEach(field => {
          saveSpecialTaskData(cycleId, dayId, field.id, data[field.id]);
          newTimestamps[field.id] = new Date().toISOString();
      });
      setTimestamps(newTimestamps);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="bg-warm-50/80 rounded-2xl p-6 md:p-8 border border-warm-200 shadow-sm mb-10 w-full animate-in fade-in duration-500">
        <div className="flex justify-between items-center mb-6">
            <h3 className="font-serif font-bold text-warm-800 text-xl border-b border-warm-200 pb-2 flex-grow">
                {config.title || "Bài Tập Đặc Biệt Hôm Nay"}
            </h3>
        </div>

        <div className="space-y-8">
            {config.fields.map(field => {
                const latestTimestamp = timestamps[field.id];

                return (
                <div key={field.id} className="space-y-3">
                    {field.label && (
                        <h4 className="font-medium text-warm-700">{field.label}</h4>
                    )}
                    
                    {field.type === 'textarea' && (
                        <textarea
                            value={data[field.id] || ''}
                            onChange={(e) => handleChange(field.id, e.target.value)}
                            className="w-full min-h-[120px] p-4 bg-white border border-warm-200 rounded-xl focus:outline-none focus:border-warm-400 focus:ring-1 focus:ring-warm-400 text-warm-800 transition-shadow resize-y"
                            placeholder={field.placeholder || "Viết vào đây..."}
                        />
                    )}

                    {field.type === 'list' && (
                        <div className="space-y-3">
                            {(data[field.id] || Array(field.count || 3).fill('')).map((item, index) => (
                                <div key={index} className="flex relative items-start">
                                    <span className="absolute left-3 top-3 text-warm-400 font-medium text-sm w-5">{index + 1}.</span>
                                    <input
                                        type="text"
                                        value={item}
                                        onChange={(e) => handleChange(field.id, e.target.value, index)}
                                        className="w-full pl-10 pr-4 py-3 bg-white border border-warm-200 rounded-xl focus:outline-none focus:border-warm-400 focus:ring-1 focus:ring-warm-400 text-warm-800 transition-shadow"
                                        placeholder={field.placeholder || "..."}
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {field.type === 'photo' && (
                        <div className="border-2 border-dashed border-warm-300 rounded-2xl p-6 bg-white text-center hover:bg-warm-50 transition-colors">
                            {data[field.id] ? (
                                <div className="space-y-4">
                                    <img src={data[field.id]} alt="Nhiệm màu" className="max-h-64 rounded-xl mx-auto shadow-sm object-cover" />
                                    <label className="cursor-pointer inline-flex items-center text-sm font-medium text-warm-600 hover:text-warm-800 bg-warm-100 px-4 py-2 rounded-full transition-colors">
                                        <Camera size={16} className="mr-2" /> Đổi ảnh khác
                                        <input type="file" accept="image/*" onChange={(e) => handlePhotoUpload(field.id, e)} className="hidden" />
                                    </label>
                                </div>
                            ) : (
                                <label className="cursor-pointer flex flex-col items-center justify-center p-4">
                                    <div className="w-14 h-14 bg-warm-100 rounded-full flex items-center justify-center mb-3 text-warm-500">
                                        <Camera size={24} />
                                    </div>
                                    <span className="font-medium text-warm-700">Tải ảnh lên</span>
                                    <span className="text-sm text-warm-400 mt-1">Hỗ trợ JPG, PNG (Ảnh sẽ được lưu nội bộ trên trình duyệt)</span>
                                    <input type="file" accept="image/*" onChange={(e) => handlePhotoUpload(field.id, e)} className="hidden" />
                                </label>
                            )}
                        </div>
                    )}

                    {latestTimestamp && (
                        <div className="flex items-center text-warm-400 text-xs italic">
                            <Clock size={12} className="mr-1" />
                            Đã lưu: {new Date(latestTimestamp).toLocaleDateString('vi-VN')} {new Date(latestTimestamp).toLocaleTimeString('vi-VN')}
                        </div>
                    )}
                </div>
            )})}
        </div>

        <div className="mt-8 pt-6 border-t border-warm-200 flex flex-col sm:flex-row items-center justify-between">
            <span className="text-pastel-darkgreen text-sm flex items-center h-5 mb-4 sm:mb-0">
                {isSaved && <><Check size={16} className="mr-1" /> Đã lưu bài tập đặc biệt</>}
            </span>
            <button
                onClick={handleSave}
                className="w-full sm:w-auto px-6 py-2.5 bg-warm-600 hover:bg-warm-700 text-white rounded-xl shadow-sm hover:shadow transition-all font-medium text-sm flex items-center justify-center"
            >
                Lưu bài tập
            </button>
        </div>
    </div>
  );
};

export default SpecialTaskBuilder;
