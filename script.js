function equal() {
  document.c.txt.value = eval(c.txt.value); 
  if(c.txt.value.length > 15) { alert('input tidak bisa lebih dari 15 karakter!'); 
  document.c.txt.value = ''; 
  }
}

function smallC() {
  document.c.txt.value = c.txt.value.replace(/([^])$/g, '')
}