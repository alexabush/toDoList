const list = document.getElementById('list');
const form = document.getElementsByTagName('form')[0];
const input = document.getElementsByTagName('input')[0];

addToList('new list item');
addToList('new list item');
addToList('new list item');


list.addEventListener('click', function(e) {
  if (e.target.classList.contains('remove-button')) removeFromList(e);
  if (e.target.type === 'checkbox') toggleCheckBox(e);
});

function toggleCheckBox(e) {
  //this seems like poor design, but it works
  e.target.parentElement.parentElement.parentElement.classList.toggle('checked');
  console.log('checked');
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  addToList(input.value);
  input.value = '';
});

function addToList(text) {
  const section = document.createElement('section');
  const div = document.createElement('div');
  const checkboxBtnDiv = document.createElement('div');
  const checkboxDiv = document.createElement('div');
  const p = document.createElement('p');
  const checkbox = document.createElement('input');
  const btn = document.createElement('button');

  checkbox.setAttribute('type', 'checkbox');
  section.classList.add('list-item');
  p.innerText = `${text}`;
  btn.innerText = 'X';
  btn.classList.add('remove-button');

  checkboxDiv.appendChild(checkbox);
  checkboxBtnDiv.appendChild(checkboxDiv);
  checkboxBtnDiv.appendChild(btn);
  div.appendChild(p);
  div.appendChild(checkboxBtnDiv);
  section.appendChild(div);
  list.appendChild(section);
}

function removeFromList(element) {
  element.target.parentElement.remove();
}