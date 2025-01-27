document.addEventListener("DOMContentLoaded", () => {
    function updateReviewCounter() {
      // Get the current review count from localStorage, or start at 0
      let reviewCount = localStorage.getItem("reviewCount");
      reviewCount = reviewCount ? parseInt(reviewCount, 10) : 0;
  
      // Increment the count
      reviewCount++;
      localStorage.setItem("reviewCount", reviewCount);
  
      // Locate the counter display element
      const counterDisplay = document.getElementById("reviewCounter");
  
      // Safely update the content if the element exists
      if (counterDisplay) {
        counterDisplay.textContent = `You have submitted ${reviewCount} review(s) so far.`;
      } else {
        console.error("Element with id 'reviewCounter' not found.");
      }
    }
  
    // Call the function to update the counter
    updateReviewCounter();
  });

  function goBack() {
    window.location.href = 'form.html';
  }