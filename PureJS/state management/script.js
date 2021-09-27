const display = document.querySelector('#display');

// state가 상태값
const state = {};

// Object.defineProperty가 setState의 역할을 한다고 이해함.
Object.defineProperty(state, 'name', {
  set: val => {
    display.innerHTML = val;
  },
});

const Name = document.querySelector('#name');
const set = document.querySelector('#set');
set.onclick = () => {
  console.log('Name: ', Name);
  state.name = Name.value;
};
