/**
 * Целевая функция.
 * 
 * @param {float} x1 
 * @param {float} x2 
 * 
 * @returns {float}
 */
export default function MyFunction(x1, x2) {
    return 100 * Math.pow(x2 - Math.pow(x1, 2), 2) + Math.pow(1 - x1, 2);
}