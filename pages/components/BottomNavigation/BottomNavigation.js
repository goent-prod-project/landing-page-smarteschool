import Link from "next/link";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";

const BottomNavigation = () => {
  const router = useRouter();

  const [activeMenu, setActiveMenu] = useState(`/`);

  useEffect(() => {
    setActiveMenu(router.pathname);
  }, [router.pathname]);

  //   const headerData = headerMenus.filter((menu) => menu.isVisible);

  return (
    <>
      <a
        href={`https://api.whatsapp.com/send?phone=6281284538354&text=Halo CS Smarteschool`}
        target="_blank"
        className="floating-button rounded-circle shadow-primary-ss position-fixed d-lg-none d-block"
        style={{
          width: "60px",
          height: "60px",
          zIndex: "101",
          bottom: "90px",
          right: "16px",
        }}
      >
        <img src="/img/contact-floating-button.svg" alt="" />
      </a>
      <div
        className="bg-white w-100 position-fixed d-lg-none d-flex"
        style={{
          zIndex: "100",
          bottom: "0",
          boxShadow: "0 -5px 15px rgba(58, 65, 102, 0.1)",
        }}
      >
        <div className="container-fluid px-4 py-2">
          <div className="row">
            <div className="col d-flex align-items-center justify-content-center ps-0">
              <Link href={`/berita`}>
                <a className="text-decoration-none">
                  <div
                    className={
                      "d-flex justify-content-center align-items-center flex-column"
                    }
                  >
                    <img
                      height="24px"
                      src={`${
                        activeMenu === `/berita` ||
                        activeMenu === `/berita-terbaru` ||
                        activeMenu === `/artikel-terbaru`
                          ? "/img/icon-bottom-nav-berita-active.svg"
                          : "/img/icon-bottom-nav-berita.svg"
                      }`}
                      alt=""
                      className="mb-2"
                    />
                    <h6
                      className={`fs-12-ss fw-bold ${
                        activeMenu === `/berita` ||
                        activeMenu === `/berita-terbaru` ||
                        activeMenu === `/artikel-terbaru`
                          ? "color-primary"
                          : "color-secondary"
                      }`}
                    >
                      Berita
                    </h6>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col d-flex align-items-center justify-content-center">
              <a
                data-bs-toggle="modal"
                data-bs-target="#modalUjiCobaAkun"
                className="text-decoration-none"
              >
                <div
                  className={
                    "d-flex justify-content-center align-items-center flex-column"
                  }
                >
                  <img
                    height="24px"
                    src={`${
                      activeMenu === `/demo`
                        ? "/img/icon-bottom-nav-demo-active.svg"
                        : "/img/icon-bottom-nav-demo.svg"
                    }`}
                    alt=""
                    className="mb-2"
                  />
                  <h6
                    className={`fs-12-ss fw-bold ${
                      activeMenu === `/demo`
                        ? "color-primary"
                        : "color-secondary"
                    }`}
                  >
                    Demo
                  </h6>
                </div>
              </a>
            </div>
            <div className="col d-flex align-items-center justify-content-center">
              <Link href={`/about`}>
                <a className="text-decoration-none">
                  <div
                    className={
                      "d-flex justify-content-center align-items-center flex-column"
                    }
                  >
                    <img
                      height="24px"
                      src={`${
                        activeMenu === `/about`
                          ? "/img/icon-bottom-nav-about-active.png"
                          : "/img/icon-bottom-nav-about.png"
                      }`}
                      alt=""
                      className="mb-2"
                    />
                    <h6
                      className={`fs-12-ss fw-bold ${
                        activeMenu === `/about`
                          ? "color-primary"
                          : "color-secondary"
                      }`}
                    >
                      About
                    </h6>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col d-flex align-items-center justify-content-center">
              <Link href={`/event`}>
                <a className="text-decoration-none">
                  <div
                    className={
                      "d-flex justify-content-center align-items-center flex-column"
                    }
                  >
                    <img
                      height="24px"
                      src={`${
                        activeMenu === `/event`
                          ? "/img/icon-bottom-nav-event-active.svg"
                          : "/img/icon-bottom-nav-event.svg"
                      }`}
                      alt=""
                      className="mb-2"
                    />
                    <h6
                      className={`fs-12-ss fw-bold ${
                        activeMenu === `/event`
                          ? "color-primary"
                          : "color-secondary"
                      }`}
                    >
                      Event
                    </h6>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col d-flex align-items-center justify-content-center pe-0">
              <Link href={`/anggota`}>
                <a className="text-decoration-none">
                  <div
                    className={
                      "d-flex justify-content-center align-items-center flex-column"
                    }
                  >
                    <img
                      height="24px"
                      src={`${
                        activeMenu === `/anggota`
                          ? "/img/icon-bottom-nav-anggota-active.svg"
                          : "/img/icon-bottom-nav-anggota.svg"
                      }`}
                      alt=""
                      className="mb-2"
                    />
                    <h6
                      className={`fs-12-ss fw-bold ${
                        activeMenu === `/anggota`
                          ? "color-primary"
                          : "color-secondary"
                      }`}
                    >
                      Anggota
                    </h6>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavigation;
