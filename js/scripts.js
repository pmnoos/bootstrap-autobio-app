
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.chapter-link');
  const chapters = document.querySelectorAll('.chapter-section');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-target');

      chapters.forEach(ch => ch.classList.add('d-none'));
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove('d-none');
      }
    });
  });

  // Show only the first chapter by default
  chapters.forEach((ch, idx) => {
    if (idx === 0) {
      ch.classList.remove('d-none');
    } else {
      ch.classList.add('d-none');
    }
  });
});
```// You can add interactive features here if needed.
<<<<<<< HEAD
=======

>>>>>>> a3ffe059d77130b8fd7099bfbb459f17a7efe5f4
