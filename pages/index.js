import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { getBanner } from "client/BannerClient";
import { getFaq } from "client/FaqClient";
import { getImageUrl } from "utilities/AppUtils";
import Layout from "components/Layout/Layout";
import SectionMenuDesktop from "components/SectionMenu/SectionMenuDesktop";
import SectionMenuMobile from "components/SectionMenu/SectionMenuMobile";
import SectionPanduanProposalDesktop from "components/SectionPanduanProposal/SectionPanduanProposalDesktop";
import SectionPanduanProposalMobile from "components/SectionPanduanProposal/SectionPanduanProposalMobile";
import AnimatePage from "components/Shared/AnimatePage/AnimatePage";
import Slider from "components/Slider/Slider";
import SectionTestimoni from "components/SectionTestimoni/SectionTestimoni";
import { getTestimoni } from "client/TestimoniClient";
import SectionLihatPaket from "components/SectionLihatPaket/SectionLihatPaket";

export default function Home({ banner, faq, testimoni }) {
  const [sliderWidth, setsliderWidth] = useState(0);
  const [collapseOpen, setcollapseOpen] = useState({});

  useEffect(() => {
    setsliderWidth(window.innerWidth);

    window.addEventListener("resize", () => {
      setsliderWidth(window.innerWidth);
    });
  }, []);

  return (
    <Layout isIndex isLandingPage={false}>
      <AnimatePage>
        <div className="slider">
          <Slider>
            {banner?.map((d, idx) => (
              <div
                key={idx}
                className="slider-body position-absolute"
                data-src={
                  sliderWidth > 576
                    ? getImageUrl(d.bannerDesktop?.url)
                    : sliderWidth > 424
                    ? getImageUrl(d.bannerMobile?.url)
                    : getImageUrl(d.bannerMobileExtra?.url)
                }
              >
                <a href={d?.link} target="_blank"></a>
              </div>
            ))}
          </Slider>
        </div>

        {/* Section Panduan dan Proposal Start */}

        <div className="d-md-block d-none">
          <SectionPanduanProposalDesktop />
        </div>

        <div className="d-md-none d-block">
          <SectionPanduanProposalMobile />
        </div>

        {/* Section Panduan dan Proposal End */}

        {/* Section Menu Start*/}

        <div className="d-md-block d-none">
          <SectionMenuDesktop />
        </div>
        <div className="d-md-none d-block">
          <SectionMenuMobile />
        </div>

        {/* Section Menu End */}

        {/* Section Lihat Paket Start*/}
        <div className="">
          <SectionLihatPaket />
        </div>
        {/* Section Lihat Paket End*/}

        {/* Section Panduan Pengguna Start */}
        {/* <SectionPanduanPengguna /> */}
        {/* Section Panduan Pengguna Start */}

        {/* Section FaQ Start */}

        <div className="section py-md-5 py-4">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12 text-center">
                <h1 className="fs-1 md-fs-5 sm-fs-6 fw-extrabold color-dark mb-0">
                  Pertanyaan yang Sering Diajukan
                </h1>
              </div>
            </div>

            <div className="row justify-content-center gy-4 mb-4">
              {faq?.map((d, idx) => (
                <div className="col-md-10">
                  <div className="card card-ss card-biaya-pendaftaran p-0">
                    <div className="card-header-ss rounded-ss d-flex justify-content-between align-items-between px-4 py-4">
                      <h4 className="fw-extrabold color-dark mb-0 mt-2 md-fs-5 sm-fs-6">
                        {d?.judulFaq}
                      </h4>
                      <div
                        className={`btn-collapse ${
                          collapseOpen[idx + 1] ? "active" : ""
                        }`}
                        onClick={() =>
                          setcollapseOpen({
                            ...collapseOpen,
                            [idx + 1]: !collapseOpen[idx + 1],
                          })
                        }
                      >
                        <a
                          data-bs-toggle="collapse"
                          href={`#faq-${idx + 1}`}
                          role="button"
                          aria-expanded="false"
                          aria-controls={`faq-${idx + 1}`}
                        >
                          <span
                            class="d-flex justify-content-center align-items-center shadow-primary-ss rounded-circle p-1 shadow-primary-ss bg-primary"
                            style={{ width: "40px", height: "40px" }}
                          >
                            <img
                              className="dropdown"
                              src="/img/arrow-bottom.svg"
                              alt=""
                            />
                          </span>
                        </a>
                      </div>
                    </div>

                    <div class="collapse" id={`faq-${idx + 1}`}>
                      <hr className="mb-4 mt-0" />
                      <div class="card-body card-footer-ss pb-4 px-4 pt-0 md-fs-14-ss dangerous-html">
                        <ReactMarkdown children={d?.kontenFaq} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="row">
              <div className="col-md-12 text-center">
                <Link href="/faq">
                  <a className="btn btn-ss btn-primary btn-primary-ss fw-bold shadow-primary-ss bg-gradient-primary rounded-pill fs-18-ss md-fs-6 sm-14-ss">
                    Lihat Semua Pertanyaan
                  </a>
                </Link>
              </div>
            </div> */}
          </div>
        </div>

        {/* Section FaQ End */}

        {/* Section Testimoni Start */}
        <SectionTestimoni data={testimoni} />
        {/* Section Testimoni End */}
      </AnimatePage>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { data: banner } = await getBanner(`?_sort=id:DESC`);
  const { data: faq } = await getFaq(`?_sort=id:ASC`);
  const { data: testimoni } = await getTestimoni(`?_sort=id:ASC`);

  return {
    props: {
      banner: banner || null,
      faq: faq || null,
      testimoni: testimoni || null,
    },
  };
}
