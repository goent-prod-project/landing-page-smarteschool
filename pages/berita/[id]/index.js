import Link from "next/link";
import React, { useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import AnimatePage from "components/Shared/AnimatePage/AnimatePage";
import CardBerita from "components/Berita/CardBerita";
import CardSideBerita from "components/Berita/CardSideBerita";
import { getBerita } from "client/BeritaClient";
import { getDateTime, getImageUrl } from "utilities/AppUtils";
import ReactMarkdown from "react-markdown";
import { getImageContent } from "utilities/BeritaUtils";
import { useRouter } from "next/router";
import SocialMediaShared from "components/Shared/SocialMediaShare/SocialMediaShared";
import Layout from "components/Layout/Layout";

const index = ({ berita, beritaTerbaru, apakahBerita }) => {
  const router = useRouter();
  useEffect(() => {
    console.log(router.asPath);
  }, [router]);
  return (
    <Layout>
      <AnimatePage>
        <section
          className="banner-berita position-absolute"
          style={{
            background: `linear-gradient(
                to bottom,
                rgba(7, 0, 66, 0.6),
                rgba(4, 0, 36, 0.65)
          ), url(${getImageUrl(berita?.banner?.url)})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></section>
        <div className="container mt-4">
          <div className="row gy-4 d-flex justify-content-center">
            <div
              className={`d-flex justify-content-between
              `}
            >
              <Link href={`/berita`}>
                <a className="text-decoration-none fw-bolder position-relative text-white pointer">
                  <FaChevronLeft />
                  <span className="ms-2">Kembali</span>
                </a>
              </Link>
            </div>
            <div className="col-lg-9">
              <div className="card card-ss p-4 pb-5  mb-4">
                <h2 className="md-fs-5 sm-fs-6 color-dark fw-black mb-2">
                  {berita?.judul}
                </h2>
                <p className="md-fs-14-ss fw-semibold my-2 my-md-4">
                  {getDateTime(berita?.publishedAt)}
                </p>
                <div className="mt-4">
                  <img
                    src={getImageUrl(berita?.banner?.url)}
                    alt=""
                    className="img-fluid rounded-ss img-fit-cover mb-3"
                    style={{
                      width: "100%",
                    }}
                  />
                  <ReactMarkdown
                    className="color-dark fw-semibold md-fs-14-ss dangerous-html"
                    children={getImageContent(berita?.konten)}
                  />
                  <hr className="my-4" />
                  <h4 className="md-fs-5 sm-fs-6 title-border fw-extrabold mb-4 color-dark">
                    Bagikan
                  </h4>
                  <div>
                    <SocialMediaShared
                      news={{ title: berita?.judul, url: router.asPath }}
                    />
                    {/* <img
                      src="/img/icon-share-wa.svg"
                      alt="Whatsapp"
                      className="me-3 pointer"
                    />
                    <img
                      src="/img/icon-share-facebook.svg"
                      alt="Facebook"
                      className="me-3 pointer"
                    />
                    <img
                      src="/img/icon-share-instagram.svg"
                      alt="Instagram"
                      className="me-3 pointer"
                    />
                    <img
                      src="/img/icon-share-twitter.svg"
                      alt="Twitter"
                      className="pointer"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-0 mt-lg-4">
              <div
                className="card card-ss p-4 pb-5 mb-4 sticky-top"
                style={{ top: 107 }}
              >
                <h4 className="md-fs-5 sm-fs-6 title-border fw-extrabold mb-4 color-dark">
                  {apakahBerita ? "Berita" : "Artikel"} Terbaru
                </h4>

                {beritaTerbaru?.map(
                  (d, idx) => idx < 3 && <CardSideBerita data={d} key={idx} />
                )}

                <div className="text-center">
                  <Link
                    href={apakahBerita ? "/berita-terbaru" : "/artikel-terbaru"}
                  >
                    <a className="btn btn-ss btn-primary btn-primary-ss text-white fw-bold md-fs-14-ss rounded-pill text-center pointer">
                      {apakahBerita ? "Berita" : "Artikel"} Selengkapnya
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="py-4 pt-0 pt-md-4">
              <h4 className="md-fs-5 sm-fs-6 title-border fw-extrabold mb-4 color-dark">
                {apakahBerita ? "Berita" : "Artikel"} Lainnya
              </h4>
              <div className="row gy-4">
                {beritaTerbaru?.map(
                  (d, idx) => idx > 2 && <CardBerita data={d} key={idx} />
                )}
              </div>
            </div>
          </div>
        </div>
      </AnimatePage>
    </Layout>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const { data: berita } = await getBerita(`?slug=${id}`);
  const { data: beritaTerbaru } = await getBerita(
    `?_sort=id:DESC&apakah_berita=${berita?.[0]?.apakahBerita}&_limit=9`
  );

  return {
    props: {
      berita: berita?.[0] || null,
      beritaTerbaru: beritaTerbaru || null,
      apakahBerita: berita?.[0]?.apakahBerita,
    },
  };
}

export default index;
