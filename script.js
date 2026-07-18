const noteCard = document.querySelector('.note-card');
const headings = document.querySelectorAll('.note-card h2, .note-card h3');

function animateNotes() {
  if (!noteCard || headings.length === 0) return;

  noteCard.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
  noteCard.style.transform = 'translateY(20px)';
  noteCard.style.opacity = '0';

  requestAnimationFrame(() => {
    noteCard.style.transform = 'translateY(0)';
    noteCard.style.opacity = '1';
  });

  headings.forEach((heading, index) => {
    heading.style.opacity = '0';
    heading.style.transform = 'translateX(-15px)';
    heading.style.transition = `opacity 0.6s ease ${0.25 + index * 0.08}s, transform 0.6s ease ${0.25 + index * 0.08}s`;

    requestAnimationFrame(() => {
      heading.style.opacity = '1';
      heading.style.transform = 'translateX(0)';
    });
  });
}

window.addEventListener('DOMContentLoaded', animateNotes);
