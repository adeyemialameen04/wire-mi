"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"
import { slugify } from "@/lib/helpers"

const services = [
  {
    title: "Savings",
    tagline: "We help you save to achieve your goal",
    img: "piggybank.png",
  },
  {
    title: "Remittance",
    tagline: "Send money across borders seamlessly.",
    img: "money.png"
  },
  {
    title: "Virtual cards",
    tagline: "Experience secure, flexible spending with Wiremi cards",
    img: "small-virtual-card.png"
  },
  {
    title: "Escrow",
    tagline: "Hold funds until third party meets your terms",
    img: "escrow.png"
  },
  {
    title: "Crowdfunding",
    tagline: "Unlock investment opportunities like never before",
    img: "coin.png"
  },
  {
    title: "B2B transactions",
    tagline: "Make business payments fast, secure and seamless",
    img: "b2b.png"
  },
]

const ServicesModal = ({ isOpen, onMouseEnter, onMouseLeave }: {
  isOpen: boolean,
  onMouseEnter?: () => void,
  onMouseLeave?: () => void
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute left-[4%] right-[4%] top-[3.5rem] mt-4 z-50 mx-auto !max-w-[1300px]"
        >
          <div className="bg-white rounded-lg shadow-lg w-full">
            <ul className="grid gap-3 p-6 lg:grid-cols-[1fr_.35fr] z-[10]">
              <div className="flex flex-col gap-5">
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-[#00091E]">Key Services</h3>
                  <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
                    {services.map((item) => (
                      <ListItem
                        href={`/services#${slugify(item.title.toLowerCase())}`}

                        title={item.title}
                        key={item.title}
                        img={item.img}
                      >
                        {item.tagline}
                      </ListItem>
                    ))}
                  </div>
                </div>

                <div className="relative text-white w-full overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#014a9a] to-[#2A94F4]" />
                  <div
                    style={{
                      backgroundImage: "url(/curly-bg.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="absolute inset-0 mix-blend-multiply opacity-[0.05]"
                    data-testid="banner"
                  />
                  <div className="px-4 py-7 flex items-center justify-between relative gap-4">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-lg font-semibold font-space-grotesk">
                        Unlock Your Payment Potential
                      </h3>
                      <p className="text-sm">
                        Create a free account today to explore our powerful features, or reach out to us for any inquires!
                      </p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Button variant={"primary"} size={"lg"}>
                        Create a free account
                      </Button>
                      <Button
                        size={"lg"}
                        className="text-[#014a91] bg-white hover:bg-[#105CE2] hover:text-white"
                      >
                        Create a free account
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="bg-white">
                <CardContent className="flex items-center justify-center relative">
                  <Image
                    src="/earth.png"
                    height={150}
                    width={150}
                    alt="An Image of Earth"
                  />
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  <h3 className="text-xl text-[#105CE2] font-semibold">
                    Special services offered
                  </h3>
                  <p className="text-[#798292] text-sm">
                    Wiremi facilitate transactions in various currencies, making it ideal for its users operating globally
                  </p>
                </CardFooter>
              </Card>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ListItem = ({ className, title, img, children, href }: { className?: string, title: string, img: string, children: React.ReactNode, href: string }) => {
  return (
    <li>
      <div>
        <a
          className={cn(
            "block bg-[#EEF4FF] select-none space-y-1 rounded-md py-4 px-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          href={href}
        >
          <div className="flex gap-2">
            <div className="p-2 bg-white rounded-full flex items-center justify-center">
              <Image src={`/${img}`} height={40} width={40} alt="" className="object-contain rounded-full" />
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
}


export default ServicesModal

