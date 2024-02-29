import { Campus } from "@/components/technicals-programs/main_campus";
import { ACACIAS_PROGRAMS } from "@/utils/details_programs";

export default function CampusAcacias() {
  return (
    <>
      <div
        id="sede-acacias"
        className="overflow-hidden py-20 sm:py-32 bg-secondaryGreen"
      >
        <Campus
          bgLeft="from-primaryGreen"
          bgRight="to-primaryBlue"
          campus={ACACIAS_PROGRAMS}
          borderColor="border-primaryGreen"
          bgDP="bg-secondaryDarkBlue"
          textColorTime="text-secondaryDarkBlue"
          bgTime="bg-gray-300"
          campusName="Sede Acacias (meta)"
        />
      </div>
    </>
  );
}
