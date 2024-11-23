import GetApp from "@/_components/get-app";
import SectionHeader from "@/_components/section-header";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function RemittanceServices() {
  return (
    <section className={cn("py-20 border-t border-t-transparent text-black")}>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:flex-row">
        <div className={cn("flex flex-col gap-4", "order-1 md:order-2")}>
          <SectionHeader className="text-[#105CE2]">
            Remittance services
          </SectionHeader>
          <h4 className="font-recoleta-alt-sb mb-4 font-semibold text-[28px]">
            Send money <span className="text-[#105CE2]">across</span> borders
            seamlessly, securely and effectively.
          </h4>
          <p className="font-light text-xl text-[#57686F]">
            We understand that sending money across borders should be seamless,
            secure, and cost-effective. Our remittance service empowers
            individuals and businesses to send funds globally with ease.
          </p>
          <p className="font-light text-xl text-[#57686F]">
            Instant Transfers: Enjoy real-time transactions that allow you to
            send and receive money instantly, no matter where you are.
            Competitive Rates: We offer some of the lowest fees in the market,
            ensuring that more of your money reaches your intended recipient.
            Multi-Currency Support: Send and receive funds in various
            currencies, making international transactions straightforward and
            hassle-free. Secure Transactions: Your security is our priority. Our
            platform uses advanced encryption and fraud detection measures to
            keep your money safe. User-Friendly Interface: Our intuitive app and
            website make it easy to navigate, track your transactions, and
            manage your funds from anywhere.
          </p>

          <GetApp className="w-fit sm:flex-row mt-4" />
        </div>
        <div className={cn("order-2 md:order-1")}>
          <Image
            className="rounded-lg"
            height={550}
            width={367}
            alt="An Image of a screen displaying Send Money"
            src={`/remittance.png`}
          />
        </div>
      </div>
    </section>
  );
}
