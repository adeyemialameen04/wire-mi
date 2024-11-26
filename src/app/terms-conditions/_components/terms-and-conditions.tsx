import { termsAndConditions } from "@/data/t&c's";
import { Dot, Sparkles } from "lucide-react";

export default function TermsAndCondition() {
  return <section className="container flex flex-col gap-6 py-14 text-[#57686F]">
    <h1 className="flex items-center gap-3 text-[#00091E] font-semibold font-recoleta-alt-sb text-2xl"><Sparkles className="text-[#105CE2]" /> Terms & conditions</h1>
    <p>This Terms of Service (the &quot;Agreement&quot;) is a contract between you and Fortress Algo Inc., doing business as Wiremi (We). Wiremi offers digital banking services, including payments, remittances, savings, investments, cryptocurrency transactions, and escrow services. By signing up for an account or using Wiremi services, you agree to these Terms of Service in full.</p>
    <div className="mt-4">
      <p className="text-[#57686F] mb-1 md:text-xl">You acknowledge that you are at least 18 years old, and if you are under 18, you represent that your use is supervised by a legal guardian.</p>
      <div className="flex flex-col gap-7">
        {
          termsAndConditions.map((item, index) => (
            <div className="flex flex-col gap-4" key={item.title}>
              <h6 className="font-semibold text-xl text-[#105CE2]">{`${index + 1}. ${item.title}`}</h6>
              <p className="">{item.description}</p>
              {
                item.children.length > 2 && <ul className="md:pl-4 flex flex-col gap-3">
                  {item.children.map((child) => (
                    <div key={child} className="font-medium text-sm flex items-center"> <Dot size={32} className="text-[#00091E]" /> {child}</div>
                  ))}
                </ul>

              }
            </div>
          ))
        }
      </div>
      <a
        href="mailto:info@wiremi.ca"
        className="text-[#105CE2] hover:underline mt-2"
      >
        info@wiremi.ca
      </a>
    </div>
  </section>
}
