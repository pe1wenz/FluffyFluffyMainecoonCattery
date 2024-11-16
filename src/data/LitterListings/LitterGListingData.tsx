// gemma photos
import Gemma7w1 from "../../assets/images/litter-images/litter-g/Gemma/photos/7weeks/Gemma1.jpeg";
import Gemma7w2 from "../../assets/images/litter-images/litter-g/Gemma/photos/7weeks/Gemma2.jpeg";
import Gemma7w3 from "../../assets/images/litter-images/litter-g/Gemma/photos/7weeks/Gemma3.jpeg";
import Gemma7w4 from "../../assets/images/litter-images/litter-g/Gemma/photos/7weeks/Gemma4.jpeg";

// gizmo photos
import Gizmo7w1 from "../../assets/images/litter-images/litter-g/Gizmo/photos/7weeks/Gizmo1.jpeg";
import Gizmo7w2 from "../../assets/images/litter-images/litter-g/Gizmo/photos/7weeks/Gizmo2.jpeg";
import Gizmo7w3 from "../../assets/images/litter-images/litter-g/Gizmo/photos/7weeks/Gizmo3.jpeg";
import Gizmo7w4 from "../../assets/images/litter-images/litter-g/Gizmo/photos/7weeks/Gizmo4.jpeg";

// gusto photos
import Gusto7w1 from "../../assets/images/litter-images/litter-g/Gusto/photos/7weeks/Gusto1.jpeg";
import Gusto7w2 from "../../assets/images/litter-images/litter-g/Gusto/photos/7weeks/Gusto2.jpeg";
import Gusto7w3 from "../../assets/images/litter-images/litter-g/Gusto/photos/7weeks/Gusto3.jpeg";
import Gusto7w4 from "../../assets/images/litter-images/litter-g/Gusto/photos/7weeks/Gusto4.jpeg";

// glida photos
import Glida7w1 from "../../assets/images/litter-images/litter-g/Glida/photos/7weeks/Glida1.jpeg";
import Glida7w2 from "../../assets/images/litter-images/litter-g/Glida/photos/7weeks/Glida2.jpeg";
import Glida7w3 from "../../assets/images/litter-images/litter-g/Glida/photos/7weeks/Glida3.jpeg";
import Glida7w4 from "../../assets/images/litter-images/litter-g/Glida/photos/7weeks/Glida4.jpeg";

export const LitterGListingData = [
  {
    name: "Gemma",
    gender: "Female",
    color: "Brown Tabby",
    birthday: "07/11/2024",
    availability: "Sold",
    path: "gemma",
    litterName: "G",
    images: [
      {
        original: Gemma7w1,
        thumbnail: Gemma7w1,
        comment: "7weeks",
      },
      {
        original: Gemma7w2,
        thumbnail: Gemma7w2,
        comment: "7weeks",
      },
      {
        original: Gemma7w3,
        thumbnail: Gemma7w3,
        comment: "7weeks",
      },
      {
        original: Gemma7w4,
        thumbnail: Gemma7w4,
        comment: "7weeks",
      },
    ],
  },
  {
    name: "Gizmo",
    gender: "Male",
    color: "Black Smoke",
    birthday: "07/11/2024",
    availability: "Sold",
    path: "gizmo",
    litterName: "G",
    images: [
      {
        original: Gizmo7w1,
        thumbnail: Gizmo7w1,
        comment: "7weeks",
      },
      {
        original: Gizmo7w2,
        thumbnail: Gizmo7w2,
        comment: "7weeks",
      },
      {
        original: Gizmo7w3,
        thumbnail: Gizmo7w3,
        comment: "7weeks",
      },
      {
        original: Gizmo7w4,
        thumbnail: Gizmo7w4,
        comment: "7weeks",
      },
    ],
  },
  {
    name: "Gusto",
    gender: "Male",
    color: "Brown Tabby",
    birthday: "07/11/2024",
    availability: "Sold",
    path: "gusto",
    litterName: "G",
    images: [
      {
        original: Gusto7w1,
        thumbnail: Gusto7w1,
        comment: "7weeks",
      },
      {
        original: Gusto7w2,
        thumbnail: Gusto7w2,
        comment: "7weeks",
      },
      {
        original: Gusto7w3,
        thumbnail: Gusto7w3,
        comment: "7weeks",
      },
      {
        original: Gusto7w4,
        thumbnail: Gusto7w4,
        comment: "7weeks",
      },
    ],
  },
  {
    name: "Glida",
    gender: "Female",
    color: "Silver Tabby",
    birthday: "07/11/2024",
    availability: "Sold",
    path: "glida",
    litterName: "G",
    images: [
      {
        original: Glida7w1,
        thumbnail: Glida7w1,
        comment: "7weeks",
      },
      {
        original: Glida7w2,
        thumbnail: Glida7w2,
        comment: "7weeks",
      },
      {
        original: Glida7w3,
        thumbnail: Glida7w3,
        comment: "7weeks",
      },
      {
        original: Glida7w4,
        thumbnail: Glida7w4,
        comment: "7weeks",
      },
    ],
  },
];

const getLitterGListingData = () => {
  return LitterGListingData;
};

export { getLitterGListingData };
