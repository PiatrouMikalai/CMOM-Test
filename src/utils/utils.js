export const filterEmptyStrings = (arr) => arr && arr.filter(element => element !== '');

export const isEmpty = (obj) => Object.keys(obj).length === 0;