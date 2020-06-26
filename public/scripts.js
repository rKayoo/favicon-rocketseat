const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const cursos = document.querySelectorAll('.curso');
const expand = document.querySelector('.expand');


for(const curso of cursos) {
  curso.addEventListener('click', () => {
    const nameId = curso.getAttribute('Id');
    modal.classList.remove('maximize');
    modalOverlay.classList.add('active');
    document.querySelector('iframe').src = `https://rocketseat.com.br/${nameId}`;
  });
}

document.querySelector('.close-modal').addEventListener('click', () => {
  modalOverlay.classList.remove('active');
  document.querySelector('iframe').src = '';
});

expand.addEventListener('click', () => {
  modal.classList.toggle('maximize');
 });