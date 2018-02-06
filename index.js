const list = document.getElementById('list');

addToList('new list item');

function addToList(text) {
  const div = document.createElement('div');
  div.classList.add('list-item');
  const p = document.createElement('p');
  const btn = document.createElement('button');
  p.innerText = `${text}`;
  btn.innerText = 'X';
  div.appendChild(p);
  div.appendChild(btn);
  list.appendChild(div);
}