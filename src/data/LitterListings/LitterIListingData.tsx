// isabella photos
import Isabella5w1 from "../../assets/images/litter-images/litter-i/Isabella/photos/8weeks/Isabella1.jpeg";
import Isabella5w2 from "../../assets/images/litter-images/litter-i/Isabella/photos/8weeks/Isabella2.jpeg";
import Isabella5w3 from "../../assets/images/litter-images/litter-i/Isabella/photos/8weeks/Isabella3.jpeg";
import Isabella5w4 from "../../assets/images/litter-images/litter-i/Isabella/photos/8weeks/Isabella4.jpeg";
import Isabella5w5 from "../../assets/images/litter-images/litter-i/Isabella/photos/8weeks/Isabella5.jpeg";



export const LitterIListingData = [
  {
    name: "Isabella",
    gender: "Female",
    color: "Calico",
    birthday: "10/22/2025",
    availability: "Reserved",
    path: "isabella",
    litterName: "I",
    images: [
      {
        original: Isabella5w1,
        thumbnail: Isabella5w1,
        comment: "8weeks",
      },
      {
        original: Isabella5w2,
        thumbnail: Isabella5w2,
        comment: "8weeks",
      },
      {
        original: Isabella5w3,
        thumbnail: Isabella5w3,
        comment: "8weeks",
      },
      {
        original: Isabella5w4,
        thumbnail: Isabella5w4,
        comment: "8weeks",
      },
      {
        original: Isabella5w5,
        thumbnail: Isabella5w5,
        comment: "8weeks",
      },
    ],
  }
];

const getLitterIListingData = () => {
  return LitterIListingData;
};

export { getLitterIListingData };
