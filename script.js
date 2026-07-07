const cards = document.querySelectorAll('.project-card, .case-study, .resume-card, .contact-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });
cards.forEach(card => observer.observe(card));
