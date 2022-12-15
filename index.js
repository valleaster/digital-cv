// Expand and collapse work exp cards
const cardContainers = document.querySelectorAll('.card-container');

cardContainers.forEach(cardContainer => {
  cardContainer.addEventListener('click', e => {
    const expandedCardContainers = document.querySelectorAll('.card-container.expanded');
    expandedCardContainers.forEach(expandedCardContainer => {
      expandedCardContainer.classList.remove('expanded');
    });
    cardContainer.classList.toggle('expanded');
  });
});

$(document).ready(function() {
    // Initialize carousel
    $("#myCarousel").carousel({
      // Options go here
    });
  
    // Set number of items to show
    $("#myCarousel").carousel({
      itemsPerPage: 3
    });
});