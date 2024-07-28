// Seleciona o elemento do cursor
const cursor = document.querySelector('.cursor');
// Seleciona todos os botões com a classe 'btn'
const btns = document.querySelectorAll('.btn');

// Define as coordenadas iniciais do cursor
const coords = { x: window.innerWidth / 10, y: -1000 };

// Atualiza as coordenadas 'x' e 'y' com base na posição do mouse
window.addEventListener("mousemove", function(e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

// Adiciona a classe 'cursor-disabled' ao container do cursor quando o mouse sai da janela do navegador
window.addEventListener("mouseout", function(e) {
  if (e.relatedTarget === null) {
    document.querySelector(".cursor-container").classList.add("cursor-disabled");
  }
});

// Remove a classe 'cursor-disabled' do container do cursor quando o mouse entra na janela do navegador
window.addEventListener("mouseover", function(e) {
  if (e.clientX >= 0 && e.clientY >= 0) {
    document.querySelector(".cursor-container").classList.remove("cursor-disabled");
  }
});

// Atualiza a posição do cursor na tela com base no movimento do mouse
document.addEventListener('mousemove', function(e) {
  var cursor = document.querySelector('.cursor');
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Adiciona e remove a classe 'hovered' ao cursor quando o mouse está sobre os botões
btns.forEach(function(btn) {
  btn.addEventListener('mouseover', function() {
    cursor.classList.add('hovered');
  });

  btn.addEventListener('mouseout', function() {
    cursor.classList.remove('hovered');
  });
});