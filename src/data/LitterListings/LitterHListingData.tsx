// honeybun photos
import Honeybun5w1 from "../../assets/images/litter-images/litter-h/Honeybun/photos/5weeks/Honeybun1.jpeg";
import Honeybun5w2 from "../../assets/images/litter-images/litter-h/Honeybun/photos/5weeks/Honeybun2.jpeg";
import Honeybun5w3 from "../../assets/images/litter-images/litter-h/Honeybun/photos/5weeks/Honeybun3.jpeg";
import Honeybun5w4 from "../../assets/images/litter-images/litter-h/Honeybun/photos/5weeks/Honeybun4.jpeg";

// hazelnut photos
import Hazelnut5w1 from "../../assets/images/litter-images/litter-h/Hazelnut/photos/5weeks/Hazelnut1.jpeg";
import Hazelnut5w2 from "../../assets/images/litter-images/litter-h/Hazelnut/photos/5weeks/Hazelnut2.jpeg";
import Hazelnut5w3 from "../../assets/images/litter-images/litter-h/Hazelnut/photos/5weeks/Hazelnut3.jpeg";
import Hazelnut5w4 from "../../assets/images/litter-images/litter-h/Hazelnut/photos/5weeks/Hazelnut4.jpeg";

// hairball photos
import Hairball5w1 from "../../assets/images/litter-images/litter-h/Hairball/photos/5weeks/Hairball1.jpeg";
import Hairball5w2 from "../../assets/images/litter-images/litter-h/Hairball/photos/5weeks/Hairball2.jpeg";
import Hairball5w3 from "../../assets/images/litter-images/litter-h/Hairball/photos/5weeks/Hairball3.jpeg";
import Hairball5w4 from "../../assets/images/litter-images/litter-h/Hairball/photos/5weeks/Hairball4.jpeg";

// hufflepuff photos
import Hufflepuff5w1 from "../../assets/images/litter-images/litter-h/Hufflepuff/photos/5weeks/Hufflepuff1.jpeg";
import Hufflepuff5w2 from "../../assets/images/litter-images/litter-h/Hufflepuff/photos/5weeks/Hufflepuff2.jpeg";
import Hufflepuff5w3 from "../../assets/images/litter-images/litter-h/Hufflepuff/photos/5weeks/Hufflepuff3.jpeg";
import Hufflepuff5w4 from "../../assets/images/litter-images/litter-h/Hufflepuff/photos/5weeks/Hufflepuff4.jpeg";

export const LitterHListingData = [
  {
    name: "Honeybun",
    gender: "Male",
    color: "Red Tabby",
    birthday: "01/05/2025",
    availability: "Reserved",
    path: "honeybun",
    litterName: "H",
    images: [
      {
        original: Honeybun5w1,
        thumbnail: Honeybun5w1,
        comment: "5weeks",
      },
      {
        original: Honeybun5w2,
        thumbnail: Honeybun5w2,
        comment: "5weeks",
      },
      {
        original: Honeybun5w3,
        thumbnail: Honeybun5w3,
        comment: "5weeks",
      },
      {
        original: Honeybun5w4,
        thumbnail: Honeybun5w4,
        comment: "5weeks",
      },
    ],
  },
  {
    name: "Hazelnut",
    gender: "Male",
    color: "Red Tabby",
    birthday: "01/05/2025",
    availability: "Available",
    path: "hazelnut",
    litterName: "G",
    images: [
      {
        original: Hazelnut5w1,
        thumbnail: Hazelnut5w1,
        comment: "5weeks",
      },
      {
        original: Hazelnut5w2,
        thumbnail: Hazelnut5w2,
        comment: "5weeks",
      },
      {
        original: Hazelnut5w3,
        thumbnail: Hazelnut5w3,
        comment: "5weeks",
      },
      {
        original: Hazelnut5w4,
        thumbnail: Hazelnut5w4,
        comment: "5weeks",
      },
    ],
  },
  {
    name: "Hairball",
    gender: "Male",
    color: "Red & White",
    birthday: "01/05/2025",
    availability: "Reserved",
    path: "hairball",
    litterName: "G",
    images: [
      {
        original: Hairball5w1,
        thumbnail: Hairball5w1,
        comment: "5weeks",
      },
      {
        original: Hairball5w2,
        thumbnail: Hairball5w2,
        comment: "5weeks",
      },
      {
        original: Hairball5w3,
        thumbnail: Hairball5w3,
        comment: "5weeks",
      },
      {
        original: Hairball5w4,
        thumbnail: Hairball5w4,
        comment: "5weeks",
      },
    ],
  },
  {
    name: "Hufflepuff",
    gender: "Male",
    color: "Cream & White",
    birthday: "01/05/2025",
    availability: "Available",
    path: "hufflepuff",
    litterName: "G",
    images: [
      {
        original: Hufflepuff5w1,
        thumbnail: Hufflepuff5w1,
        comment: "5weeks",
      },
      {
        original: Hufflepuff5w2,
        thumbnail: Hufflepuff5w2,
        comment: "5weeks",
      },
      {
        original: Hufflepuff5w3,
        thumbnail: Hufflepuff5w3,
        comment: "5weeks",
      },
      {
        original: Hufflepuff5w4,
        thumbnail: Hufflepuff5w4,
        comment: "5weeks",
      },
    ],
  },
];

const getLitterHListingData = () => {
  return LitterHListingData;
};

export { getLitterHListingData };
