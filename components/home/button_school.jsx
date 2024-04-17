"use client";

import { useRouter } from "next/navigation";
import { FiExternalLink } from "react-icons/fi";

export default function ButtonSchool({ url, bgColor }) {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.push(url)}
      className={`${bgColor} text-lg p-2 rounded-xl mt-4 animate-pulse font-bold hover:scale-105 hover:delay-0`}
    >
      <FiExternalLink className="h-7 w-7 inline-flex" /> Más Información...
    </button>
  );
}
