import { z } from "zod";

export const FoundItemFormSchema = z.object({
  title: z.string().min(1, { message: "This field is required" }),
  foundAt: z.string().min(1, { message: "This field is required" }),
  uniqueIdentifier: z.string(),
  foundDate: z.string({ message: "This field is required" }),
  category: z.string().min(1, { message: "This field is required" }),
  description: z
    .string()
    .min(1, { message: "This field is required" })
    .max(60, { message: "Limit of 60 characters" }),
  itemBrand: z.string().optional(),
  color: z.string().optional(),
  image: z
    .any()
    .refine((files) => files instanceof FileList && files.length > 0, {
      message: "Image is required",
    }),
});
