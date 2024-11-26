import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GetApp from "./get-app";
import siteConfig from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    {
      title: "Quick links",
      links: [
        { title: "About us", href: "about-us" },
        { title: "Services", href: "services" },
        { title: "News", href: "news" },
        { title: "Plans", href: "plans-pricing" }],
    },
    {
      title: "Services",
      links: [{ title: "Invest", href: "services#invest" }, { title: "Save", href: "services#savings" }, { title: "Flight", href: "travel" }, { title: "Escrow", href: "services#escrow" }],
    },
    {
      title: "Support",
      links: [{ title: "Contact us", href: "contact-us" }, { title: "FAQs", href: "contact-us#faqs" }, { title: "Privacy policy", href: "privacy-policy" }, { title: "Terms & conditions", href: "terms-conditions" }],
    },
  ];

  const socials = [
    {
      icon: <Instagram className="w-4 h-4" />,
      link: "https://instagram.com/wiremi",
    },
    {
      icon: <Twitter className="w-4 h-4" />,
      link: "https://x.com/wiremi",
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      link: "https://linkedin.com/wiremi",
    },
  ];

  const addresses = [
    "Fortress Algo Inc. Doing business as Wiremi is registered and incorporated in Canada Registry ID number 4363756",
    "Fortress Algo Inc. Doing business as Wiremi is registered &Regulated by the Financial Transactions and Reports",
    "Analysis Center of Canada (FINTRAC) as MBS (Money Service Business) License number M23401666.",
  ];

  return (
    <footer className="bg-[#0149A9] py-12">
      <div className="flex flex-col container">
        <div className="flex justify-between flex-col md:flex-row items-start gap-2">
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-2xl md:text-3xl">
              Sign up for our newsletter
            </h3>
            <small>
              Be the first to know about releases and industry news and
              insights.
            </small>
          </div>
          <form className="flex gap-3">
            <Input placeholder="Enter your email address" />
            <Button className="!bg-[#F9F9F966] text-white" type="submit">
              Submit
            </Button>
          </form>
        </div>
        <Separator className="bg-white mt-4" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-7 justify-between">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link href={"/"}>
                <Image
                  src="/white-logo.png"
                  alt="Logo"
                  width={140}
                  height={40}
                />
              </Link>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>
                  21 King Street West, Hamilton L8P4W7 Ontario, Canada.
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:contact@wiremi.ca">contact@wiremi.ca</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+1 289 7884 976</span>
              </div>
            </div>
            <div className="flex space-x-3">
              {socials.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  className="p-2 bg-[#F9F9F966] rounded-full"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {quickLinks.map((item) => (
              <div key={item.title}>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <ul className="space-y-1">
                  {item.links.map((link, index) => (
                    <li key={link.title + index}>
                      <Link
                        href={`/${link.href}`}
                        // href={`/${item.title.toLowerCase() === "services" ? "services#" : ""}${link.href === "contact-us#faqs" ? "#" : ""}${slugify(link?.href ? link?.href : link.title)}`}
                        // href={`/${slugify(typeof link === 'string' ? link : (link.href || link.title))}`}
                        className="font-light">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="gap-4 flex flex-col max-w-[230px]">
            <p className="font-bold text-xl">Get our app</p>
            <GetApp />
          </div>
        </div>
        <Separator className="bg-white my-4" />
        <div className="flex justify-between flex-col md:flex-row gap-5">
          <div className="flex flex-col gap-2">
            {addresses.map((address) => (
              <p className="text-sm font-light" key={address}>
                {address}
              </p>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <Link href={"/privacy-policy"} className="text-white underline">
              Privacy Policy
            </Link>
            <p className="text-sm">
              <b>
                &copy; {currentYear} {siteConfig.title}.
              </b>
              {"  "}
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
