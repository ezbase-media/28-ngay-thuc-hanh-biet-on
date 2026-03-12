import React, { useState, useEffect } from 'react';
import { Camera, ImagePlus, CheckCircle2 } from 'lucide-react';

const UploadPhotoAndWrite = ({ dayId }) => {
  const storageKey = `special_task_${dayId}_photos`;
  
  // Default 3 slots
  const [items, setItems] = useState([
    { id: 1, photoDataUrl: null, text: '' },
    { id: 2, photoDataUrl: null, text: '' },
    { id: 3, photoDataUrl: null, text: '' }
  ]);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved special task data");
      }
    }
  }, [storageKey]);

  const handleImageUpload = (index, file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const newItems = [...items];
      newItems[index].photoDataUrl = e.target.result;
      setItems(newItems);
      saveData(newItems);
    };
    reader.readAsDataURL(file);
  };

  const handleTextChange = (index, text) => {
    const newItems = [...items];
    newItems[index].text = text;
    setItems(newItems);
  };

  const handleBlur = () => {
    saveData(items);
  };

  const saveData = (dataToSave) => {
    localStorage.setItem(storageKey, JSON.stringify(dataToSave));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="bg-white/60 rounded-3xl p-6 md:p-8 mb-8 border border-warm-200 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl md:text-2xl font-serif font-bold text-warm-800 flex items-center">
          <Camera className="mr-3 text-pastel-darkgreen" size={28} />
          Bài tập đặc biệt: Tải ảnh & Biết ơn
        </h3>
        {isSaved && <span className="text-sm font-medium text-pastel-darkgreen flex items-center animate-in fade-in"><CheckCircle2 size={16} className="mr-1"/> Đã lưu</span>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm border border-warm-100 flex flex-col items-center group">
            <div className="w-full aspect-square bg-warm-50 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center border-2 border-dashed border-warm-200 hover:border-warm-400 hover:bg-warm-100 transition-colors cursor-pointer group">
              {item.photoDataUrl ? (
                <img src={item.photoDataUrl} alt={`Ảnh ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              ) : (
                <div className="text-warm-400 flex flex-col items-center pointer-events-none group-hover:text-warm-600 transition-colors">
                  <ImagePlus size={36} className="mb-3" strokeWidth={1.5} />
                  <span className="text-sm font-medium">Tải ảnh lên</span>
                </div>
              )}
              {item.photoDataUrl && (
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="text-white text-sm font-medium flex items-center"><Camera size={16} className="mr-2"/> Đổi ảnh</span>
                </div>
              )}
              <input 
                type="file" 
                accept="image/*" 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => handleImageUpload(index, e.target.files[0])}
              />
            </div>
            <textarea
              value={item.text}
              onChange={(e) => handleTextChange(index, e.target.value)}
              onBlur={handleBlur}
              placeholder={`Cảm ơn [tên], vì...`}
              className="w-full bg-warm-50/70 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-warm-300 focus:bg-white resize-none h-28 text-warm-800 placeholder-warm-400 transition-all border border-transparent focus:border-warm-200"
            />
          </div>
        ))}
      </div>
      <p className="text-xs text-warm-400 mt-6 text-center italic">Hình ảnh tự động lưu trên trình duyệt máy tính của bạn, hoàn toàn bảo mật.</p>
    </div>
  );
};

export default UploadPhotoAndWrite;
