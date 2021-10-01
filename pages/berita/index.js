import Link from "next/link";
import { FaBook, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import AnimatePage from "../components/Shared/AnimatePage/AnimatePage";
import CardBerita from "../components/Berita/CardBerita";
import { getBerita } from "../../client/BeritaClient";

const index = ({ berita, artikel }) => {
  return (
    <Layout isIndex>
      <AnimatePage>
        <>
          <div className="container">
            <div className="py-4">
              <div className="row">
                <div className="d-flex justify-content-between mb-md-0 mb-3">
                  <h3 className="md-fs-5 color-dark fw-extrabold title-page position-relative mb-4 mb-md-5 ps-0 order-1">
                    Berita Terbaru
                  </h3>
                  <Link href={`/berita-terbaru`}>
                    <a className="text-decoration-none fw-bolder position-relative color-primary pointer mb-4 d-block order-2 d-flex justify-content-end align-items-center md-fs-14-ss">
                      <span className="me-2">Lihat Semua</span>
                      <FaChevronRight />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="row gy-4">
                {berita?.map((d, idx) => (
                  <CardBerita data={d} key={idx} />
                ))}
              </div>
            </div>
            <div className="py-4">
              <div className="row">
                <div className="d-flex justify-content-between mb-md-0 mb-3">
                  <h3 className="md-fs-5 color-dark fw-extrabold title-page position-relative mb-4 mb-md-5 ps-0 order-1">
                    Artikel Terbaru
                  </h3>
                  <Link href={`/artikel-terbaru`}>
                    <a className="text-decoration-none fw-bolder position-relative color-primary pointer mb-4 d-block order-2 d-flex justify-content-end align-items-center md-fs-14-ss">
                      <span className="me-2">Lihat Semua</span>
                      <FaChevronRight />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="row gy-4">
                {artikel?.map((d, idx) => (
                  <CardBerita data={d} key={idx} />
                ))}
              </div>
            </div>
          </div>
        </>
      </AnimatePage>
    </Layout>
  );
};

export async function getServerSideProps() {
  const { data: berita } = await getBerita(
    "?_sort=id:DESC&apakah_berita=true&_limit=6"
  );
  const { data: artikel } = await getBerita(
    "?_sort=id:DESC&apakah_berita=false&_limit=6"
  );

  return {
    props: {
      berita: berita || null,
      artikel: artikel || null,
    },
  };
}

export default index;
