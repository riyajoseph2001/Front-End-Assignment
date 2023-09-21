// Function to change the visibility of the text input based on category selection
function changeTextInput() {
    var languageSelect = document.getElementById("languageSelect");
    var otherTextInput = document.getElementById("otherTextInput");

    if (languageSelect.value === "Other") {
        otherTextInput.style.display = "block";
    } else {
        otherTextInput.style.display = "none";
    }
}