const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const state_prev = state;
            let state_next;

            const todo_new = action.payload;
            state_next = [
                ...state_prev,
                todo_new
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
                    // The following will not mutate the origin todo item:
                    todo_next = {              // Create a new object
                        ...todo_prev,          // copy previous properties to this new obj
                        done : !todo_prev.done // invert the previous value of done
                    }

                    // // [!] Don't do this
                    // // because it is mutating the original todo item:
                    // todo_prev.done = !todo_prev.done;
                    // todo_next = todo_prev;
                } else {                    // is not the id which todo we want to toggle
                    todo_next = todo_prev;
                }

                return todo_next;
            });

            return state_next;
        }
        default:
            // state = [...state]; // this would violate reference presevation
            // state[0].text = 'mutation'; // this would mutate previous state (violate value presevation)
            return state;

    }
};

export default todos;

