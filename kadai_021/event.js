const btnA = document.getElementById('btn');

btnA.addEventListener('click', () => {

 const textA = document.getElementById('text');

 setTimeout(() => {textA.textContent = 'ボタンをクリックしました'}, 2000);

});