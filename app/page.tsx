import MyStocks from "@/components/MyStocks";
import Image from "next/image";

export default function Home() {
  return (
    <section className="p-4 h-full flex-1">
      <h2 className="mb-4 text-lg font-semibold">My Portfolio</h2>
      <MyStocks />
    </section>
  );
}
