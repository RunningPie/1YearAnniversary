document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    
    // Create a single tooltip element to be reused
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    gallery.appendChild(tooltip);

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const name = card.getAttribute('data-name');
        const description = card.getAttribute('data-description');

        card.addEventListener('mouseover', (event) => {
            // Update the tooltip content
            tooltip.innerHTML = `<strong>${name}</strong><br>${description}`;
            
            // Calculate the position of the card and set tooltip position directly
            // const rect = card.getBoundingClientRect();
            // const tooltipX = rect.left + window.pageXOffset + rect.width / 2 - tooltip.offsetWidth / 2;
            // const tooltipY = rect.top + window.pageYOffset - tooltip.offsetHeight - 10;

            // tooltip.style.left = `${tooltipX}px`;
            // tooltip.style.top = `${tooltipY}px`;
            
            // Show the tooltip
            tooltip.style.opacity = '1';
        });

        card.addEventListener('mouseout', () => {
            // Hide the tooltip when the mouse leaves the card
            tooltip.style.opacity = '0';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const clickableCard = document.getElementById('clickable-card');
    clickableCard.addEventListener('click', function() {
      window.location.href = 'password.html'; // Replace with your actual URL
    });
  });

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'asset/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  