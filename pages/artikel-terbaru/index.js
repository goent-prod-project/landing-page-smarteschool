import Link from "next/link";
import { FaBook, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import AnimatePage from "../components/Shared/AnimatePage/AnimatePage";
import CardBerita from "../components/Berita/CardBerita";
import Dropdown from "../components/Dropdown/Dropdown";

const index = ({}) => {
  const dataArtikel = [
    {
      id: 1,
      img: "http://api.goent26.com/uploads/medium_Whats_App_Image_2021_02_24_at_21_24_37_1_1366f5ebb4.jpeg",
      judul: `Pembelajaran Daring Di Masa Pandemi, Solusi Atau Masalah?`,
      tanggal: "24 February 2021",
    },
    {
      id: 2,
      img: "http://api.goent26.com/uploads/medium_distance_learning_1600x960_1600x960_898e69ba99.jpg",
      judul: `
      5 Fitur Utama Aplikasi Learning Management System`,
      tanggal: "18 February 2021",
    },
    {
      id: 3,
      img: "http://api.goent26.com/uploads/medium_e_learning_295454ff86.jpg",
      judul: `
      5 Tantangan dan Solusi Belajar Daring untuk Pelajar di Masa Pandemi Covid 19`,
      tanggal: "11 February 2021",
    },
  ];
  const listDropdownValue = [
    {
      label: "Terbaru",
      value: "terbaru",
    },
    {
      label: "Terlama",
      value: "terlama",
    },
  ];
  return (
    <Layout isIndex>
      <AnimatePage>
        <>
          <div className="container">
            <div className="py-4">
              <div className="row">
                <div className="d-flex justify-content-between mb-4">
                  <h3 className="md-fs-5 color-dark fw-extrabold title-page position-relative mb-5 ps-0 ">
                    Artikel Terbaru
                  </h3>
                  <div className="">
                    <Dropdown
                      listValue={listDropdownValue}
                      defaultValue={listDropdownValue?.[0]?.label}
                      //   onChange={handleChangeDropdown}
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="row gy-4">
                <CardBerita data={dataArtikel} />
              </div>
            </div>
          </div>
        </>
      </AnimatePage>
    </Layout>
  );
};

export default index;
