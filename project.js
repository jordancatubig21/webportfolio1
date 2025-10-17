document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('projectOverlay');
  const overlayImg = document.getElementById('overlayImg');
  const closeBtn = document.querySelector('#projectOverlay .closeBtn');

  // Open overlay when any project button is clicked
  document.querySelectorAll('.viewProjectBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const imgSrc = btn.getAttribute('data-img');
      overlayImg.src = imgSrc;
      overlay.classList.add('show');
    });
  });

  // Close overlay when clicking the back button
  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('show');
    overlayImg.src = '';
  });

  // Close overlay when clicking outside the image
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('show');
      overlayImg.src = '';
    }
  });
});
