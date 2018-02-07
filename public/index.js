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

form.addEventListener('submit', function(e) {
  e.preventDefault();
  addToList(input.value);
  arr.push(generateItemData(input.value));
  input.value = '';
});

const arr = [
  
];

function generateItemData(text, isChecked = false) {
  return {
    text,
    isChecked
  }
}

function sortList() {
  arr.forEach(entry => {
    addToList(entry);
  });
}


function addToList(text) {
  const li = document.createElement('section');
  const div = document.createElement('div');
  const checkboxBtnDiv = document.createElement('div');
  const checkboxDiv = document.createElement('div');
  const p = document.createElement('p');
  const checkbox = document.createElement('input');
  const btn = document.createElement('button');

  checkbox.setAttribute('type', 'checkbox');
  li.classList.add('list-item');
  p.innerText = `${text}`;
  btn.innerText = 'X';
  btn.classList.add('remove-button');

  checkboxDiv.appendChild(checkbox);
  checkboxBtnDiv.appendChild(checkboxDiv);
  checkboxBtnDiv.appendChild(btn);
  div.appendChild(p);
  div.appendChild(checkboxBtnDiv);
  li.appendChild(div);
  list.appendChild(li);
}

function toggleCheckBox(e) {
  //this seems like poor design, but it works
  e.target.parentElement.parentElement.parentElement.classList.toggle('checked');
}

function removeFromList(element) {
  element.target.parentElement.parentElement.remove();
}