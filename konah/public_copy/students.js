document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const hiddenCards = document.querySelectorAll('.hidden-card');

  cards.forEach(card => {
    card.addEventListener('click', (event) => {
      // Find the currently active hidden card and hide it
      const activeCard = document.querySelector('.hidden-card.active');
      if (activeCard) {
        activeCard.classList.remove('active');
        activeCard.style.display = 'none';
      }

      // Get the ID of the clicked card and find the corresponding hidden card
      const id = card.id;
      const hiddenCard = document.getElementById(`${id}-hidden`);
      if (hiddenCard && !hiddenCard.classList.contains('active')) {
        hiddenCard.classList.add('active');
        hiddenCard.style.display = 'flex';

        // Trigger reflow to restart CSS animations
        void hiddenCard.offsetWidth;
        hiddenCard.querySelectorAll('h1, p').forEach(el => {
          el.style.opacity = 0; // Reset opacity
          el.style.transform = 'translateY(20px)'; // Reset position
          void el.offsetWidth; // Trigger reflow to restart animation
          el.style.opacity = 1;
          el.style.transform = 'translateY(0)';
        });
      }
      event.stopPropagation(); // Prevent the event from bubbling up to the document
    });
  });

  document.addEventListener('click', (event) => {
    const activeCard = document.querySelector('.hidden-card.active');
    if (activeCard && !event.target.closest('.hidden-card')) {
      activeCard.classList.remove('active');
      activeCard.style.display = 'none';
    }
  });

  // Handle assignment form submission
  const assignmentForm = document.getElementById('assignment-form');
  assignmentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const fileInput = document.getElementById('assignment-file');
    const file = fileInput.files[0];
    if (file && file.type !== 'application/pdf'){
      event.preventDefault();
      alert('Only PDF files are allowed');
    }else {
      
      const submissionDate = new Date().toLocaleDateString();
      const statusRow = `
        <tr>
          <td>${submissionDate}</td>
          <td>Submitted</td>
          <td>Pending</td>
        </tr>
      `;

      const assignmentStatusTable = document.getElementById('assignment-status').querySelector('tbody');
      assignmentStatusTable.insertAdjacentHTML('beforeend', statusRow);

      // Reset the form
      assignmentForm.reset();
    }
  });

  // Initialize the calendar
  const calendar = document.getElementById('assignment-calendar');
  const deadlineDate = new Date();
  deadlineDate.setDate(deadlineDate.getDate() + 7); // Set deadline to 7 days
  const deadlineFormatted = deadlineDate.toLocaleDateString();

  calendar.innerHTML = `
    <div>Assignment Deadline: ${deadlineFormatted}</div>
    <!-- Calendar implementation can be more complex depending on requirements -->
  `;
  // closebtn
  hiddenCards.forEach(hiddenCard => {
    const closeButton = hiddenCard.querySelector('.close-button');
    if (closeButton) {
      closeButton.addEventListener('click', (event) => {
        hiddenCard.classList.remove('active');
        hiddenCard.style.display = 'none';
        event.stopPropagation();
      });
    }
  });
});
