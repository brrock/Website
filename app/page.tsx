import Link from "next/link"
import { BentoGridDemo } from "@/components/cards"
import { GoogleGeminiEffectDemo } from "@/components/bg"
export default function Home() {
  return (
    <section className="">
      <br />
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance text-center">Welcome to my website</h1> <br />
      <p className="text-center text-lg">Here are some of my projects I have worked on</p> 
      <GoogleGeminiEffectDemo />
      <BentoGridDemo />
    </section>

  )
}
