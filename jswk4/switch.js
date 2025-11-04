
let favMonth = prompt("What is your favorite month? (e.g., January)").toLowerCase();


if (/\d/.test(favMonth)) {
    console.log("Please enter a valid month, not numbers!");
} else {
    
    switch (favMonth) {
        case "january":
            console.log("January — A fresh start to the year!");
            break;
        case "february":
            console.log("February — The month of love and chilly weather!");
            break;
        case "march":
            console.log("March — Spring begins to bloom!");
            break;
        case "april":
            console.log("April — Showers bring May flowers!");
            break;
        case "may":
            console.log("May — Flowers and sunshine everywhere!");
            break;
        case "june":
            console.log("June — The start of summer fun!");
            break;
        case "july":
            console.log("July — Barbecues and fireworks galore!");
            break;
        case "august":
            console.log("August — The last full month of summer!");
            break;
        case "september":
            console.log("September — Time for cool breezes and back to school!");
            break;
        case "october":
            console.log("October — Spooky season and falling leaves!");
            break;
        case "november":
            console.log("November — A time for gratitude and cozy nights!");
            break;
        case "december":
            console.log("December — Holiday lights and winter cheer!");
            break;
        default:
            console.log("That doesn't seem like a real month. Try again!");
            break;
    }

    if (favMonth === "december" || favMonth === "january" || favMonth === "february") {
        console.log("You love the winter months!");
    } else if (favMonth === "june" || favMonth === "july" || favMonth === "august") {
        console.log("You enjoy the summer months!");
    } else if (
        favMonth === "march" || favMonth === "april" || favMonth === "may" ||
        favMonth === "september" || favMonth === "october" || favMonth === "november"
    ) {
        console.log("Other months are interesting too!");
    }
}
