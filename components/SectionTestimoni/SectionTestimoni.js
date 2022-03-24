import Head from "next/head";
import { useRouter } from "next/router";
import { FaEnvelope, FaFax, FaPhone, FaQuoteLeft } from "react-icons/fa";
import Link from "next/link";
import Slider from "react-slick";
import { getImageUrl } from "utilities/AppUtils";

const SectionTestimoni = ({ data = [] }) => {
  const router = useRouter();

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="section py-md-5 py-4 section-testimoni">
        <div className="container">
          <div className="row mb-md-5 mb-4">
            <div className="col-md-12 text-center">
              <h1 className="fs-1 md-fs-5 sm-fs-6 fw-extrabold color-dark">
                Cerita Mereka tentang Smarteschool
              </h1>
            </div>
          </div>
        </div>
        <div className="row g-4 mx-4 px-4">
          <Slider {...settings}>
            {data?.map((d) => {
              return (
                <div className="col-md-4 my-4 mb-5">
                  <div
                    className="card card-ss rounded-ss p-4  d-flex flex-column justify-content-between mx-3"
                    style={{ minHeight: "450px" }}
                  >
                    <div className="">
                      <div className="text-center mb-4">
                        <img
                          src={getImageUrl(d.logo?.url)}
                          alt=""
                          width={60}
                          height={60}
                          className="img-fit-contain mx-auto"
                        />
                      </div>
                      <h4 className="color-primary">
                        <FaQuoteLeft />
                      </h4>
                      <i className="color-dark fw-semibold">{d?.testimoni}</i>
                    </div>
                    <div className="mt-auto">
                      <hr className="my-4" />
                      <div className="d-flex">
                        <img
                          src={getImageUrl(d.avatar?.url)}
                          alt=""
                          className="img-fit-cover rounded-circle me-4"
                          width={50}
                          height={50}
                        />
                        <div className="">
                          <h6 className="fw-extrabold color-dark mt-1 mb-1 clamp-1">
                            {d?.nama}
                          </h6>
                          <h6 className="fs-14-ss fw-semibold mb-2 clamp-1">
                            {d?.jabatan}
                          </h6>
                          <i className="color-primary fw-semibold fs-12-ss mb-0 clamp-1">
                            {d?.asalSekolah}
                          </i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SectionTestimoni;
