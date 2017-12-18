var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

var name = prompt('Please enter the name for your reservation');

var claimReservation = function () {
    if (!(name in reservations)) {
      alert("You don't exist in our list")
    } else if (reservations[name].claimed){
        alert("You reservation was already claimed - sorry come back.")
    } else {
        alert("Welcome " + name);
        reservations[name].claimed = true;
    }
}

claimReservation();