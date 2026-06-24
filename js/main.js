document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.lift-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.style.opacity = '1';
    });
  }, { threshold: 0.1 });
  cards.forEach(c => { c.style.opacity = '0'; observer.observe(c); });
});
