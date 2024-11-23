import PageHero from "@/_components/page-hero";
import RemittanceServices from "./_components/remittance-services";
import OurServices from "./_components/our-services";
import Escrow from "./_components/escrow";
import VirtualCards from "../_components/virtual-cards";
import CrowdFunding from "./_components/crowdfunding";
import Savings from "./_components/savings";
import Travel from "./_components/travel";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        desc="Our services deliver unique features to meet your financial needs effectively"
      />
      <OurServices />
      <RemittanceServices />
      <Escrow />
      <VirtualCards landing={false} />
      <CrowdFunding />
      <Savings />
      <Travel />
    </>
  );
}
