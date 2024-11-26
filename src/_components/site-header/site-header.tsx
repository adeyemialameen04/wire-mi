"use client"
import { Button } from "@/components/ui/button";
import { slugify } from "@/lib/helpers";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ServicesModal from "./services";
import MobileNav from "./mobile-header";


export const menu_list = [
  "About us",
  "Services",
  "Plans & Pricing",
  "News",
  "Contact",
];

const SiteHeader = () => {
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const servicesModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseEnter = () => setIsServicesModalOpen(true);
    const handleMouseLeave = (event: MouseEvent) => {
      // Check if the mouse is still within the button or modal
      const isStillInside =
        servicesButtonRef.current?.contains(event.relatedTarget as Node) ||
        servicesModalRef.current?.contains(event.relatedTarget as Node);

      if (!isStillInside) {
        setIsServicesModalOpen(false);
      }
    };

    const button = servicesButtonRef.current;
    if (button) {
      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);


  return (
    <header className="bg-[#0149A9] py-4 relative">
      <div className="flex flex-col container gap-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <Image
              src={"/white-logo.png"}
              height={44}
              width={140}
              alt="WireMi Logo"
            />
          </div>
          <nav className="items-center gap-4 text-white font-light hidden md:flex">
            {menu_list.map((link) => (
              <React.Fragment key={link}>
                {link !== "Services" ? (
                  <Link href={`/${link.toLowerCase() === "contact" ? "contact-us" : slugify(link)}`}>{link}</Link>
                ) : (
                  <>
                    <Button
                      ref={servicesButtonRef}
                      variant={"ghost"}
                      className="!bg-transparent p-0 hidden lg:flex"
                    >
                      {link}
                    </Button>
                    <Button
                      variant={"ghost"}
                      className="!bg-transparent p-0 lg:hidden"
                    >
                      {link}
                    </Button>
                  </>
                )}
              </React.Fragment>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Button variant={"primary"} className="rounded-full">Sign in</Button>
            <Button className="rounded-full bg-white text-[#105CE2] hover:text-white hover:bg-[#105CE2] transition-colors duration-300 px-6 lg:flex hidden">
              Get started
            </Button>
          </div>
          <MobileNav />
          {/* <div className="flex md:hidden"> */}
          {/*   <Menu className="h-6 w-6" /> */}
          {/* </div> */}
        </div>
        <ServicesModal
          isOpen={isServicesModalOpen}
          onMouseEnter={() => setIsServicesModalOpen(true)}
          onMouseLeave={() => setIsServicesModalOpen(false)}
        />
      </div>
    </header>
  );
};

export default SiteHeader;
