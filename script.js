let btn = document.getElementById('count-el');
//let saveBtn = document.getElementById('save-btn');
let saveEl = document.getElementById('save-el');

let count = 0;

function incrementing() {
  count += 1;
  btn.textContent = count; 
}

function save() {
  let countStr = ' ' + count + ' - '; 
  saveEl.textContent += countStr;
  count = 0;
  btn.textContent = count;
} 


