import Link from "next/link";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

export const ButtonMoreInf = () => {
  return (
    <div className="mx-auto max-w-full pt-5">
      <Link href="https://api.whatsapp.com/send?phone=573105949059">
        <div className="relative overflow-hidden bg-gradient-to-r from-secondaryGreen  to-primaryBlue p-2 rounded-xl lg:flex border-2 border-secondaryGreen hover:opacity-60 hover:delay-75 cursor-pointer">
          <div className="mx-auto justify-center items-center my-auto text-center lg:mx-0 lg:flex-auto lg:text-center">
            <p className="lg:text-base text-sm font-semibold leading-8 text-white animate-pulse">
                <ChatBubbleOvalLeftEllipsisIcon className="inline-flex w-5 h-5"/> {" "}
              Para más información, contáctanos en WhatsApp
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
