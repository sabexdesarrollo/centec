import Image from "next/image";

import { LIST_VALUES } from "@/utils/instututional_values_list";
import images from "@/assets/images/dir";

export default function InstitutionalValues() {
  return (
    <section
      id="valores-institucionales"
      className="relative overflow-hidden py-20 sm:py-32 lg:py-32 bg-primaryBlue"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl ">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Valores institucionales
          </h2>
          <p className="py-6 text-base lg:text-lg text-gray-300">
            Este aspecto surge de la convergencia de los valores institucionales
            y la reflexión sobre los principios académicos, los cuales
            desempeñan un papel crucial en el fortalecimiento y la
            transformación de cada sector económico y social. En este contexto,
            se definen los siguientes Valores Institucionales:
          </p>
        </div>
        <div class="relative lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
          <Image
            alt=""
            loading="lazy"
            decoding="async"
            data-nimg="1"
            className="w-full opacity-60 saturate-150"
            src={images.smile_persons_two}
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-200 pt-4 lg:pt-16">
        <ul className="mx-auto lg:grid gap-8 text-sm lg:gap-y-2 lg:grid-cols-3">
          {LIST_VALUES.map((item, index) => (
            <li
              key={index}
              className="p-4 mb-4 lg:mb-6 rounded-tl-xl rounded-br-3xl bg-gradient-to-bl from-secondaryDarkBlue/90 to-secondaryGreen/20"
            >
              <h3 className="font-bold text-gray-200 text-sm lg:text-lg">
                {item.name}
              </h3>
              <p className="text-xs lg:text-base text-gray-300">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
