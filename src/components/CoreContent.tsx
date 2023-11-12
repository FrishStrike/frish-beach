import Image from "next/image";

const CoreContent = () => {
  return (
    <div
      className="
      absolute
      inset-0
      -z-10
      w-full
      h-full
    "
    >
      <Image
        fill
        alt="sorry"
        src="/Yeat.webp"
        className="object-cover select-none"
      />
    </div>
  );
};

export default CoreContent;
