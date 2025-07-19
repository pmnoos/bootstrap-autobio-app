

document.addEventListener('DOMContentLoaded', function () {
  // Define chapters data
  const chaptersData = [
    {
      id: 'chapter-1',
      title: 'Chapter 1: Beginnings',
      subtitle: 'A First Glimpse of Life',
      img: 'assets/images/boston-public-library.jpg',
      imgAlt: 'Banner 1',
      content: 'Content for Chapter 1 goes here...'
    },
    {
      id: 'chapter-2',
      title: 'Chapter 2: Family Roots',
      subtitle: 'Memories of Home',
      img: 'assets/banner2.jpg',
      imgAlt: 'Banner 2',
      content: 'Content for Chapter 2 goes here...'
    },
    {
      id: 'chapter-3',
      title: 'Chapter 3: Early School Days',
      subtitle: 'Lessons and Laughter',
      img: 'assets/banner3.jpg',
      imgAlt: 'Banner 3',
      content: 'Content for Chapter 3 goes here...'
    },
    // Placeholder chapters 4-25
    ...Array.from({length: 22}, (_, i) => ({
      id: `chapter-${i+4}`,
      title: `Chapter ${i+4}: Placeholder Title`,
      subtitle: `Subtitle for Chapter ${i+4}`,
      img: 'assets/banner-placeholder.jpg',
      imgAlt: `Banner ${i+4}`,
      content: `Content for Chapter ${i+4} goes here...`
    }))
  ];

  // Generate sidebar links
  const sidebar = document.getElementById('sidebar-chapters');
  sidebar.innerHTML = chaptersData.map((ch, idx) =>
    `<li class="nav-item"><a class="nav-link chapter-link${idx === 0 ? ' active' : ''}" href="#" data-target="${ch.id}">${ch.title.split(':')[0]}</a></li>`
  ).join('');

  // Generate chapter sections
  const chaptersContainer = document.getElementById('chapter-sections');
  chaptersContainer.innerHTML = chaptersData.map((ch, idx) =>
    `<section id="${ch.id}" class="mb-5 chapter-section${idx !== 0 ? ' d-none' : ''}">
      <h2>${ch.title}</h2>
      <h5 class="text-secondary">${ch.subtitle}</h5>
      <img src="${ch.img}" class="img-fluid rounded mb-3 chapter-img" alt="${ch.imgAlt}">
      <p>${ch.content}</p>
    </section>`
  ).join('');

  // Add event listeners for navigation
  const links = document.querySelectorAll('.chapter-link');
  const chapters = document.querySelectorAll('.chapter-section');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-target');

      chapters.forEach(ch => ch.classList.add('d-none'));
      links.forEach(l => l.classList.remove('active'));
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove('d-none');
        this.classList.add('active');
      }
    });
  });
});
