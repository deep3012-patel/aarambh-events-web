import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80, "Name is too long."),
  phone: z.string().trim().min(7, "Please enter a valid phone number.").max(24, "Phone number is too long."),
  email: z.string().trim().email("Please enter a valid email address.").max(120, "Email is too long."),
  eventType: z.string().trim().min(1, "Please select an event type.").max(60),
  eventDate: z.string().trim().max(32),
  city: z.string().trim().min(2, "Please enter your city.").max(80, "City is too long."),
  message: z.string().trim().min(10, "Please share a little more about your event.").max(1200, "Message is too long."),
  website: z.string().max(0).optional(),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
