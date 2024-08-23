import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Image
        src="/Logo.svg"
        width={120}
        height={120}
        alt="Logo"
        className="animate-pulse duration-800"
      />
    </div>
  );
}
