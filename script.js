//your JS code here. If required.
  function updateTimer() {
      // Get the current date and time
      const currentDate = new Date();

      // Format the date and time
      const formattedDate = currentDate.toLocaleDateString();
      const formattedTime = currentDate.toLocaleTimeString();

      // Display the formatted date and time in the HTML element with id "timer"
      document.getElementById('timer').textContent = `${formattedDate} ${formattedTime}`;
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);

    // Initial update when the page loads
    updateTimer();