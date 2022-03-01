import Link from "next/link";
import { FaBook, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import AnimatePage from "../components/Shared/AnimatePage/AnimatePage";
import CardBerita from "../components/Berita/CardBerita";
import { getBerita } from "../../client/BeritaClient";

const index = ({}) => {
  return (
    <>
      <iframe src="/panduan-smarteschool.pdf" style={{ width: "100%", height:"100vh" }} />
    </>
  );
};

export default index;
