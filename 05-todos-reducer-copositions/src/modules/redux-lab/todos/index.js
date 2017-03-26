const todo = (state = void 0, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const state_prev = state;
            let state_next;

            state_next = action.payload;

            return state_next;
        }
        case 'TOGGLE_TODO': {
            const state_prev = state;
            let state_next;

                // The following will not mutate the original todo item:
                state_next = {             // Create a new object
                    ...state_prev,         // copy previous properties to this new obj
                    done: !state_prev.done // invert the previous value of done
                };

                // // [!] Don't do this
                // // because it is mutating the original todo item:
                // state_prev.done = !state_prev.done;
                // state_next = state_prev;

            return state_next;
        }
        default:
            return state;
    }
};


const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const state_prev = state;
            let state_next;

            let todo_prev = void 0; // before adding, this todo did not exist, so undefined
            state_next = [
                ...state_prev,
                todo( todo_prev, action )
            ];

            return state_next;
        }
        case 'TOGGLE_TODO': {
            const state_prev = state;
            let state_next;

            const id = action.payload.id;

            state_next = state_prev.map( todo_prev => {
                let todo_next;

                if ( todo_prev.id === id ) { // is the id which todo we want to toggle
                    todo_next = todo( todo_prev, action);
                } else {                    // is not the id which todo we want to toggle
                    todo_next = todo_prev;
                }

                return todo_next;
            });

            return state_next;
        }
        default:
            // state = [...state];         // this would violate reference presevation
            // state[0].text = 'mutation'; // this would mutate previous state (violate value presevation)
            return state;

    }
};

export default todos;
export {todo};

