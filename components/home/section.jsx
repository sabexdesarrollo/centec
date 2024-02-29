import Image from "next/image";
import images from "@/assets/images/dir";

export default function Section() {
  return (
    <div id="two-section" class="overflow-hidden bg-primaryGreen py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div class="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <Image
              alt=""
              loading="lazy"
              decoding="async"
              data-nimg="1"
              className="w-[40rem] rounded-3xl rounded-b-none rounded-r-none shadow-primaryGreen/50 shadow-2xl"
              src={images.student}
            />
          </div>
          <div class="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 class="text-4xl font-medium tracking-tight">
              Invest at the perfect time.
            </h1>
            <p class="mt-6 text-lg ">
              By leveraging insights from our network of industry insiders,
              you’ll know exactly when to buy to maximize profit, and exactly
              when to sell to avoid painful losses.
            </p>
            <div class="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <a
                aria-label="Download on the App Store"
                class="rounded-lg transition-colors bg-gray-800 text-white hover:bg-gray-900"
                href="#"
              ></a>
            </div>
          </div>
          <div class="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6"></div>
        </div>
      </div>
    </div>
  );
}
