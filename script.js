const stars = document.querySelectorAll('.star');
const noteBox = document.getElementById('noteBox');

stars.forEach(star => {
  star.addEventListener('click', (e) => {
    const note = star.getAttribute('data-note');
    noteBox.textContent = note;
    noteBox.style.top = `${e.clientY}px`;
    noteBox.style.left = `${e.clientX}px`;
    noteBox.classList.remove('hidden');
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('star')) {
    noteBox.classList.add('hidden');
  }
});
