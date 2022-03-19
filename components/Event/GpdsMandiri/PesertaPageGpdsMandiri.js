import React, { useState } from "react";
import Tabs from "components/Tabs/Tabs";
import TabelSekolah from "../TabelSekolah";
import TabelGuru from "../TabelGuru";

const PesertaPageGpdsMandiri = () => {
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
      <div
        className="card card-ss p-0 py-4 "
        // style={{
        //   marginTop: "-32px",
        // }}
      >
        <div className="card-body p-0">
          <div className="row px-4 mb-4">
            <div className="col-md-9 d-flex align-items-center">
              <h4 className="fw-extrabold color-dark mb-md-0 mb-4">
                Daftar Peserta
              </h4>
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

export default PesertaPageGpdsMandiri;
