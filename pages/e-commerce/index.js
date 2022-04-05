import { getCommerce } from "client/ECommerceClient";
import CardECommerce from "components/ECommerce/CardECommerce";
import Layout from "components/Layout/Layout";
import AnimatePage from "components/Shared/AnimatePage/AnimatePage";
import React from "react";

const index = ({ commerce }) => {
  console.log(commerce);
  return (
    <Layout>
      <AnimatePage>
        <section
          className="banner banner-event position-absolute"
          style={{
            height: "220px",
            background: `url("/img/banner-event.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "center",
            left: "0",
            right: "0",
          }}
        ></section>

        <div
          className="container pt-5 position-relative"
          style={{ zIndex: "1" }}
        >
          <div className="row mb-5">
            <div className="col-md-12 text-center">
              <h3 className="fw-extrabold text-white mb-0 md-fs-5 sm-fs-6">
                Produk Smarteschool yang sudah terdaftar di SIPLah{" "}
              </h3>
            </div>
          </div>
          <div className={`row g-4`}>
            {/* {dataEvent?.length == 0 && (
              <>
                {" "}
                <div className="col-sm-7 col-10 text-center">
                  <img
                    src="/img/empty-state-jadwal.png"
                    alt=""
                    className="img-fluid mb-md-0 mb-2"
                  />
                </div>
                <div className="col-12 text-center">
                  <h4 className="color-dark fw-black mb-2">
                    {(nav == "berlangsung" || !nav) &&
                      "Tidak Ada Event Yang Berlangsung"}
                    {nav == "akan-datang" && "Jadwal Event Kosong"}
                    {nav == "selesai" && "Belum Ada Event Yang Selesai"}
                  </h4>
                  <p className="fw-bold">
                    {(nav == "berlangsung" || !nav) && (
                      <>
                        Lihat pada tab {""}
                        <Link href={`/event?nav=akan-datang`}>
                          <a className="color-primary text-decoration-none">
                            Akan Datang
                          </a>
                        </Link>{" "}
                        untuk mengecek jadwal event
                      </>
                    )}
                    {nav == "selesai" && (
                      <>
                        Lihat pada tab{" "}
                        <Link href={`/event?nav=berlangsung`}>
                          <a className="color-primary text-decoration-none">
                            Berlangsung
                          </a>
                        </Link>{" "}
                        untuk mengikuti event
                      </>
                    )}
                  </p>
                </div>
              </>
            )} */}

            {commerce?.map((d, idx) => (
              <div className="col-lg-4 col-md-6">
                <CardECommerce data={d} key={idx} />
              </div>
            ))}
          </div>
        </div>

        {/* <section
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
            <div className="row gy-4 d-flex justify-content-lg-between justify-content-center">
              <div className="col-lg-6 order-2 order-lg-1 pt-4">
                <h2 className="fw-black text-white lg-fs-4 md-fs-5 sm-fs-6">
                  Bersama Mendigitalkan Komunitas Pendidikan Indonesia
                </h2>
                <div className="d-flex">
                  <div className="me-4 d-flex align-items-center">
                    <img
                      src="/img/icon-program-sekolah.svg"
                      alt=""
                      className="me-2"
                    />
                    <h4 className="fw-bold lg-fs-5 md-fs-6 text-white mb-0">
                      263 Sekolah
                    </h4>
                  </div>
                  <div className="d-flex align-items-center">
                    <img
                      src="/img/icon-program-guru.svg"
                      alt=""
                      className="me-2"
                    />
                    <h4 className="fw-bold lg-fs-5 md-fs-6 text-white mb-0">
                      7823 Guru
                    </h4>
                  </div>
                </div>
                <div>
                  <p className="fs-18-ss text-white fw-regular mt-4 lg-fs-6 md-fs-14-ss">
                    Sudah saatnya bagi anda untuk menjadi bagian dari program
                    Guru Penggerak Digitalisasi Sekolah untuk mendapatkan
                    pelatihan khusus dan menjadi guru penggerak digital bersama
                    Smarteschool.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 order-1 order-lg-2">
                <img src="/img/icon-program.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </section> */}
      </AnimatePage>
    </Layout>
  );
};

export async function getServerSideProps({}) {
  const { data: commerce } = await getCommerce(`?_sort=id:ASC`);

  return {
    props: {
      commerce: commerce || [],
    },
  };
}
export default index;
