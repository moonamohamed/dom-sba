const pageTitle = document.getElementsByTagName('title')[0]
pageTitle.textContent = "Poetry Sanctuary";

let title = document.getElementById("title")

let h3 = document.createElement('h3');
h3.innerText = 'Poems Soothes The Soul';
document.querySelector('main').appendChild(h3)

function submitPoetry(e) {
  e.preventDefault()
  alert("The poem was submitted");
}
document.getElementById("poem_content").addEventListener("submit", submitPoetry);

let list = ['Poets', 'Poems', 'Arthurs', 'Literature'];

const dFrag = document.createDocumentFragment();
for (let p in list) {
  const li = document.createElement('li');
  li.textContent = list[p];
  dFrag.appendChild(li);
}
document.querySelector('h3').appendChild(dFrag);

let form = document.getElementById('poem_content');
form.addEventListener('click', submitPoetry());
form.addEventListener('mouseover', submitPoetry());
form.addEventListener('mouseout', submitPoetry());

function submitPoetry(){
 document.getElementById('poem_content').innerHTML += 'Clicked!<br>';
 h1.addEventListener('click', submitPoetry())
}

function submitPoetry(){
  document.getElementById('poem_content').innerHTML += 'Moused over!<br>';
}

function submitPoetry(){
  document.getElementById('poem_content').innerHTML += 'Moused out!<br>';
}

document.getElementById("poem_content").parentElement.nextElementSibling

// document.getElementById('poem_content').innerHTML += 'Clicked!<br>';
// document.getElementById('poem_content').innerHTML += 'Moused over!<br>';
// document.getElementById('poem_content').innerHTML += 'Moused out!<br>';

// let changeFontColor = e.target;
//   changeFontColor.textContent = 'clicked';