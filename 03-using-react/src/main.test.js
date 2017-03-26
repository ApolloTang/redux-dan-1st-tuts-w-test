import {counter} from './main.js';


console.log('redux lab', test);
test('type INCREMENT of 0 will return 1', () => {
    expect(counter(0, {type:'INCREMENT'})).toBe(1);
});

test('type INCREMENT of 1 will return 2', () => {
    expect(counter(1, {type:'INCREMENT'})).toBe(2);
});

test('type DECREMENT of 2 will return 1', () => {
    expect(counter(2, {type:'DECREMENT'})).toBe(1);
});

test('type DECREMENT of 1 will return 0', () => {
    expect(counter(1, {type:'DECREMENT'})).toBe(0);
});

test('type "UNKNOWN" of counter undefined return 0', () => {
    expect(counter(void 0, {type:'UNKNOWN'})).toBe(0);
});
