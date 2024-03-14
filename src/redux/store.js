import { createStore } from 'redux';

const defaultState = {
    todos: []
}

function rootReducer(state = defaultState, action) {
    if(action.type == "ADD") {
        let copied = JSON.parse(JSON.stringify(state.todos));
        copied.push(action.payload);
        return {...state, todos: copied}
    } else if(action.type == "REMOVE"){
        let copied = JSON.parse(JSON.stringify(state.todos));
        copied = copied.filter(el => {
            return el.id != action.payload
        })

        return {...state, todos: copied}
    } else {
        return state
    }
}

export const store = createStore(rootReducer);