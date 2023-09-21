//Get input from the user
let monthNo = prompt("Enter the month (1-12)");

//Assign variables
let season;
let seasonColor;

//conditional check
switch (monthNo) {
    case "1":
    case "2":
    case "3":
        season = "Spring";
        seasonColor = "lightgreen";
        break;
    case "4":
    case "5":
    case "6":
        season = "Summer";
        seasonColor = "red";
        break;
    case "7":
    case "8":
    case "9":
        season = "Autumn";
        seasonColor = "lightyellow";
        break;
    case "10":
    case "11":
    case "12":
        season = "Winter";
        seasonColor = "lightblue";
        break;
    default:
        break;

}

//display the result
document.write(season);
document.body.style.backgroundColor=seasonColor;
