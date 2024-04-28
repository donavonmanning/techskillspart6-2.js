const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];
guests.unshift("BRUTUS");
guests.indexOf{0} = "BRUTUS";
guests.push("AUGUSTUS", "LUCIA");
guests.indexOf
const spartacusIndex = guests.indexOf("SPARTACUS") =-1;
const indexToRemove = guests.indexOf("CASSIUS");
guests.splice(indexToRemove, 1);
const specialGuests = guests.slice(0, 3);
const honoredGuests = guests.slice(0, 2); // 
const otherGuests = guests.slice(2); // 
otherGuests.sort(); // 
const sortedGuests = honoredGuests.concat(otherGuests); 

const guests = {
    ANTONY: {
      title: "General",
      region: "Rome",
      dietaryPreference: "Vegetarian",
      pastGifts: ["Golden Laurel", "Chariot"]
    },
    CICERO: {
      title: "Orator",
      region: "Arpinum",
      dietaryPreference: "Omnivore",
      pastGifts: ["Scroll of Proverbs", "Quill"]
    }
  };

  guests.BRUTUS = {
    title: "Senator",
    region: "Rome",
    dietaryPreference: "Vegan",
    pastGifts: ["Silver Dagger", "Marble Bust"]
  };

  guests.CICERO.pastGifts.push("Golden Lyre");

  const antonyRegion = guests.ANTONY.region;

  delete guests.CICERO;

  const generalProfile = guests.ANTONY;
generalProfile.region = "Egypt";