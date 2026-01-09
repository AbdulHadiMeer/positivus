const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
  item.querySelector('.accordion-header').addEventListener('click', () => {
    items.forEach(i => {
      i.classList.remove('active');
      const btn = i.querySelector('.icon');
      if (btn) btn.textContent = '+';
    });

    item.classList.add('active');
    item.querySelector('.icon').textContent = '−';
  });
});




function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}
