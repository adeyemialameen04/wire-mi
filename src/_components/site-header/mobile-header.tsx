
"use client";
import { Button } from "@/components/ui/button";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import siteConfig from "@/config/site";
import { slugify } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { Mountain } from "lucide-react";
import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { menu_list } from "./site-header";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <VisuallyHidden.Root>
        <DialogTitle>Search command</DialogTitle>
      </VisuallyHidden.Root>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="flex flex-col gap-4 pt-5 items-start pr-0"
      >
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <Mountain className="h-4 w-4 mr-2" />
          {siteConfig.title}
        </MobileLink>
        {menu_list.map((route) => (
          <Button variant="link" key={route} asChild onClick={() => setOpen(false)}>
            <Link
              href={`/${route.toLowerCase() === "contact" ? "contact-us" : slugify(route)}`}
              key={route}
              className="hover:text-foreground/80 text-foreground/60 transition-colors duration-150"
            >
              {route}
            </Link>
          </Button>
        ))}
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
