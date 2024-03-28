"use client";
import Top from "../components/Top";
import Header from "@/components/Header";
import About from "@/components/About";
import Service from "@/components/Service";
import News from "@/components/News";

export default function Home() {
  return (
    <>
      <Header />
      <Top />
      <About />
      <Service />
      <News />
    </>
  );
}
