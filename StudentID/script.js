function generateCard() {
  // Get values from form inputs:
  const fullName = document.querySelector("#inputName");
  const collegeName = document.querySelector("#inputCollege");
  const locationName = document.querySelector("#inputLocation");

  const nameValue = fullName.value;
  const collegeValue = collegeName.value;
  const locationValue = locationName.value;

  // Assign the value to the card:
  const cardName = document.querySelector("#cardName");
  cardName.innerHTML = nameValue;

  const cardCollege = document.querySelector("#cardCollege");
  cardCollege.innerHTML = collegeValue;

  const cardLocation = document.querySelector("#cardLocation");
  cardLocation.innerHTML = locationValue;
}

function resetCard() {
  const cardName = document.querySelector("#cardName");
  cardName.innerHTML = "Full Name";

  const cardCollege = document.querySelector("#cardCollege");
  cardCollege.innerHTML = "College Name";

  const cardLocation = document.querySelector("#cardLocation");
  cardLocation.innerHTML = "Location";
}

document.querySelector("#submitCard").addEventListener("click", generateCard);
document.querySelector("#resetCard").addEventListener("click", resetCard);
