"use client";
import Top from "../components/section/Top";
import Header from "@/components/Header";
import About from "@/components/section/About";
import Service from "@/components/section/Service";
import News from "@/components/section/News";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Top />
      <About />
      <Service />
      <News />
      <Footer />
    </>
  );
}
