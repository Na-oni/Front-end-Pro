export const updateLocalStorageArray = (key, item, maxItems) => {
    let items = JSON.parse(localStorage.getItem(key)) || [];
    items = items.filter(existingItem => existingItem !== item);
    items.push(item);
    if (items.length > maxItems) items.shift();
    localStorage.setItem(key, JSON.stringify(items));
    return items;
};
