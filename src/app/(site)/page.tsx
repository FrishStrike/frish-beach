import CoreContent from "@/components/CoreContent";
import CoreMenu from "@/components/CoreMenu";

export default function Home() {
  return (
    <main
      className="
        w-full
        h-full
      "
    >
      <CoreContent />
      <div
        className="
          h-full
          flex
          justify-center
          items-end"
      >
        <CoreMenu />
      </div>
    </main>
  );
}
