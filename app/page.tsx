"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <main>
      <Link href="/products">Product Page</Link>
      <br/>
      <button onClick={()=> router.push("/cart")}>Cart Page</button>
    </main>
  );
}
