export const capitalizeLastLetter = (inputString) => {
    if (inputString.length > 0) {
        const lastLetter = inputString.slice(-1).toUpperCase();
        return lastLetter;
    }
    return '';
};
