const btnIncrementar$ = document.getElementById("btn_incrementar")
const p$ = document.getElementById("contador")

let contador = 0;

p$.innerHTML = contador;

btnIncrementar$.addEventListener('click', function() {
p$.innerHTML = ++contador;
});
