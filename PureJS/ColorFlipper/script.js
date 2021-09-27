const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const num = Math.floor(Math.random() * colors.length);
  console.log(num);

  document.body.style.backgroundColor = colors[num];
  color.textContent = colors[num];
});
