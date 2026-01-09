// Animate elements on page load
document.addEventListener('DOMContentLoaded', function() {
  
  // Animate top banner
  const topBanner = document.querySelector('.top-banner');
  if (topBanner) {
    setTimeout(() => {
      topBanner.style.animation = 'fadeIn 1s ease-out forwards';
      topBanner.style.opacity = '1';
    }, 100);
  }

  // Animate hero section elements
  const heroH1 = document.querySelector('.hero h1');
  const heroP = document.querySelector('.hero p');
  const heroActions = document.querySelector('.hero-actions');

  if (heroH1) {
    setTimeout(() => {
      heroH1.style.animation = 'fadeInUp 0.8s ease-out forwards';
      heroH1.style.opacity = '1';
    }, 300);
  }

  if (heroP) {
    setTimeout(() => {
      heroP.style.animation = 'fadeInUp 0.8s ease-out forwards';
      heroP.style.opacity = '1';
    }, 500);
  }

  if (heroActions) {
    setTimeout(() => {
      heroActions.style.animation = 'fadeInUp 0.8s ease-out forwards';
      heroActions.style.opacity = '1';
    }, 700);
  }

  // Add sparkle effect on mouse move (optional fun effect)
  document.addEventListener('mousemove', function(e) {
    // Only create sparkles occasionally to avoid performance issues
    if (Math.random() > 0.95) {
      createSparkle(e.pageX, e.pageY);
    }
  });
});

// Function to create sparkle effect
function createSparkle(x, y) {
  const sparkle = document.createElement('span');
  sparkle.className = 'sparkle';
  sparkle.style.left = x + 'px';
  sparkle.style.top = y + 'px';
  document.body.appendChild(sparkle);
  
  setTimeout(() => {
    sparkle.remove();
  }, 1000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
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