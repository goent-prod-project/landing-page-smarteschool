import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import SelectShared from "./components/Shared/SelectShared/SelectShared";
import SearchCariSekolah from "./components/SearchCariSekolah/SearchCariSekolah";
import { FaFilter } from "react-icons/fa";

export default function Home({ nav, search }) {
  const router = useRouter();
  const [collapseOpen, setcollapseOpen] = useState(false);
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(`/`);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${!search ? "" : "bg-main pb-5 height-100vh"}`}>
        {!search ? (
          <div className="cari-sekolah">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-5 col-sm-6 col-7 pt-5 p-4">
                  <img
                    src="/img/logo-smarteschool.png"
                    alt="logo"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="row mb-5" style={{ marginTop: "75px" }}>
                <div className="col-md-12 text-center">
                  <h1 className="color-dark fw-black">
                    Cari <span className="color-primary">Sekolah</span>
                  </h1>
                  <h6 className="fw-bold mb-0">
                    Cari dan temukan sekolah untuk mendapatkan alamat tautan
                    menuju sekolah anda
                  </h6>
                </div>
              </div>
              <SearchCariSekolah nav={nav} />
            </div>
          </div>
        ) : (
          <>
            {" "}
            <section className="banner-cari-sekolah position-absolute"></section>
            <div className="container py-5 position-relative">
              <div className="row mb-5" style={{ zIndex: "1px" }}>
                <div className="col-md-12 text-center text-white pb-3">
                  <h1 className="fw-black">Cari Sekolah</h1>
                  <h6 className="fw-bold mb-0">
                    Cari dan temukan sekolah untuk mendapatkan alamat tautan
                    menuju sekolah anda
                  </h6>
                </div>
              </div>
              <div className="pt-2 mb-5 ">
                <SearchCariSekolah nav={nav} />
              </div>
              <div className="row pt-5 mt-4 position-relative gy-4 search-rpp-content justify-content-center">
                <div className="col-sm-11 mb-4 py-md-3 py-sm-5 py-3 px-sm-0 mt-md-0 mt-sm-4 mt-0 ">
                  <div className="row mb-4">
                    <div className="col-md-12 d-flex justify-content-between align-items-md-center flex-md-row flex-column">
                      <p className="fw-semibold mb-md-0 mt-md-0 mt-3">
                        Menampilkan 1 - 25 sekolah dari total 250 untuk kata
                        kunci
                        {""}
                        <span className="color-dark fw-bold"> "SMK"</span>
                      </p>
                      <button
                        className={`btn py-2 px-4 btn-collapse-filter btn-light rounded-pill border bg-white color-dark fw-bold ${
                          collapseOpen && "active"
                        }`}
                        data-bs-toggle="collapse"
                        href="#collapseExample"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                        onClick={() => setcollapseOpen(!collapseOpen)}
                        data-joyride="filter-perpus-collapse"
                      >
                        <FaFilter className="me-3 fs-14-ss" />
                        Filter
                      </button>
                    </div>
                  </div>
                  <div className="collapse" id="collapseExample">
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label className="form-label">Provinsi</label>
                        <div className="form-select-cari-sekolah">
                          <SelectShared
                            name="provinsi"
                            placeholder="Pilih provinsi"
                            // // handleChangeSelect={handleChangeSelect}
                            // value={formData.agama}
                            // options={agamaData}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <label className="form-label">Kabupaten / Kota</label>
                        <div className="form-select-cari-sekolah">
                          <SelectShared
                            name="kabupatenKota"
                            placeholder="Pilih kabupaten / kota"
                            // // handleChangeSelect={handleChangeSelect}
                            // value={formData.agama}
                            // options={agamaData}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="d-flex align-items-center">
                        <span className="btn-ss rounded-pill bg-soft-secondary color-secondary fw-bold me-4">
                          DKI Jakarta
                        </span>
                        <span className="color-primary fw-bold me-4 pointer">
                          Hapus Semua
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="card card-ss w-100 px-4 py-3">
                    <div className="d-flex align-items-sm-center justify-content-between flex-sm-row flex-column">
                      <div className="d-flex mb-sm-0 mb-3">
                        <img
                          src="/img/logo-26.png"
                          alt="logo-sekolah"
                          className="img-fit-contain me-3"
                          style={{ width: "60px", height: "60px" }}
                        />
                        <div className="">
                          <h4 className="fw-extrabold color-dark mb-2">
                            SMKN 26 Jakarta
                          </h4>
                          <span className="mb-0">Jakarta</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end">
                        <a href="#">
                          <img src="/img/icon-link.svg" alt="icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
        </a>
      </footer> */}
    </div>
  );
}

export async function getServerSideProps({ query: { nav, search } }) {
  return {
    props: {
      nav: nav || null,
      search: search || null,
    },
  };
}
