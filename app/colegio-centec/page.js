import EducationalSubsidies from "@/components/admissions-financing/educational_subsidies";
import Financing from "@/components/admissions-financing/financing";
import Inscription from "@/components/admissions-financing/inscription";
import InstitutionalPrinciples from "@/components/our-institution/institucional_principles";
import InstitutionalHorizon from "@/components/walfare/institutional_horizon";
import InstitutionalProspective from "@/components/walfare/institutional_prospective";
import InstitutionalValues from "@/components/walfare/institutional_values";
import RegistrationRequirements from "@/components/walfare/registration_requirements";

export default function ColegioCentenc() {
  return <>
  <InstitutionalProspective/>
  <InstitutionalHorizon/>
  <InstitutionalPrinciples/>
  <InstitutionalValues/>
  <Inscription/>
  <Financing/>
  <EducationalSubsidies/>
  <RegistrationRequirements/>
  </>;
}
