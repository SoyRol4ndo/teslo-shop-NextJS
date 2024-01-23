import { titleFont } from "@/src/config/font";

export default function Home() {
  return (
    <div className="">
      <h1>Hello</h1>

      <h1 className={`${titleFont.className} font-bold`}>Login Page</h1>
    </div>
  );
}
