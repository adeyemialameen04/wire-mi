"use client"
import * as React from "react"
import { cn } from "@/lib/utils"

import Image from "next/image"

const services = [{
  title: "Savings",
  tagline: "We help you save to achieve your goal",
  img: "piggybank.png"
}, {
  title: "Remittance",
  tagline: "Send money across borders seamlessly.",
  img: "money.png"
}, {
  title: "Virtual cards",
  tagline: "Experience secure, flexible spending with Wiremi cards",
  img: "small-virtual-card.png"
}, {
  title: "Escrow",
  tagline: "Hold funds until third party meets your terms",
  img: "escrow.png"
}, {
  title: "Crowdfunding",
  tagline: "Unlock investment opportunities like never before",
  img: "coin.png"
}, {
  title: "B2B transactions",
  tagline: "Make business payments fast, secure and seamless",
  img: "b2b.png"
},]


const ServicesModal = () => {

  return (
    <div className="bg-green-400  w-full">
      <ul className="grid gap-3 p-6 lg:grid-cols-[.75fr_1fr] z-[10]">
        {
          services.map((item) => (
            <ListItem href="/docs" title={item.title} key={item.title} img={item.img}>
              {item.tagline}
            </ListItem>
          ))
        }
      </ul>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, img, children, ...props }, ref) => {
  return (
    <li>
      <div>
        <a
          ref={ref}
          className={cn(
            "block bg-[#EEF4FF] select-none space-y-1 rounded-md py-4 px-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex gap-2">
            <div className="p-2 bg-white rounded-full flex items-center justify-center">
              <Image src={`/${img}`} height={40} width={40} alt="" className="object-cover" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm text-[#105CE2] font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-[#57686F]">
                {children}
              </p>
            </div>
          </div>
        </a>
      </div>
    </li>
  )
})
export default ServicesModal
ListItem.displayName = "ListItem"
