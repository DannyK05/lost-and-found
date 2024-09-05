import { z } from "zod";

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

export const signupFormSchema = z.object({
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
  password: z.string().min(1, { message: "Required" }),
  confirmPassword: z.string().min(1, { message: "Required" }),
});

export const FoundItemFormSchema = z.object({
  title: z.string().min(1, { message: "Required" }),
  foundAt: z.string().min(1, { message: "Required" }),
  uniqueIdentifier: z.string(),
  foundDate: z.date({ message: "Required" }),
  category: z.string().min(1, { message: "Required" }),
  description: z
    .string()
    .min(1, { message: "Required" })
    .max(60, { message: "Limit of 60 characters" }),
});

export const LostItemFormSchema = z.object({
  title: z.string().min(1, { message: "Required" }),
  lostAt: z.string().min(1, { message: "Required" }),
  uniqueIdentifier: z.string(),
  lostDate: z.date({ message: "Required" }),
  category: z.string().min(1, { message: "Required" }),
  description: z
    .string()
    .min(1, { message: "Required" })
    .max(60, { message: "Limit of 60 characters" }),
});
