import React from "react";
import CardEvent from "./components/Event/CardEvent";
import Layout from "./components/Layout/Layout";
import CardPanduan from "./components/Panduan/CardPanduan";
import AnimatePage from "./components/Shared/AnimatePage/AnimatePage";

const panduan = () => {
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
                Panduan Lengkap Smarteschool Versi 2022
              </h3>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-12">
              <div className="nav-faq card card-ss p-4 rounded-ss">
                <div className="row gx-4">
                  <div className="col-lg-12 col-md-12">
                    <CardPanduan />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12"></div>
          </div>
        </div>
      </AnimatePage>
    </Layout>
  );
};

export default panduan;
