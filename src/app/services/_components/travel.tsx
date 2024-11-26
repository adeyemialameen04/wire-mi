import SectionHeader from "@/_components/section-header";
import { Verified } from "lucide-react";
import Image from "next/image";

export default function Travel() {
  const unorderedList = ["Fast booking", "Super experience", "Secure", "Easy to navigate"]
  return <section className="my-12 container py-12 flex flex-col md:flex-row items-center justify-between gap-8" id="travel">
    <div className="flex flex-col gap-3">
      <SectionHeader className="text-[#105CE2]">Travel</SectionHeader>
      <h5 className="font-recoleta-alt-sb font-semibold text-2xl text-[#00091E]">
        Book your flights conveniently and seamlessly using our <span className="text-[#105CE2]">travel</span> module today
      </h5>
      <p className="text-[#57686F]">
        Enjoy all of these and even more when you use our travel feature on the app or web
      </p>
      <ul className="flex flex-col gap-1 my-4">
        {unorderedList.map((item) => (
          <li
            className="flex items-center gap-2 text-[#57686F]"
            key={item}
          >
            <div className="p-2 rounded-full bg-white">
              <Verified className="h-4 w-4 text-[#105CE2]" />
            </div>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="relative rounded-lg overflow-hidden">
      <Image src="/3d-travel-icon-with-airplane.jpg" height={690} width={960} alt="Plane flying" className="object-cover" />
    </div>
  </section>
}
