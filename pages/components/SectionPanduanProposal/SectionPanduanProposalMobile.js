import Head from "next/head";
import { useRouter } from "next/router";
import { FaEnvelope, FaFax, FaPhone } from "react-icons/fa";
import Link from "next/link";

const SectionPanduanProposalMobile = ({}) => {
  const router = useRouter();

  return (
    <>
      <div className="section py-4 pb-0" style={{ backgroundColor: "#F6FAFF" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="p-2 rounded-ss bg-soft-primary">
                <div className="row gy-4">
                  <div className="col-4 text-center">
                    <Link href="/buku-panduan">
                      <a className="text-decoration-none smarte-menu">
                        {" "}
                        <div className="">
                          <div className="flex-column align-items-center p-2">
                            <img
                              src="/img/icon-buku-panduan.svg"
                              alt="icon-buku-panduan"
                              width={`40px`}
                              height={`40px`}
                              className="mb-lg-0 mb-3"
                            />
                            <div className="d-flex justify-content-center align-items-center flex-column">
                              <h6
                                className="fs-10-ss color-dark fw-bold"
                                style={{ marginBottom: "2px" }}
                              >
                                Buku
                              </h6>
                              <h6 className="fs-10-ss color-dark fw-bold mb-0">
                                Panduan
                              </h6>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className="col-4 text-center border border-white border-3 border-top-0 border-bottom-0">
                    <a
                      className="text-decoration-none smarte-menu"
                      href="https://www.youtube.com/channel/UC5mNaPBo672Z-szp3k1QU_g/videos"
                      target="_blank"
                    >
                      {" "}
                      <div className="">
                        <div className="flex-column align-items-center p-2">
                          <img
                            src="/img/icon-video-panduan.svg"
                            alt="icon-video-panduan"
                            width={`40px`}
                            height={`40px`}
                            className="mb-lg-0 mb-3"
                          />
                          <div className="d-flex justify-content-center align-items-center flex-column">
                            <h6
                              className="fs-10-ss color-dark fw-bold"
                              style={{ marginBottom: "2px" }}
                            >
                              Video
                            </h6>
                            <h6 className="fs-10-ss color-dark fw-bold mb-0">
                              Panduan
                            </h6>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-4 text-center">
                    <Link href={`/proposal-smarteschool`}>
                      <a className="text-decoration-none smarte-menu">
                        {" "}
                        <div className="">
                          <div className="flex-column align-items-center p-2">
                            <img
                              src="/img/icon-proposal-smarteschool.svg"
                              alt="icon-proposal-smarteschool"
                              width={`40px`}
                              height={`40px`}
                              className="mb-lg-0 mb-3"
                            />
                            <div className="d-flex justify-content-center align-items-center flex-column">
                              <h6
                                className="fs-10-ss color-dark fw-bold"
                                style={{ marginBottom: "2px" }}
                              >
                                Proposal
                              </h6>
                              <h6 className="fs-10-ss color-dark fw-bold mb-0">
                                Smarteschool
                              </h6>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionPanduanProposalMobile;
