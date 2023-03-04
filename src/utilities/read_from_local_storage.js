function readFromLocalStorage (key) {
    return JSON.parse(localStorage.getItem(key));
}

export default readFromLocalStorage;