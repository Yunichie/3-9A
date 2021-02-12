function equal() {
  document.c.txt.value = eval(c.txt.value); 
  if(c.txt.value.length > 15) {
    alert('input tidak bisa lebih dari 15 karakter!'); 
    document.c.txt.value = ''; 
  }
}

function smallC() {
  document.c.txt.value = c.txt.value.replace(/([^])$/g, '');
}

function C() {
  c.txt.value = '';
}

function dot() {
  document.c.txt.value += '.';
}

//numbers

function one() {
  document.c.txt.value += '1';
}

function two() {
  document.c.txt.value += '2';
}

function three() {
  document.c.txt.value += '3';
}

function four() {
  document.c.txt.value += '4';
}

function five() {
  document.c.txt.value += '5';
}

function six() {
  document.c.txt.value += '6';
}

function seven() {
  document.c.txt.value += '7';
}

function eight() {
  document.c.txt.value += '8';
}

function nine() {
  document.c.txt.value += '9';
}

function zero() {
  document.c.txt.value += '0';
}

//operator

function plus() {
  document.c.txt.value += '+';
}

function substract() {
  document.c.txt.value += '-';
}

function multiply() {
  document.c.txt.value += '*';
}

function divide() {
  document.c.txt.value += '/';
}