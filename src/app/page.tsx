"use client";
import Image from "next/image";
import { basePath } from "../../next.config"; // 追加
import { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
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
