export const initStorage = () => {
  let cycles = localStorage.getItem('gratitude_cycles');
  if (!cycles) {
    const cycle1 = { id: 1, name: "Hành trình lần 1", createdAt: new Date().toISOString() };
    localStorage.setItem('gratitude_cycles', JSON.stringify([cycle1]));
    localStorage.setItem('gratitude_active_cycle', '1');
    
    // Migrate old data
    for (let i = 1; i <= 28; i++) {
        const oldData = localStorage.getItem(`gratitude_day_${i}`);
        if (oldData !== null) {
            let isJson = false;
            let parsed = null;
            try {
                parsed = JSON.parse(oldData);
                isJson = true;
            } catch(e) {}
            
            const content = isJson && parsed ? parsed.content || parsed : oldData;
            const timestamp = isJson && parsed && parsed.timestamp ? parsed.timestamp : new Date().toISOString();

            const newData = {
                content: content,
                timestamp: timestamp
            };
            localStorage.setItem(`gratitude_c1_d${i}`, JSON.stringify(newData));
            localStorage.removeItem(`gratitude_day_${i}`); // clean up old keys
        }
    }
  }
};

export const getCycles = () => {
    try {
        return JSON.parse(localStorage.getItem('gratitude_cycles') || "[]");
    } catch (e) {
        return [];
    }
};

export const getActiveCycle = () => {
    return parseInt(localStorage.getItem('gratitude_active_cycle') || "1");
};

export const setActiveCycle = (cycleId) => {
    localStorage.setItem('gratitude_active_cycle', cycleId.toString());
};

export const createNewCycle = () => {
    const cycles = getCycles();
    const newId = cycles.length > 0 ? Math.max(...cycles.map(c => c.id)) + 1 : 1;
    const newCycle = { id: newId, name: `Hành trình lần ${newId}`, createdAt: new Date().toISOString() };
    cycles.push(newCycle);
    localStorage.setItem('gratitude_cycles', JSON.stringify(cycles));
    setActiveCycle(newId);
    return newId;
};

export const getDayData = (cycleId, dayId) => {
    const data = localStorage.getItem(`gratitude_c${cycleId}_d${dayId}`);
    if (data) {
        try {
            return JSON.parse(data);
        } catch (e) {
            return null;
        }
    }
    return null;
};

export const saveDayData = (cycleId, dayId, content) => {
    const data = {
        content: content,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem(`gratitude_c${cycleId}_d${dayId}`, JSON.stringify(data));
};
