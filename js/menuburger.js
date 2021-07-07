btn = document.querySelector(".material-btn");
hamburguer = document.querySelector(".material-hamburguer");
content = document.querySelector(".material-content");
lis = document.querySelectorAll("nav li");
menu =  document.querySelector(".menu-wrapper");
btn.addEventListener('click', function() {
  this.classList.toggle('active');
  hamburguer.classList.toggle('material-close');
  content.classList.toggle('active');
  menu.classList.toggle('active');
  Array.prototype.forEach.call(lis, function(el, i){
    el.classList.toggle('active');
  });
});