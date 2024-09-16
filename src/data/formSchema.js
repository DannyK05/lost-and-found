import { z } from "zod";

const imageSchema = z
  .any()
  .refine((files) => files instanceof FileList && files.length > 0, {
    message: "Image is required",
  });

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Required" })
    .email("This is not a valid email address")
    .regex(/^[a-zA-Z0-9._%+-]+@student\.oauife\.edu\.ng$/, {
      message: "Email must be OAU student mail",
    }),

  password: z.string().min(1, { message: "Required" }),
});

export const signupFormSchema = z
  .object({
    firstName: z.string().min(1, { message: "Required" }),
    lastName: z.string().min(1, { message: "Required" }),
    email: z
      .string()
      .min(1, { message: "Required" })
      .regex(
        /^[a-zA-Z0-9._%+-]+@student\.oauife\.edu\.ng$/,
        "Must be OAU student email"
      )
      .email("This is not a valid email address"),
    phoneNumber: z
      .string()
      .min(1, { message: "Required" })
      .max(11, { message: "phone not valid" }),
    password: z.string().min(1, { message: "Required" }),
    confirmPassword: z.string().min(1, { message: "Required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const FoundItemFormSchema = z.object({
  title: z.string().min(1, { message: "Required" }),
  foundAt: z.string().min(1, { message: "Required" }),
  uniqueIdentifier: z.string(),
  foundDate: z.string({ message: "Required" }),
  category: z.string().min(1, { message: "Required" }),
  description: z
    .string()
    .min(1, { message: "Required" })
    .max(60, { message: "Limit of 60 characters" }),
  itemBrand: z.string().optional(),
  color: z.string().optional(),
  image: imageSchema,
});

export const LostItemFormSchema = z.object({
  title: z.string().min(1, { message: "Required" }),
  lostAt: z.string().min(1, { message: "Required" }),
  uniqueIdentifier: z.string(),
  lostDate: z.string({ message: "Required" }),
  category: z.string().min(1, { message: "Required" }),
  description: z
    .string()
    .min(1, { message: "Required" })
    .max(60, { message: "Limit of 60 characters" }),
  itemBrand: z.string().optional(),
  color: z.string().optional(),
  image: imageSchema,
});
