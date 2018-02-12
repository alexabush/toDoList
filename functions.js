const idGenerator = generateUniqueId();

function generateItemData(text, isChecked = false) {
  const uniqueId = idGenerator();
  return {
    text,
    isChecked,
    id: uniqueId
  };
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