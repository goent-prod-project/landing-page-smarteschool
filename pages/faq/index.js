import { Tooltip } from "antd";
import React, { useState } from "react";
import CardEvent from "../components/Event/CardEvent";
import SliderNavFaq from "../components/Faq/SliderNavFaq";
import Layout from "../components/Layout/Layout";
import AnimatePage from "../components/Shared/AnimatePage/AnimatePage";

const index = ({ nav }) => {
  const [type, setType] = useState("");

  const navFaq = [
    {
      img: "/img/icon-faq-role-umum.svg",
      name: "Umum",
      type: "umum",
    },
    {
      img: "/img/icon-faq-role-guru.svg",
      name: "Guru",
      type: "guru",
    },
    {
      img: "/img/icon-faq-role-siswa.svg",
      name: "Siswa",
      type: "siswa",
    },
    {
      img: "/img/icon-faq-role-orang-tua.svg",
      name: "Orang Tua",
      type: "orangTua",
    },
    {
      img: "/img/icon-faq-role-kepsek.svg",
      name: "Kepsek",
      type: "kepsek",
    },
    {
      img: "/img/icon-faq-role-manajemen.svg",
      name: "Manajemen",
      type: "manajemen",
    },
    {
      img: "/img/icon-faq-role-alumni.svg",
      name: "Alumni",
      type: "alumni",
    },
    {
      img: "/img/icon-faq-role-perusahaan.svg",
      name: "Perusahaan",
      type: "perusahaan",
    },
  ];

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
                Pertanyaan yang Sering Diajukan
              </h3>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-12">
              <div className="nav-faq card card-ss p-4 rounded-ss">
                <div className="row gx-4">
                  {navFaq.map((d, idx) => (
                    <div className="col">
                      <a
                        className="d-flex flex-column align-items-center"
                        onClick={() => setType(d.type)}
                      >
                        <img
                          src={
                            d.type == type || (!type && idx == 0)
                              ? `${d.img.split(".")[0] + "-active"}.svg`
                              : d.img
                          }
                          alt="icon-faq"
                          className="mb-2"
                        />
                        <h6
                          className={`fw-bold  mb-0 ${
                            d.type == type || (!type && idx == 0)
                              ? "color-primary"
                              : "color-dark"
                          }`}
                        >
                          {d.name}
                        </h6>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <SliderNavFaq data={navFaq} />
            </div>
          </div>
        </div>
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
