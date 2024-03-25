"use client";
import { basePath } from "../../next.config"; // 追加
import Top from "../components/Top";
import Header from "@/components/Header";
import About from "@/components/About";
const BASE_PATH = basePath ? basePath : ""; // 追加

export default function Home() {
  return (
    <>
      <Header />
      <Top />
      <About />
    </>
  );
}
