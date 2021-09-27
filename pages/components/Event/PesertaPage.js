import React, { useState } from "react";
import TabelGuru from "./TabelGuru";
import TabelSekolah from "./TabelSekolah";
import Tabs from "../Tabs/Tabs";

const PesertaPage = () => {
  const initialState = {
    pilihanGPDS: `Guru Penggerak Digitalisasi Sekolah Provinsi DKI
        Jakarta`,
  };
  const [formData, setFormData] = useState(initialState);
  const [dropdownOpen, setdropdownOpen] = useState(false);

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
    <div
      className="container"
      style={{
        marginTop: "-32px",
      }}
    >
      <div className="row justify-content-center position-relative mb-5">
        <div className="col-md-12">
          <div className="search-illustasi-kolaborasi rounded-ss bg-soft-primary p-4 position-relative d-flex mb-4 flex-md-row flex-column">
            <div className="search-illustasi-kolaborasi-content mb-4">
              <h2 className="md-fs-5 sm-fs-6 fw-extrabold color-dark text-capitalize mb-2">
                Peserta GPDS
              </h2>
              <h6 className="md-fs-18-ss sm-fs-14-ss color-secondary mb-4 fs-18-ss">
                Bersama mendigitalkan komunitas pendidikan Indonesia bersama
                Smarteschool
              </h6>
            </div>
            <img
              src="/img/smarteschool-illustration.png"
              alt="illustrasi"
              class="search-illustrasi-kolaborasi-img img-fluid"
            ></img>
          </div>
        </div>
        <div
          className="col-md-10 position-absolute card-dropdown-gpds"
          style={{
            bottom: "-16px",
            transform: "translateX(50%)",
            right: "50%",
            zIndex: "1",
          }}
        >
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
                <h5 className="md-fs-18-ss sm-fs-6 fw-bold color-dark mb-0">
                  {formData?.pilihanGPDS}
                </h5>
                <div
                  className="bg-primary rounded-circle shadow-primary d-flex align-items-center justify-content-center p-3"
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
                  <a
                    className="dropdown-item"
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    Guru Penggerak Digitalisasi Sekolah Provinsi DKI Jakarta 2
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
                  <a
                    className="dropdown-item"
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    Guru Penggerak Digitalisasi Sekolah Provinsi DKI Jakarta 3
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
                  <a
                    className="dropdown-item"
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    Guru Penggerak Digitalisasi Sekolah Provinsi DKI Jakarta 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="card card-ss p-0 py-4 "
        // style={{
        //   marginTop: "-32px",
        // }}
      >
        <div className="card-body p-0">
          <div className="row px-4 mb-4">
            <div className="col-md-9 d-flex align-items-center">
              <h4 className="fw-extrabold color-dark mb-md-0 mb-4">Daftar Peserta</h4>
            </div>
            <div className="col-md-3 mb-md-0 mb-4">
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
  );
};

export default PesertaPage;
