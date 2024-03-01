import Image from "next/image";
import images from "@/assets/images/dir";

export default function Hero() {
  return (
    <div className="relative -z-50 overflow-hidden py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-0 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight">
              Invest at the perfect time.
            </h1>
            <p className="mt-6 text-lg ">
              By leveraging insights from our network of industry insiders,
              you’ll know exactly when to buy to maximize profit, and exactly
              when to sell to avoid painful losses.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <a
                aria-label="Download on the App Store"
                className="rounded-lg transition-colors bg-gray-800 text-white hover:bg-gray-900"
                href="#"
              >
              </a>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
          <Image
              alt=""
              loading="lazy"
              decoding="async"
              data-nimg="1"
              className="w-[60rem] -z-50"
              src={images.smile_persons}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
