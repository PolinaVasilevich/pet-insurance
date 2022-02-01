export const useBreedsPet = () => {
  const breedsPet = [
    { id: 1, value: "Mixed Breed", label: "Mixed Breed" },
    { id: 2, value: "Abyssinian", label: "Abyssinian" },
    { id: 3, value: "Alley Cat", label: "Alley Cat" },
    { id: 4, value: "American Curl", label: "American Curl" },
    { id: 5, value: "Mixed Breed", label: "Mixed Breed" },
    { id: 6, value: "Abyssinian", label: "Abyssinian" },
    { id: 7, value: "Alley Cat", label: "Alley Cat" },
    { id: 8, value: "American Curl", label: "American Curl" },
  ];

  const petsInfo = [
    {
      id: 1,
      type: "cat",
      breeds: [
        { id: 1, value: "Mixed Breed", label: "Mixed Breed" },
        { id: 2, value: "Abyssinian", label: "Abyssinian" },
        { id: 3, value: "Alley Cat", label: "Alley Cat" },
        { id: 4, value: "American Curl", label: "American Curl" },
        { id: 5, value: "Mixed Breed", label: "Mixed Breed" },
        { id: 6, value: "Abyssinian", label: "Abyssinian" },
        { id: 7, value: "Alley Cat", label: "Alley Cat" },
        { id: 8, value: "American Curl", label: "American Curl" },
      ],
    },

    {
      id: 2,
      type: "dog",
      breeds: [
        { id: 1, value: "Alano Espanol", label: "Alano Espanol" },
        { id: 2, value: "Akita", label: "Akita" },
        {
          id: 3,
          value: "American Cocker Spaniel",
          label: "American Cocker Spaniel",
        },
        { id: 4, value: "Ariegoeis", label: "Ariegoeis" },
        { id: 5, value: "Mixed Breed", label: "Mixed Breed" },
        {
          id: 6,
          value: "Labrador Retriever - Yellow",
          label: "Labrador Retriever - Yellow",
        },
        { id: 7, value: "Leonberger", label: "Leonberger" },
      ],
    },
  ];
  return breedsPet;
};
