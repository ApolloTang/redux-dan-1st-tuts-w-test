import reducer from './index.js';

describe('unknown action', () => {
    const stateBefore = [
        {
            id: 1,
            text: 'do something',
            done: false
        }
    ];
    const action = {
        type: 'UNKNOWN',
        payload: {}
    };
    const stateAfter = [
        {
            id: 1,
            text: 'do something',
            done: false
        }
    ];
    test('if action type is unknown, it should return previous state (reference is preserved)', ()=>{
        expect( reducer(stateBefore, action)).toBe(stateBefore);
    });
    test('if action type is unknown, it should not mutate previous state (value is preserved)', ()=>{
        expect( reducer(stateBefore, action) ).toEqual( stateAfter );
    });
});



describe('ADD_TODO action', () => {
    const stateBefore = [];

    const action = {
        type: 'ADD_TODO',
        payload: {
            id: 1,
            text: 'do something',
            done: false
        }
    };

    const stateAfter = [
        {
            id: 1,
            text: 'do something',
            done: false
        }
    ];

    test('ADD_TODO works', ()=>{
        expect( reducer(stateBefore, action)).toEqual(stateAfter);
    });
});


describe('TOGGLE_TODO action', () => {
    const stateBeforeToggle = [
        {
            id: 1,
            text: 'do something',
            done: false
        },
        {
            id: 2,
            text: 'do other thing',
            done: false
        },
    ];
    const action = {
        type: 'TOGGLE_TODO',
        payload: {
            id: 1,
        }
    };
    const stateAfterToggle = [
        {
            id: 1,
            text: 'do something',
            done: true
        },
        {
            id: 2,
            text: 'do other thing',
            done: false
        },
    ];
    test('TOGGLE_TODO works (value is as expected)', ()=>{
        expect( reducer(stateBeforeToggle, action) ).toEqual(stateAfterToggle);
    });
    test('todo being toggle (id=1) is a new object (none mutation)', ()=>{
        expect( reducer(stateBeforeToggle, action)[0] ).not.toBe(stateBeforeToggle[0]);
    });
});

// afterAll(done => {
//   setTimeout(() => done(), 3000);
// });
