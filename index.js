const list = document.getElementById('list');
const form = document.getElementsByTagName('form')[0];
const input = document.getElementsByTagName('input')[0];

addToList('new list item');
addToList('new list item');
addToList('new list item');


list.addEventListener('click', function(e) {
  if (e.target.classList.contains('remove-button')) removeFromList(e);
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  addToList(input.value);
  input.value = '';
})

function addToList(text) {
  const div = document.createElement('div');
  const p = document.createElement('p');
  const btn = document.createElement('button');
  div.classList.add('list-item');
  p.innerText = `${text}`;
  btn.innerText = 'X';
  btn.classList.add('remove-button');
  div.appendChild(p);
  div.appendChild(btn);
  list.appendChild(div);

}

function removeFromList(element) {
  element.target.parentElement.remove();
}