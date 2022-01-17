import * as Yup from "yup";

export const validationSchema = [
  Yup.object().shape({
    pets: Yup.array().of(
      Yup.object().shape({
        petName: Yup.string().required("Name is required"),
      })
    ),
  }),

  Yup.object().shape({
    pets: Yup.array().of(
      Yup.object().shape({
        petKind: Yup.string().required("Kind is required"),
      })
    ),
  }),

  Yup.object().shape({
    pets: Yup.array().of(
      Yup.object().shape({
        username: Yup.string()
          .min(3, "Username must be more than 3 characters")
          .required("Required"),
        password: Yup.string()
          .min(3, "Password must be more than 3 characters")
          .required("Required"),
      })
    ),
  }),
];
