const body = document.body;
const toggle = document.querySelector('.theme-toggle');
const storedTheme = localStorage.getItem('dev-icaro-theme');
if (storedTheme === 'light' || (!storedTheme && matchMedia('(prefers-color-scheme: light)').matches)) body.classList.add('light');

toggle.addEventListener('click', () => {
  body.classList.toggle('light');
  localStorage.setItem('dev-icaro-theme', body.classList.contains('light') ? 'light' : 'dark');
});

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
