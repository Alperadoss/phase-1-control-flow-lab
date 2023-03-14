function scuberGreetingForFeet(feet) {
  if (feet < 400) {
    return "This one is on me!";
  } else if (feet < 2000) {
    return "That will be twenty bucks.";
  } else if (feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      "Thank you so much.";
      break;
    case tip == "not as generous":
      "Thank you.";
      break;
    default:
      "Bye.";
  }
}
