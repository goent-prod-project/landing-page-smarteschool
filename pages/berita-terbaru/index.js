import Link from "next/link";
import { FaBook, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import AnimatePage from "../components/Shared/AnimatePage/AnimatePage";
import CardBerita from "../components/Berita/CardBerita";
import Dropdown from "../components/Dropdown/Dropdown";

const index = ({}) => {
  const dataBerita = [
    {
      id: 1,
      img: "http://api.goent26.com/uploads/medium_Whats_App_Image_2021_08_19_at_23_25_00_52f0386368.jpeg",
      judul: `Workshop Guru Penggerak Digitalisasi Sekolah (GPDS) SD dan SMP se DKI Jakarta Hari Pertama`,
      tanggal: "20 August 2021",
    },
    {
      id: 2,
      img: "http://api.goent26.com/uploads/medium_Whats_App_Image_2021_08_19_at_23_25_01_8599dac6a1.jpeg",
      judul: `
      Workshop Guru Penggerak Digitalisasi Sekolah (GPDS) SD dan SMP se DKI Jakarta Hari Kedua`,
      tanggal: "20 August 2021",
    },
    {
      id: 3,
      img: "http://api.goent26.com/uploads/medium_Whats_App_Image_2021_08_19_at_23_25_03_6361a564b8.jpeg",
      judul: `Workshop Guru Penggerak Digitalisasi Sekolah (GPDS) SD dan SMP se DKI Jakarta Hari Ketiga`,
      tanggal: "20 August 2021",
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
                    Berita Terbaru
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
                <CardBerita data={dataBerita} />
              </div>
            </div>
          </div>
        </>
      </AnimatePage>
    </Layout>
  );
};

export default index;
