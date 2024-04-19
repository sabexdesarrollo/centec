import { PRIVATE_POLICIES_INF } from "@/utils/private_policies_inf";

export default function PrivatePolicies() {
  return (
    <div
      id="schoolCentec"
      className="overflow-hidden bg-white py-20 sm:py-32 lg:pb-32 xl:pb-36 text-gray-700"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-black">
            POLÍTICA DE TRATAMIENTO DE LOS DATOS PERSONALES
          </h2>
          <p className="text-xl pt-2">
            LEY 1581 DE 2012 - Enero 2023, Colombia.
          </p>
        </div>
        <div className="">
          <div className="relative mt-6 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-0 xl:col-span-6"></div>
            <div className="text-3xl text-gray-800 font-medium w-full">
              {PRIVATE_POLICIES_INF.map((item, index) => (
                <ul
                  key={index}
                  className="space-y-4 text-lg mt-2 font-normal text-gray-700"
                >
                  <li className="flex items-center space-x-2 p-2">
                    <span>
                      <strong>{item.title}</strong> {item.description}
                    </span>
                  </li>
                  {item.subRules && (
                    <ul className="ml-4 space-y-2 py-2">
                      {item.subRules.map((subItem, subIndex) => (
                        <li key={subIndex} className="p-2">
                          <span className="text-gray-800">
                            <strong>{subItem.titleR}</strong>{" "}
                            {subItem.descriptionR}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
