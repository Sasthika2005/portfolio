// Typed.js for dynamic text
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Creative Thinker'],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
  });
  
  // Add active class to navbar links on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
  
      if (scrollY >= sectionTop - 50) {
        current = section.getAttribute('id');
      }
    });
  
    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
  
  // Tab switching for resume and portfolio sections
  const tabs = document.querySelectorAll('.tab-list');
  const tabContents = document.querySelectorAll('.tab-wrapper .tab-grid');
  
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach((tab) => tab.classList.remove('active'));
      tabContents.forEach((content) => content.classList.remove('active'));
  
      tabs[index].classList.add('active');
      tabContents[index].classList.add('active');
    });
  });
  
  // Scroll to top button (Optional)
  const scrollTopButton = document.createElement('button');
  scrollTopButton.textContent = '↑';
  scrollTopButton.classList.add('scroll-top-btn');
  document.body.appendChild(scrollTopButton);
  
  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopButton.classList.add('show');
    } else {
      scrollTopButton.classList.remove('show');
    }
  });
  
  // Prevent default for non-functional links
  document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => e.preventDefault());
  });
  