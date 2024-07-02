// src/redux/reducers/todosReducer.js
const initialState = [
  {text: 'Me vs Me', done: false},
  {text: 'Work Stufff', done: false},
  {text: 'To get a job', done: false},
  {text: 'Car stuff', done: false},
  {text: 'Home Stuff', done: false},
];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todosReducer;
