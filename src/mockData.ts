import { Penguin, PenguinFact } from './types/penguin';

export const penguins: Penguin[] = [
  {
    id: 1,
    name: "Emperor Penguin",
    scientificName: "Aptenodytes forsteri",
    description: "The Emperor Penguin is the tallest and heaviest of all living penguin species and is endemic to Antarctica.",
    habitat: "Antarctic coast",
    imageUrl: "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7",
    height: "100-130 cm",
    weight: "22-45 kg",
    population: "~250,000 breeding pairs"
  },
  {
    id: 2,
    name: "King Penguin",
    scientificName: "Aptenodytes patagonicus",
    description: "The King Penguin is the second largest species of penguin, standing at about 90 cm tall.",
    habitat: "Sub-Antarctic islands",
    imageUrl: "https://images.unsplash.com/photo-1540820658-1b95a5a728c5",
    height: "85-95 cm",
    weight: "11-16 kg",
    population: "~2 million breeding pairs"
  },
  {
    id: 3,
    name: "Gentoo Penguin",
    scientificName: "Pygoscelis papua",
    description: "Known for their bright orange-red bill and distinctive white stripe across their head.",
    habitat: "Antarctic Peninsula and Sub-Antarctic islands",
    imageUrl: "https://images.unsplash.com/photo-1560797117-659b8064e523",
    height: "75-90 cm",
    weight: "4.5-8.5 kg",
    population: "~387,000 breeding pairs"
  }
];

export const facts: PenguinFact[] = [
  {
    id: 1,
    title: "Swimming Experts",
    description: "Penguins can swim at speeds up to 22 mph!",
    icon: "🏊‍♂️"
  },
  {
    id: 2,
    title: "Deep Divers",
    description: "Emperor penguins can dive up to 565 meters deep.",
    icon: "🏊‍♂️"
  },
  {
    id: 3,
    title: "Social Birds",
    description: "Penguins form large colonies called rookeries.",
    icon: "👥"
  }
];
