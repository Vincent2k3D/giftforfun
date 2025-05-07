/* JavaScript for creating particles */
document.addEventListener('DOMContentLoaded', function() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    createParticle(particlesContainer);
  }
  
  function createParticle(container) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random size between 5px and 20px
    const size = Math.random() * 15 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Random animation duration
    const duration = Math.random() * 20 + 10;
    particle.style.animationDuration = `${duration}s`;
    
    // Random animation delay
    particle.style.animationDelay = `${Math.random() * 5}s`;
    
    // Random colors
    const colors = ['rgba(255, 107, 107, 0.7)', 'rgba(78, 205, 196, 0.7)', 'rgba(255, 180, 78, 0.7)'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    container.appendChild(particle);
  }
});