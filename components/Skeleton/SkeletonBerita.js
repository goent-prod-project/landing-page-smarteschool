import Skeleton from "react-loading-skeleton";

const SkeletonBerita = () => {
  return (
    <a className="col-md-4 card-berita pointer">
      <div className="card card-ss mb-3">
        <div className="img-card img-fluid rounded-ss img-fit-cover">
          <Skeleton width={"100%"} height={100} />
        </div>
        <div
          className="card-img-overlay rounded-ss p-3 d-flex align-items-end"
          style={{
            height: "174px",
            background: `linear-gradient(
          to bottom,
          transparent,
          rgba(4, 0, 36, 0.75))`,
          }}
        >
          <div className="rounded-pill bg-white px-3 py-0">
            {/* <div className="img-card img-fluid rounded-ss img-fit-cover"> */}
            <img
              src="/img/logo-smarteschool.png"
              alt="logo-smarteschool"
              style={{ height: "12px" }}
            />
            {/* </div> */}
          </div>
        </div>
      </div>
      <p className="fs-18-ss md-fs-6 color-dark fw-extrabold mb-5 clamp-2 judul">
        <Skeleton className="mb-5" width={"100%"} height={100} /> <br />
        <Skeleton className="mb-5" width={"100%"} height={100} /> <br />
        <Skeleton className="mb-5" width={"100%"} height={100} /> <br />
        <Skeleton className="mb-5" width={"100%"} height={100} /> <br />
        <Skeleton className="mb-5" width={"100%"} height={100} /> <br />
        <Skeleton className="mb-5" width={"100%"} height={100} /> <br />
      </p>
      <p className="fs-14-ss fw-semibold">
        {" "}
        <Skeleton width={"60%"} height={100} />
      </p>
    </a>
  );
};

export default SkeletonBerita;
