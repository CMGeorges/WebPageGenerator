// Variables
const inputs = document.querySelectorAll('input');
const page = document.getElementById('mypage');
let parent = page;

function create_element() {
  const tag = inputs[0].value.trim();
  if (!tag) return;
  const element = document.createElement(tag);

  const className = inputs[1].value.trim();
  if (className) element.className = className;

  const id = inputs[2].value.trim();
  if (id) element.id = id;

  const html = inputs[3].value;
  if (html) element.innerHTML = html;

  const parentId = inputs[4].value.trim();
  const container = parentId ? document.getElementById(parentId) : page;
  if (container) {
    container.appendChild(element);
    parent = container;
    console.log(element);
  }
}

function remove_element() {
  if (parent && parent.lastChild) {
    parent.lastChild.remove();
  }
}

function reset() {
  inputs.forEach(i => {
    i.value = '';
  });
}
