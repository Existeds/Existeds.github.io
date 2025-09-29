// Modern Portfolio JavaScript - Willy
const projects = [
  {
    id: 1,
    title: 'Yummy Hack The Box',
    description: 'Penetration Testing to Yummy Hack The Box Machine.',
    image: 'assets/YUMMY.png',
    type: 'Penetration Testing'
  },

  {
    id: 2,
    title: 'Instant Hack The Box',
    description: 'Penetration Testing to Instant Hack The Box Machine.',
    image: 'assets/Instant.png',
    type: 'Penetration Testing'
  },
  { id: 3, 
    title: 'Permx Hack The Box', 
    description: 'Penetration Testing to Permx Hack The Box Machine.', 
    image: 'assets/Permx.png', 
    type: 'Penetration Testing',
  },

  {
    id: 4,
    title: 'Chemistry Hack The Box',
    description: 'Penetration Testing to Chemistry Hack The Box Machine.',
    image: 'assets/Chemistry.png',
    type: 'network-security'
  },
  
];

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Render projects
  renderProjects();
  
  // Add scroll effect to navigation
  addScrollEffects();
  
  // Add intersection observer for animations
  addScrollAnimations();
});

function renderProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  
  projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.style.animationDelay = `${index * 0.1}s`;
    
    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <a href="project${project.id}.html" class="project-btn">View Details</a>
      </div>
    `;
    
    projectsGrid.appendChild(projectCard);
  });
}

function addScrollEffects() {
  const nav = document.querySelector('.nav');
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      nav.style.background = 'rgba(10, 14, 26, 0.95)';
    } else {
      nav.style.background = 'rgba(10, 14, 26, 0.8)';
    }
    
    lastScrollY = currentScrollY;
  });
}

function addScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animateElements = document.querySelectorAll('.project-card, .skill-item, .contact-item');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
}

// Grid item hover effects
document.addEventListener('DOMContentLoaded', function() {
  const gridItems = document.querySelectorAll('.grid-item');
  
  gridItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.background = 'var(--surface)';
      this.style.color = 'var(--accent-primary)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.background = 'var(--accent-bg)';
      this.style.color = 'var(--secondary-text)';
    });
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
