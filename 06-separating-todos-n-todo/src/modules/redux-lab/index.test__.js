import ModuleEntry from './index';
import {counter} from './index';


console.log('redux lab', test)
test('type INCREMENT will return 1', () => {
    expect(counter(0, {type:'INCREMENT'})).toBe(1);
});

test('xxx', () => {
  expect(3).toBe(3);
});
