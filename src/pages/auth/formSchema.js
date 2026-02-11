import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field is required" })
    .email("This is not a valid email address")
    .regex(/^[a-zA-Z0-9._%+-]+@student\.oauife\.edu\.ng$/, {
      message: "Email must be OAU student mail",
    }),

  password: z.string().min(1, { message: "This field is required" }),
});

export const signupFormSchema = z
  .object({
    firstName: z.string().min(1, { message: "This field is required" }),
    lastName: z.string().min(1, { message: "This field is required" }),
    email: z
      .string()
      .min(1, { message: "This field is required" })
      .regex(
        /^[a-zA-Z0-9._%+-]+@student\.oauife\.edu\.ng$/,
        "Must be OAU student email",
      )
      .email("This is not a valid email address"),
    phoneNumber: z
      .string()
      .min(1, { message: "This field is required" })
      .max(11, { message: "phone not valid" }),
    password: z.string().min(1, { message: "This field is required" }),
    confirmPassword: z.string().min(1, { message: "This field is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
