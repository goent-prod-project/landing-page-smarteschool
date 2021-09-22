import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = ({ isFrontPage }) => {
  const router = useRouter();
  const [menuAktif, setMenuAktif] = useState("/");

  //   const { user } = useUser();
  //   const { sekolah } = useSekolah();

  const headerMenus = [
    {
      isDropdown: false,
      text: "Beranda",
      url: `/`,
    },
    {
      isDropdown: false,
      text: "Fitur",
      url: `/fitur`,
    },
    {
      isDropdown: false,
      text: "Sekolah",
      url: `/sekolah`,
    },
    {
      isDropdown: false,
      text: "Berita",
      url: `/berita`,
    },
  ];

  useEffect(() => {
    setMenuAktif(window.location.pathname);
  }, [menuAktif]);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light navbar-ppdb active position-fixed w-100 py-sm-3 py-1">
        <div className="container-fluid px-lg-5 px-4">
          <Link href={`/`}>
            <a className="navbar-brand">
              <div
                className="logo-ss"
                style={{ width: "40px", height: "40px" }}
              ></div>
              {/* <img src={`/img/ss-logo-white.png`} width={40} height={40} /> */}
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav navbar-nav-ppdb mx-auto mb-2 mb-lg-0">
              {headerMenus?.map((menu, idx) => {
                return (
                  <li
                    className="nav-item py-lg-1 py-2"
                    key={idx}
                    style={{ paddingLeft: "12px", paddingRight: "12px" }}
                  >
                    <a
                      href={menu.url}
                      {...(menuAktif == menu.url
                        ? {
                            className: "nav-link p-0 fw-bold active",
                            "aria-current": "page",
                          }
                        : { className: "nav-link p-0 fw-bold" })}
                      onClick={() => setMenuAktif(menu.url)}
                    >
                      {menu.text}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item d-lg-block d-flex flex-lg-row flex-column">
                <Link href={`/login`}>
                  <a className="btn btn-ss btn-outline-primary btn-outline-primary-ss  rounded-pill mt-1 me-lg-4 mb-lg-0 mb-3">
                    Uji Coba
                  </a>
                </Link>
              </li>
              <li className="nav-item d-lg-block d-flex flex-lg-row flex-column">
                <Link href={`/login`}>
                  <a className="btn btn-ss btn-primary-ss shadow-primary-ss rounded-pill mt-lg-1">
                    Daftar
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;