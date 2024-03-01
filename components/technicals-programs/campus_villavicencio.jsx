import { Campus } from "@/components/technicals-programs/main_campus";
import { VILLAVICENCIO } from "@/utils/list_courses";
import { VILLAVICENCIO_PROGRAMS } from "@/utils/details_programs";

export default function CampusVillavicencio() {
  return (
    <>
      <div
        id="sede-villavicencio"
        className="relative -z-50 overflow-hidden py-20 sm:py-32 bg-secondaryDarkBlue"
      >
        <Campus
          bgLeft="from-secondaryGreen"
          bgRight="to-primaryBlue"
          campus={VILLAVICENCIO_PROGRAMS}
          borderColor="border-secondaryGreen"
          bgDP="bg-secondaryGreen"
          textColorTime="text-secondaryGreen"
          bgTime="bg-white"
          campusName="Sede Villavicencio (meta)"
        />
      </div>
    </>
  );
}
