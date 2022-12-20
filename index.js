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


// Expand and collapse contact-info for lower screen size
const contactInfos = document.querySelectorAll('.contact-info');

contactInfos.forEach(contactInfo => {
  contactInfo.addEventListener('click', e => {
    const expandedcontactInfos = document.querySelectorAll('.contact-info.expanded');
    expandedcontactInfos.forEach(expandedcontactInfo => {
      expandedcontactInfo.classList.remove('expanded');
    });
    contactInfo.classList.toggle('expanded');
  });
});