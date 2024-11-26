import GetApp from "@/_components/get-app";
import SectionHeader from "@/_components/section-header";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Verified } from "lucide-react";
import Image from "next/image";

// absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 p-6 flex flex-col justify-end
const plans = [
  [
    {
      name: "Regular savings",
      description:
        "Our regular saving is a powerful way to build financial stability and achieve your goals over time. By consistently setting aside a portion of your income, you gradually grow your savings without needing a large sum all at once",
    },
    {
      name: "Reccurent savings",
      description:
        "Wiremi’s recurrent saving is a smart and simple way to build financial security over time. By setting aside a fixed amount regularly, you can steadily grow your savings without even thinking about it",
    },
  ],
  [
    {
      name: "Block savings",
      description:
        "Block savings is a focused and strategic approach to building wealth by setting aside larger, lump-sum amounts periodically rather than small, frequent deposits",
    },

    {
      name: "Group savings",
      description:
        "To foster a sense of accountability and community, our group savings is a collaborative approach to saving where individuals come together to pool their resources for a common goal.",
    },
  ],
];
const unorderedList = [
  "Regular savings",
  "Recurrent savings",
  "Block savings",
  "Group savings",
];

export default function Savings() {
  return (
    <section className="py-16 bg-white relative" id="savings">
      <div className="container grid gap-8 grid-cols-1 md:grid-cols-2">
        <div className="flex-col flex justify-between order-1 md:order-2 md:place-self-end md:gap-20">
          <div className="flex flex-col gap-3">
            <SectionHeader className="text-[#105CE2]">Savings</SectionHeader>
            <h5 className="font-recoleta-alt-sb font-semibold text-2xl text-[#00091E]">
              With Wiremi, create a safety net that can save you from unexpected
              expenses
            </h5>
            <p className="text-[#57686F]">
              Our different savings module is easy and convenient for you to
              access.
            </p>
            <ul className="flex flex-col gap-3 my-4">
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
            <p className="text-2xl font-medium text-[#00091E]">
              Download the app and save today!
            </p>
          </div>
          <GetApp className="sm:flex-row" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 order-2 md:order-1">
          <div className="flex flex-col gap-4 md:gap-5 md:mt-16">
            {plans.map((planRow, rowIndex) => {
              return (
                <Card
                  className={cn(
                    "border-none shadow-lg",
                    "bg-white text-[#105CE2]",
                  )}
                  key={`left-${rowIndex}`}
                >
                  <CardHeader>
                    <Image
                      src={"/fi_1356698.png"}
                      height={50}
                      width={50}
                      alt="Check Icon"
                      className="mb-2"
                    />
                    <CardTitle className="text-xl font-normal text-[#105CE2]">
                      {planRow[0].name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2">
                    {planRow[0].description}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 md:gap-5">
            {plans.map((planRow, rowIndex) => {
              return (
                <Card
                  className={cn(
                    "border-none shadow-lg",
                    "bg-white text-[#105CE2]",
                  )}
                  key={`left-${rowIndex}`}
                >
                  <CardHeader>
                    <Image
                      src={"/fi_1356698.png"}
                      height={50}
                      width={50}
                      alt="Check Icon"
                      className="mb-2"
                    />
                    <CardTitle className="text-xl font-normal text-[#105CE2]">
                      {planRow[1].name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2">
                    {planRow[1].description}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
