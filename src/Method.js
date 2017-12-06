import MyFunction from "./Function";

/**
 * Главный алгоритм
 * 
 * @param {float} eps Точность
 * @param {float} x1 Значение на текущем шаге
 * @param {float} x2 Значение на текущем шаге
 * @param {float} a Длина шага движения
 * @param {integer} k Текущая итерация
 * 
 * @returns {Object(x1:float, x2:float, k:integer, gradient:Object(i:float, j:float))}
 */
export default function method(eps, x1 = -3, x2 = 2, a = 1, k = 1) {
    const grad = gradient(x1, x2);
    const gradLength = gradientLength(grad);

    // Принудительный выход из рекурсии
    if (k >= 100000) {
        return {
            x1,
            x2,
            k,
            gradient: grad,
            gradLength,
        };
    }

    // Условие остановки
    if (gradLength < eps) {
        return {
            x1,
            x2,
            k,
            gradient: grad,
            gradLength,
        };
    }

    let newX1 = x1 - a * grad.i;
    let newX2 = x2 - a * grad.j;

    // Уменьшаем альфу по необходимости
    while (MyFunction(x1, x2) < MyFunction(newX1, newX2)) {
        a = a / 2;
        newX1 = x1 - a * grad.i;
        newX2 = x2 - a * grad.j;
    }

    // Вычисление нового градиента
    return method(eps, newX1, newX2, a, k + 1)
}

/**
 * Вычисление градиента
 * 
 * @param {float} x1 
 * @param {float} x2 
 * 
 * @returns {Object(i:float, j:float)} Объект с i, j составляющими
 */
function gradient(x1, x2) {
    return {
        i: 2 * x1 - 2 - 400 * x1 * (x2 - x1 * x1),
        j: 200 * x2- 200 * x1 * x1,
    };
}

/**
 * Вычисление длины градиента
 * 
 * @param {Object(i:float, j:float)} grad Объект, полученный функцией `gradient(...)`.
 * 
 * @returns {float} Длина градиента
 */
function gradientLength(grad) {
    return Math.sqrt(grad.i * grad.i + grad.j * grad.j);
}