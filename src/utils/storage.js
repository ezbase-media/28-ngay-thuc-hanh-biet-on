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

export const deleteCycle = (cycleId) => {
    const cycles = getCycles();
    const updatedCycles = cycles.filter(c => c.id !== cycleId);
    
    // Clear ALL localStorage keys associated with this cycle (regular data + special task data)
    const prefix = `gratitude_c${cycleId}_`;
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(prefix)) {
            keysToRemove.push(key);
        }
    }
    keysToRemove.forEach(key => localStorage.removeItem(key));

    // Save the updated cycles list
    localStorage.setItem('gratitude_cycles', JSON.stringify(updatedCycles));

    // If we deleted the active cycle, set a new active cycle
    if (getActiveCycle() === cycleId) {
        if (updatedCycles.length > 0) {
            setActiveCycle(updatedCycles[0].id);
            return updatedCycles[0].id;
        } else {
            // If no cycles left, re-initialize storage to create a fresh one
            localStorage.removeItem('gratitude_cycles');
            localStorage.removeItem('gratitude_active_cycle');
            initStorage();
            return 1;
        }
    }
    return null; // Return null if the active cycle wasn't removed
};

