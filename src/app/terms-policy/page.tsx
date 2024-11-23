
import PageHero from "@/_components/page-hero";
import TermsAndCondition from "./_components/terms-and-conditions";

export default function TermsAndPolicyPage() {
  return (
    <>
      <PageHero
        title="Terms of service"
        desc="Review out service policy as well as terms and conditions that apply"
      />
      <TermsAndCondition />
    </>
  );
}
