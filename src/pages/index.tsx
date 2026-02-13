import Navbar from "@/components/layouts/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      
     
      {/* ini adalah route pertaman atau (/) sperti di laravel */}
      <h1>Ini Halaman Utama Next js</h1>
      <div className="">hello world</div>
      
      <ul>
        <li>
          <Link href="/tentang">Tentang</Link>
        </li>
        <li>
          <Link href="/setting/app">App Setting</Link>
        </li>
        <li>
          <Link href="/setting/user">User Setting</Link>
        </li>
     </ul>
    </>
  );
}
