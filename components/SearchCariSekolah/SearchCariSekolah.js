import React, { useEffect, useState } from "react";
import Link from "next/link";
import SelectShared from "../Shared/SelectShared/SelectShared";
import { useRouter } from "next/router";

const SearchCariSekolah = ({ nav }) => {
  const router = useRouter();

  const initialValue = {
    search: "",
    tingkat: "",
    provinsi: "",
    kabupaten: "",
  };
  const [formData, setformData] = useState(initialValue);
  const [collapseOpen, setcollapseOpen] = useState(false);
  const [dropdownOpen, setdropdownOpen] = useState(false);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="search-illustasi-kolaborasi position-relative">
            <div
              className={`search-form row position-absolute ${
                collapseOpen && "show"
              } ${dropdownOpen && "up"}`}
            >
              <div className="col-sm-12 d-flex flex-column">
                <div
                  className={`card card-ss card-search-form ${
                    collapseOpen && "show"
                  }`}
                >
                  <div className="d-flex flex-md-row flex-column">
                    <div
                      className={`
                       flex-grow-1 d-flex flex-column position-relative`}
                      data-joyride="cari-buku"
                    >
                      <input
                        type="text"
                        className={`form-control form-search-perpustakaan fs-5 fw-bold p-4 pe-5 h-100 ${
                          collapseOpen && "w-100"
                        }`}
                        placeholder={`Cari Sekolah...`}
                        autoComplete="off"
                        name="cari"
                        onChange={(e) => (
                          setcollapseOpen(true),
                          setformData({ ...formData, search: e.target.value })
                        )}
                        value={formData?.search}
                      />
                      {!formData?.search.trim() ? (
                        <img
                          src="/img/search-icon-cari-sekolah.svg"
                          alt="search-icon"
                          className="position-absolute"
                          style={{
                            bottom: "50%",
                            transform: "translateY(50%)",
                            right: "24px",
                          }}
                        />
                      ) : (
                        <button
                          className="border-0 icon-delete-search-cari-sekolah position-absolute"
                          style={{
                            background: "none",
                            bottom: "50%",
                            transform: "translateY(50%)",
                            right: "20px",
                          }}
                          onClick={() => (
                            setcollapseOpen(false),
                            setformData({ ...formData, search: "" })
                          )}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <g
                              id="icon-delete-search"
                              transform="translate(-646.347 -367.346)"
                            >
                              <path
                                id="Path_519"
                                data-name="Path 519"
                                d="M12,0A12,12,0,1,1,0,12,12,12,0,0,1,12,0Z"
                                transform="translate(646.347 367.346)"
                                fill="#e1e1e7"
                              />
                              <path
                                id="times-solid"
                                d="M6.509,84.72l2.684-2.684a.844.844,0,0,0,0-1.193l-.6-.6a.844.844,0,0,0-1.193,0L4.72,82.931,2.036,80.247a.844.844,0,0,0-1.193,0l-.6.6a.844.844,0,0,0,0,1.193L2.931,84.72.247,87.4a.844.844,0,0,0,0,1.193l.6.6a.844.844,0,0,0,1.193,0L4.72,86.509,7.4,89.193a.844.844,0,0,0,1.193,0l.6-.6a.844.844,0,0,0,0-1.193Z"
                                transform="translate(653.626 294.626)"
                                fill="#fff"
                              />
                            </g>
                          </svg>
                        </button>
                      )}

                      <button type="submit" className="d-none">
                        Cari
                      </button>
                    </div>
                    {!collapseOpen && (
                      <div
                        className="d-flex justify-content-end"
                        onMouseOver={() => setdropdownOpen(true)}
                        onMouseLeave={() => setdropdownOpen(false)}
                      >
                        <div className="dropdown dropdown-ss dropdown-search-perpustakaan dropdown-search-rpp text-md-start text-center">
                          <div
                            className="dropdown-perpustakaan-toggle-container py-4 pe-4 h-100 d-flex align-items-center justify-content-center"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            data-joyride="dropdown-perpustakaan"
                          >
                            <a
                              onMouseOver={() => setdropdownOpen(true)}
                              onMouseLeave={() => setdropdownOpen(false)}
                              id="doubleOnClick"
                              className={`dropdown-toggle dropdown-search-perpustakaan-toggle dropdown-search-rpp-toggle border-start border-5 border-secondary border-light-secondary-ss ps-4 fs-5 fw-bold color-dark pointer text-decoration-none d-flex align-items-center justify-content-md-start justify-content-center`}
                            >
                              <img
                                src={`${
                                  nav == "sd-mi" || !nav
                                    ? "/img/icon-sd-mi.svg"
                                    : nav == "smp-mts"
                                    ? "/img/icon-smp-mts.svg"
                                    : nav == "sma-ma"
                                    ? "/img/icon-sma-ma.svg"
                                    : nav == "smk-mak"
                                    ? "/img/icon-smk-mak.svg"
                                    : ""
                                }`}
                                height="35px"
                                alt="icon"
                                className="me-3 d-md-block d-none"
                              />

                              {(nav == "sd-mi" || !nav) && "SD / MI"}
                              {nav == "smp-mts" && "SMP / MTS"}
                              {nav == "sma-ma" && "SMA / MA"}
                              {nav == "smk-mak" && "SMK / MAK"}
                            </a>
                          </div>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                            onMouseOver={() => setdropdownOpen(true)}
                            onMouseLeave={() => setdropdownOpen(false)}
                          >
                            <li>
                              <Link href={`?nav=sd-mi`}>
                                <a
                                  className={`dropdown-item   ${
                                    (nav == "sd-mi" || !nav) && "active"
                                  }`}
                                  href="#"
                                  onClick={() => setdropdownOpen(false)}
                                >
                                  <img
                                    src="/img/icon-sd-mi.svg"
                                    alt="icon-sd-mi"
                                    className="me-2"
                                    style={{
                                      width: "24px",
                                      height: "24px",
                                    }}
                                  />
                                  SD / MI
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href={`?nav=smp-mts`}>
                                <a
                                  className={`dropdown-item   ${
                                    nav == "smp-mts" && "active"
                                  }`}
                                  href="#"
                                  onClick={() => setdropdownOpen(false)}
                                >
                                  <img
                                    src="/img/icon-smp-mts.svg"
                                    alt="icon-smp-mts"
                                    className="me-2"
                                  />
                                  SMP / MTS
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href={`?nav=sma-ma`}>
                                <a
                                  className={`dropdown-item   ${
                                    nav == "sma-ma" && "active"
                                  }`}
                                  href="#"
                                  onClick={() => setdropdownOpen(false)}
                                >
                                  <img
                                    src="/img/icon-sma-ma.svg"
                                    alt="icon-sma-ma"
                                    className="me-2"
                                  />
                                  SMA / MA
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href={`?nav=smk-mak`}>
                                <a
                                  className={`dropdown-item   ${
                                    nav == "smk-mak" && "active"
                                  }`}
                                  href="#"
                                  onClick={() => setdropdownOpen(false)}
                                >
                                  <img
                                    src="/img/icon-smk-mak.svg"
                                    alt="icon-smk-mak"
                                    className="me-2"
                                  />
                                  SMK / MAK
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                  {collapseOpen && (
                    <div className="row">
                      <div className="col-md-12 mb-3">
                        <div
                          className={`pencarian-detail pt-0 ${
                            collapseOpen && "show"
                          }`}
                        >
                          <hr className="m-0" />
                          <div className="search-cari-sekolah-items pointer px-4 py-2 d-flex">
                            <img
                              src="http://lorempixel.com/500/500"
                              alt="logo-sekolah"
                              className="img-fit-contnet me-4"
                              style={{ width: "42px", height: "42px" }}
                            />
                            <div className="">
                              <h6 className="fw-bold mb-1">SMKN 26 Jakarta</h6>
                              <span className="mb-0 fs-12-ss">Jakarta</span>
                            </div>
                          </div>
                          <div className="search-cari-sekolah-items pointer px-4 py-2 d-flex">
                            <img
                              src="http://lorempixel.com/500/500"
                              alt="logo-sekolah"
                              className="img-fit-contnet me-4"
                              style={{ width: "42px", height: "42px" }}
                            />
                            <div className="">
                              <h6 className="fw-bold mb-1">SMKN 26 Jakarta</h6>
                              <span className="mb-0 fs-12-ss">Jakarta</span>
                            </div>
                          </div>
                          <div className="search-cari-sekolah-items pointer px-4 py-2 d-flex">
                            <img
                              src="http://lorempixel.com/500/500"
                              alt="logo-sekolah"
                              className="img-fit-contnet me-4"
                              style={{ width: "42px", height: "42px" }}
                            />
                            <div className="">
                              <h6 className="fw-bold mb-1">SMKN 26 Jakarta</h6>
                              <span className="mb-0 fs-12-ss">Jakarta</span>
                            </div>
                          </div>
                          <div className="search-cari-sekolah-items pointer px-4 py-2 d-flex">
                            <img
                              src="http://lorempixel.com/500/500"
                              alt="logo-sekolah"
                              className="img-fit-contnet me-4"
                              style={{ width: "42px", height: "42px" }}
                            />
                            <div className="">
                              <h6 className="fw-bold mb-1">SMKN 26 Jakarta</h6>
                              <span className="mb-0 fs-12-ss">Jakarta</span>
                            </div>
                          </div>
                          <div className="search-cari-sekolah-items pointer px-4 py-2 d-flex">
                            <img
                              src="http://lorempixel.com/500/500"
                              alt="logo-sekolah"
                              className="img-fit-contnet me-4"
                              style={{ width: "42px", height: "42px" }}
                            />
                            <div className="">
                              <h6 className="fw-bold mb-1">SMKN 26 Jakarta</h6>
                              <span className="mb-0 fs-12-ss">Jakarta</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`backdrop-search-kolaborasi ${collapseOpen && "show"}`}
        onClick={() => setcollapseOpen(false)}
      ></div>
    </>
  );
};

export default SearchCariSekolah;
