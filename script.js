document.addEventListener('DOMContentLoaded', function() {
  let count = localStorage.getItem('tapCount') || 0;
  const countDisplay = document.getElementById('count');

  // Update the counter display
  function updateCount() {
    countDisplay.textContent = count;
    localStorage.setItem('tapCount', count);
  }

  // Increment count on button click
  document.getElementById('increment').addEventListener('click', function() {
    count++;
    updateCount();
  });

  // Reset count on button click
  document.getElementById('reset').addEventListener('click', function() {
    count = 0;
    updateCount();
  });

  // Initial update of count display
  updateCount();
});
