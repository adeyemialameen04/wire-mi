import Image from "next/image";
import SectionHeader from "./section-header";

export default function PageHero({
  title,
  desc,
}: { title: string; desc: string }) {
  return (
    <div className="relative text-white w-full overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0149A9] to-[#2A94F4]" />
      <Image
        src={"/boxes-3.png"}
        alt="Boxex"
        height={244}
        width={209}
        className="absolute object-cover"
      />
      <Image
        src={"/boxes-3.png"}
        alt="Boxex"
        height={244}
        width={209}
        className="absolute object-cover right-0"
      />
      {/* <div */}
      {/* 	style={{ */}
      {/* 		backgroundImage: "url(/boxes-3.png)", */}
      {/* 		backgroundSize: "cover", */}
      {/* 		backgroundPosition: "center", */}
      {/* 		backgroundRepeat: "no-repeat", */}
      {/* 	}} */}
      {/* 	className="absolute top-8 left-0 h-full w-full" */}
      {/* /> */}
      <div className="relative container mx-auto px-6 text-center z-[2] flex flex-col items-center">
        <SectionHeader className="text-white">{title}</SectionHeader>
        <h1 className="text-4xl md:text-5xl font-bold mb-3 font-recoleta-md">
          {desc}
        </h1>
      </div>
    </div>
  );
}
