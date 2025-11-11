// Name: Brady Corbin
// Date: 11/11/2025

// Ask for the number of snacks
let snackCount = prompt("How many snacks do you want?");

// Check if the user clicked Cancel
if (snackCount === null) {
  console.log("No snacks requested. Exiting.");
} else {
  // Convert to a number
  snackCount = Number(snackCount);

  // Validate input
  if (isNaN(snackCount) || snackCount <= 0) {
    console.log("Invalid number entered. Exiting.");
  } else {
    // Loop through snacks
    for (let i = 1; i <= snackCount; i++) {
      let snack = prompt("Enter snack #" + i + " name:");

      // Check if user canceled during snack entry
      if (snack === null) {
        console.log("Snack selection canceled. Exiting.");
        break;
      }

      // Print snack message
      console.log("Snack #" + i + ": " + snack + " given to customer");

      // Give bonus every 3rd snack
      if (i % 3 === 0) {
        console.log("🎉 You got a bonus snack!");
      }
    }
  }
}
