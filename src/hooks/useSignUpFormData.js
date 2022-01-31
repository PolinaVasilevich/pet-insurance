export const useSignUpFormData = (currentStep) => {
  const signUpFormData = [
    { id: 1, title: "What Is Your Pet's Name?", subTitle: "" },
    {
      id: 2,
      title: "Your pet is...",
    },

    {
      id: 3,

      title: `What breed of your pet?`,
      subTitle: "Different breeds have different needs",
    },
    {
      id: 4,
      title: "Tell Us About The Human",
      subTitle:
        "Someone's got to pay the bills. Share your name and email to get you personalized recommendation!",
    },
  ];

  return signUpFormData[currentStep - 1];
};
