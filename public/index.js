const list = document.getElementById('list');
const form = document.getElementsByTagName('form')[0];
const input = document.getElementsByTagName('input')[0];
const toggleBtn = document.querySelector('#toggle button');

// addToList('new list item');
// addToList('new list item');
// addToList('new list item');

const arr = [];

toggleBtn.addEventListener('click', sortList);

function removeFromList(e) {
  arr.forEach((data, i) => {
    if (data.id == e.path[2].id) arr.splice(i, 1);
  })
  e.path[2].remove();
}

function toggleCheckBox(e) {
  //this seems like it could be simplified
  arr.forEach((data, i) => {
    if (data.id == e.path[3].id) {
      if (arr[i].isChecked) arr[i].isChecked = false;
      else if (!arr[i].isChecked) arr[i].isChecked = true;
    }
  });
  e.path[3].classList.toggle('checked');
}

const idGenerator = generateUniqueId();
function generateItemData(text, isChecked = false) {
  const uniqueId = idGenerator();
  return {
    text,
    isChecked,
    id: uniqueId
  };
}

function sortList() {
  emptyElement(list);
  arr.filter(data => data.isChecked === false).map(entry => addToList(entry));
  arr.filter(data => data.isChecked === true).map(entry => addToList(entry));
}

list.addEventListener('click', function(e) {
  if (e.target.classList.contains('remove-button')) removeFromList(e);
  if (e.target.type === 'checkbox') toggleCheckBox(e);
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const newTextData = generateItemData(input.value);
  arr.push(newTextData);
  addToList(newTextData);
  input.value = '';
});

function addToList(data) {
  const li = document.createElement('section');
  const div = document.createElement('div');
  const checkboxBtnDiv = document.createElement('div');
  const checkboxDiv = document.createElement('div');
  const p = document.createElement('p');
  const checkbox = document.createElement('input');
  const btn = document.createElement('button');

  div.setAttribute('id', data.id);
  if (data.isChecked) div.classList.add('checked')
  checkbox.setAttribute('type', 'checkbox');
  li.classList.add('list-item');
  p.innerText = `${data.text}`;
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

/*
  HELPER FUNCTION(S)
*/

function emptyElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function generateUniqueId() {
  let counter = 0;
  return function() {
    const uniqueId = counter;
    counter++;
    return uniqueId;
  };
}