"use strict";

document.addEventListener("DOMContentLoaded", function(event) {

  const list = document.getElementById('list');
  const form = document.getElementsByTagName('form')[0];
  const input = document.getElementsByTagName('input')[0];
  const toggleBtn = document.querySelector('#toggle button');
  const arr = [];

  /*
        EVENT LISTENERS
  */

  toggleBtn.addEventListener('click', sortList);

  list.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-button')) removeFromList(e);
    if (e.target.type === 'checkbox') toggleCheckBox(e);
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newTextData = generateItemData(input.value);
    arr.push(newTextData);
    sortList(newTextData);
    input.value = '';
  });


  /*
      LIST MANIPULATION FUNCTIONS
  */

  function sortList() {
    emptyElement(list);
    arr.filter(data => data.isChecked === false).map(entry => addToList(entry));
    arr.filter(data => data.isChecked === true).map(entry => addToList(entry));
  }

  function removeFromList(e) {
    arr.forEach((data, i) => {
      if (data.id == e.path[2].id) arr.splice(i, 1);
    })
    e.path[2].remove();
  }

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
      CHECKBOX MANIPULATION FUNCTIONS
  */

  function toggleCheckBox(e) {
    arr.forEach((data, i) => {
      if (data.id == e.path[3].id) {
        if (arr[i].isChecked) arr[i].isChecked = false;
        else if (!arr[i].isChecked) arr[i].isChecked = true;
      }
    });
    e.path[3].classList.toggle('checked');
  }

});