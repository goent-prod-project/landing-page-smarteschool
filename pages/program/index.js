import React, { useState } from "react";
import { FaChevronDown, FaPen, FaTrashAlt } from "react-icons/fa";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import InformasiUmum from "../components/Program/InformasiUmum";
import TabelGuru from "../components/Program/TabelGuru";
import TabelSekolah from "../components/Program/TabelSekolah";
import AnimatePage from "../components/Shared/AnimatePage/AnimatePage";
import Tabs from "../components/Tabs/Tabs";

const index = ({ nav }) => {
  const initialState = {
    pilihanGPDS: `Guru Penggerak Digitalisasi Sekolah Provinsi DKI
    Jakarta`,
  };
  const [formData, setFormData] = useState(initialState);
  const [dropdownOpen, setdropdownOpen] = useState(false);

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
  const navItems = [
    {
      url: `program?nav=informasi-umum`,
      text: "Informasi Umum",
      active: nav == "informasi-umum" || !nav,
    },
    {
      url: `program?nav=rekaman-webinar`,
      text: "Rekaman Webinar",
      active: nav == "rekaman-webinar",
    },
    {
      url: `program?nav=peserta`,
      text: "Peserta",
      active: nav == "peserta",
    },
  ];

  const navItemsPeserta = [
    {
      id: "sekolah",
      nav: "Sekolah",
      active: true,
      content: <TabelSekolah />,
    },
    {
      id: "guru",
      nav: "Guru",
      active: false,
      content: <TabelGuru />,
    },
  ];
  return (
    <Layout>
      <AnimatePage>
        <section
          className="pb-5"
          style={{
            background: `url("/img/bg-program.svg")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "auto",
          }}
        >
          <div className="container mt-4">
            <div className="row gy-4 d-flex justify-content-center">
              <div className="col-md-6 order-2 order-md-1 pt-4">
                <h2 className="fw-black text-white">
                  Bersama Mendigitalkan Komunitas Pendidikan Indonesia
                </h2>
                <div className="d-flex">
                  <div className="me-4 d-flex align-items-center">
                    <img
                      src="/img/icon-program-sekolah.svg"
                      alt=""
                      className="me-2"
                    />
                    <h4 className="fw-bold text-white mb-0">263 Sekolah</h4>
                  </div>
                  <div className="d-flex align-items-center">
                    <img
                      src="/img/icon-program-guru.svg"
                      alt=""
                      className="me-2"
                    />
                    <h4 className="fw-bold text-white mb-0">7823 Guru</h4>
                  </div>
                </div>
                <div>
                  <p className="fs-18-ss text-white fw-regular mt-4">
                    Sudah saatnya bagi anda untuk menjadi bagian dari program
                    Guru Penggerak Digitalisasi Sekolah untuk mendapatkan
                    pelatihan khusus dan menjadi guru penggerak digital bersama
                    Smarteschool.
                  </p>
                </div>
              </div>
              <div className="col-md-1 d-none d-md-flex order-2"></div>
              <div className="col-md-5 justify-content-end order-1 d-flex order-md-3">
                <img src="/img/icon-program.png" className="w-100" />
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div
            className="row m-0 position-relative"
            style={{
              top: "-43px",
            }}
          >
            <Navbar nav={navItems} />
          </div>
        </div>
        {(nav == undefined || nav === "informasi-umum") && <InformasiUmum />}
        {nav === "rekaman-webinar" && (
          <div
            className="container"
            style={{
              marginTop: "-32px",
            }}
          >
            <div className="card card-ss p-4">
              <div className="card-body p-0">
                <h1 className="color-dark fw-extrabold mt-1 mb-2">
                  Guru Penggerak Digitalisasi Sekolah Provinsi DKI Jakarta
                </h1>
                <p
                  className=""
                  style={{
                    fontSize: "20px",
                  }}
                >
                  Kamis, 22 Juli 2021 - Rabu, 28 Juli 2021
                </p>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 rounded-ss position-relative border border-1 border-light-secondary p-0">
                      <img
                        src="http://api.goent26.com/uploads/medium_e_learning_295454ff86.jpg"
                        alt=""
                        className="img-fluid img-fit-cover mb-3"
                        style={{
                          height: "165px",
                          width: "100%",
                          borderRadius: "15px 15px 0px 0px !important",
                        }}
                      />
                      <span
                        className="bg-primary text-white py-1 px-3 fs-12-ss rounded-pill position-absolute"
                        style={{
                          top: "150px",
                          left: "24px",
                        }}
                      >
                        Jumat, 4 Desember 2021
                      </span>
                      <div className="px-4">
                        <p className="fs-18-ss color-dark fw-extrabold mt-2">
                          GPDS Hari Ke - 1
                        </p>
                        <p className="fs-18-ss color-dark fw-semibold">
                          "Pengenalan Program GPDS dan Smarteschool"GPDS Hari Ke
                          - 1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {nav === "peserta" && (
          <div
            className="container"
            style={{
              marginTop: "-32px",
            }}
          >
            <div className="row">
              <div className="col-md-12">
                <div className="search-illustasi-kolaborasi rounded-ss bg-soft-primary p-4 position-relative d-flex mb-4 flex-md-row flex-column">
                  <div className="search-illustasi-kolaborasi-content mb-4">
                    <h2 className="fw-extrabold color-dark text-capitalize mb-2">
                      Peserta GPDS
                    </h2>
                    <h6 className="color-secondary mb-4 fs-18-ss">
                      Bersama mendigitalkan komunitas pendidikan Indonesia
                      bersama Smarteschool
                    </h6>
                  </div>
                  <img
                    src="/img/ilustrasi-peserta-gpds.svg"
                    alt="illustrasi"
                    class="search-illustrasi-kolaborasi-img img-fluid"
                  ></img>
                </div>
              </div>
              <div
                className="row justify-content-center position-relative"
                style={{
                  top: "-70px",
                }}
              >
                <div className="col-md-10">
                  <div className="card card-ss">
                    <div className="dropdown dropdown-ss mb-md-0 mb-2 d-md-inline d-flex justify-content-end">
                      <div
                        className=" d-flex p-4 justify-content-between align-items-center w-100"
                        role="button"
                        id="dropdownOption"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        onClick={() => setdropdownOpen(!dropdownOpen)}
                      >
                        <h5 className="fw-bold color-dark mb-0">
                          {formData?.pilihanGPDS}
                        </h5>
                        <div
                          className="bg-primary rounded-circle shadow-primary d-flex align-items-center justify-content-center"
                          style={{
                            width: "40px",
                            height: "40px",
                          }}
                        >
                          {!dropdownOpen ? (
                            <img
                              src="/img/arrow-button-white.svg"
                              alt="icon-dropdown"
                              style={{
                                transition: "0.3s",
                              }}
                            />
                          ) : (
                            <img
                              src="/img/arrow-button-white.svg"
                              alt="icon-dropdown"
                              className="rotate-180"
                              style={{
                                transition: "0.3s",
                              }}
                            />
                          )}
                        </div>
                      </div>
                      <ul
                        className="dropdown-menu dropdown-menu-ss my-1 w-100"
                        aria-labelledby="dropdownOption"
                      >
                        <li
                          onClick={() =>
                            setFormData({
                              pilihanGPDS: ` Guru Penggerak Digitalisasi Sekolah Provinsi DKI
                              Jakarta 2`,
                            })
                          }
                        >
                          <a className="dropdown-item">
                            <h5 className="fw-bold color-dark mb-0">
                              Guru Penggerak Digitalisasi Sekolah Provinsi DKI
                              Jakarta 2
                            </h5>
                          </a>
                        </li>
                        <li
                          onClick={() =>
                            setFormData({
                              pilihanGPDS: `  Guru Penggerak Digitalisasi Sekolah Provinsi DKI
                              Jakarta 3`,
                            })
                          }
                        >
                          <a className="dropdown-item">
                            <h5 className="fw-bold color-dark mb-0">
                              Guru Penggerak Digitalisasi Sekolah Provinsi DKI
                              Jakarta 3
                            </h5>
                          </a>
                        </li>
                        <li
                          onClick={() =>
                            setFormData({
                              pilihanGPDS: ` Guru Penggerak Digitalisasi Sekolah Provinsi DKI
                              Jakarta 4`,
                            })
                          }
                        >
                          <a className="dropdown-item">
                            <h5 className="fw-bold color-dark mb-0">
                              Guru Penggerak Digitalisasi Sekolah Provinsi DKI
                              Jakarta 4
                            </h5>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card card-ss p-0 py-4 "
              style={{
                marginTop: "-32px",
              }}
            >
              <div className="card-body p-0">
                <div className="row px-4">
                  <div className="col-md-9">
                    <h4 className="fw-extrabold color-dark">Daftar Peserta</h4>
                  </div>
                  <div className="col-md-3">
                    <input
                      type="text"
                      className="form-control form-search form-search-mutasi rounded-pill fw-semibold border-secondary-ss w-100"
                      style={{ height: "42px", width: "100%" }}
                      id="exampleFormControlInput1"
                      placeholder="Cari"
                      //   value={searchTransaksi}
                      //   onChange={(e) => setSearchTransaksi(e.target.value)}
                    />
                  </div>
                </div>
                <Tabs navItems={navItemsPeserta} className="mx-4" />
              </div>
            </div>
          </div>
        )}
      </AnimatePage>
    </Layout>
  );
};

export async function getServerSideProps({ query: { nav } }) {
  return {
    props: {
      nav: nav || null,
    },
  };
}
export default index;
