"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import SectionHeader from "@/_components/section-header";

const formSchema = z.object({
	firstName: z.string().min(2, "First name must be at least 2 characters"),
	lastName: z.string().min(2, "Last name must be at least 2 characters"),
	email: z.string().email("Invalid email address"),
	message: z.string().min(10, "Message must be at least 10 characters"),
	privacy: z.boolean().refine((val) => val === true, {
		message: "You must agree to the privacy policy",
	}),
});

export default function ContactForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			message: "",
			privacy: false,
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<div className="container py-12">
			<div className="mb-5">
				<SectionHeader className="text-[#105CE2]">Contact us</SectionHeader>

				<h5 className="font-recoleta-alt-sb font-semibold text-2xl text-[#00091E]">
					Send us a message <span className="text-[#105CE2]">today</span> or
					give us a call
				</h5>
				<p className="text-[#57686F]">
					We’d love to hear from you. Please fill out this form below, send us
					and email or give us a call.
				</p>
			</div>
			<div className="grid md:grid-cols-2 gap-12 items-start">
				{/* Contact Information */}
				<div className="space-y-8">
					<div className="space-y-2">
						<Mail className="w-6 h-6 text-[#105CE2]" />
						<h2 className="text-xl font-semibold text-[#101828]">Email</h2>
						<p className="text-muted-foreground">
							Our friendly team is here to help.
						</p>
						<a
							href="mailto:contact@wiremi.a"
							className="text-[#105CE2] hover:underline flex items-center gap-2"
						>
							contact@wiremi.a
						</a>
					</div>

					<div className="space-y-2">
						<MapPin className="w-6 h-6 text-[#105CE2]" />
						<h2 className="text-xl font-semibold text-[#101828]">Office</h2>
						<p className="text-muted-foreground">
							Come say hello at our office HQ.
						</p>
						<div className="flex items-start gap-2">
							<MapPin className="w-4 h-4 mt-1 text-[#105CE2]" />
							<div>
								<p className="text-[#105CE2]">21 King Street West, Hamilton</p>
								<p className="text-[#105CE2]">L8P4W7 Ontario, Canada.</p>
							</div>
						</div>
					</div>

					<div className="space-y-2">
						<Phone className="w-6 h-6 text-[#105CE2]" />
						<h2 className="text-xl font-semibold text-[#101828]">Phone</h2>
						<p className="text-muted-foreground">Mon-Fri from 8am to 5pm.</p>
						<div className="space-y-1">
							<a
								href="tel:+12897884976"
								className="text-[#105CE2] hover:underline flex items-center gap-2"
							>
								+1 289 7884 976
							</a>
							<a
								href="tel:+12897884976"
								className="text-[#105CE2] hover:underline flex items-center gap-2"
							>
								+1 289 7884 976
							</a>
						</div>
					</div>
				</div>

				{/* Contact Form */}
				<div className="bg-white md:p-6 rounded-lg shadow-sm">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
							<div className="grid md:grid-cols-2 gap-4">
								<FormField
									control={form.control}
									name="firstName"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input placeholder="First name" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="lastName"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input placeholder="Last name" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder="you@company.com"
												type="email"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Textarea
												placeholder="Message"
												className="min-h-[120px]"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="privacy"
								render={({ field }) => (
									<FormItem className="flex flex-row items-start space-x-3 space-y-0">
										<FormControl>
											<Checkbox
												checked={field.value}
												onCheckedChange={field.onChange}
											/>
										</FormControl>
										<div className="space-y-1 leading-none">
											<p className="text-sm text-muted-foreground">
												You agree to our friendly{" "}
												<a href="#" className="text-[#105CE2] hover:underline">
													privacy policy
												</a>
												.
											</p>
										</div>
									</FormItem>
								)}
							/>

							<Button
								type="submit"
								className="w-full bg-blue-600 hover:bg-blue-700"
							>
								Send message
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
}
