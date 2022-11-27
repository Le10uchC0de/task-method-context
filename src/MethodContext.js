import { reverse } from 'dns';
import { EventEmitter } from './EventEmitter';

/*
1) В методе subscribe подпишитесь на событие click с помощью EventEmitter.on(eventName, callback).
В обработчике нужно увеличивать значение поля count на 1
2)В методе unsubscribe отпишитесь от события click с помощью EventEmitter.off(eventName, callback).
В качестве callback нужно передавать тот же самый обработчик, который был передан при подписке.
 */
function plus() {
    obj.count++;
}

export const obj = {
    count: 0,
    subscribe() {
        EventEmitter.on('click', plus);
    },
    unsubscribe() {
        EventEmitter.off('click', plus);
    },
};

/*
Сделайте так, чтобы метод first вызывал метод second со своими аргументами, но в обратном порядке:

obj1.first(1, 2, 3);
// Внутренний вызов должен быть равносилен obj1.second(3, 2, 1)
 */
export const obj1 = {
    first(...args) {
        let arr = [];
        for (let arg of args) {
            arr.push(arg);
        }
        arr.reverse();
        obj1.second(...arr);
    },
    second() {
        // здесь ничего писать не нужно
    },
};
