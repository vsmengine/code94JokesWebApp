const setSessionItem = (key: string, value: any) => {
    if (typeof window !== "undefined") {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
}

const getSessionItem = (key: string) => {
    if (typeof window !== "undefined") {
        const value = sessionStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }
}

const removeSessionItem = (key: string) => {
    if (typeof window !== "undefined") {
        sessionStorage.removeItem(key);
    }
}

const clearSessionStore = () => {
    if (typeof window !== "undefined") {
        sessionStorage.clear();
    }
}

export {
    setSessionItem,
    getSessionItem,
    removeSessionItem,
    clearSessionStore
};