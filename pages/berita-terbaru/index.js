import { getBerita } from "client/BeritaClient";
import Layout from "components/Layout/Layout";
import CardBerita from "components/Berita/CardBerita";
import Dropdown from "components/Dropdown/Dropdown";
import AnimatePage from "components/Shared/AnimatePage/AnimatePage";
import { useDebounce } from "use-debounce";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import SkeletonBerita from "components/Skeleton/SkeletonBerita";

const index = ({ beritaTerbaru }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchDebounce] = useDebounce(searchInput, 1000);
  const [beritaUpdate, setBeritaUpdate] = useState(beritaTerbaru);
  const [loading, setLoading] = useState(false);
  const listDropdownValue = [
    {
      label: "Terbaru",
      value: "terbaru",
    },
    {
      label: "Terlama",
      value: "terlama",
    },
  ];

  const _get = async () => {
    setLoading(true);
    const { data } = await getBerita(
      `?_sort=id:DESC&apakah_berita=true&_limit=99&judul_contains=${searchDebounce}`
    );

    if (data) {
      setLoading(false);
      setBeritaUpdate(data);
    }
  };

  useEffect(() => {
    if (searchDebounce !== "" || searchDebounce !== null) {
      _get();
    }
  }, [searchDebounce]);

  return (
    <Layout isIndex>
      <AnimatePage>
        <>
          <div className="container">
            <div className="py-4">
              <div className="row">
                <div className="d-flex justify-content-between mb-4">
                  <h3 className="md-fs-5 color-dark fw-extrabold title-page position-relative mb-5 ps-0 ">
                    Berita Terbaru
                  </h3>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="mx-3">
                      <input
                        type="text"
                        className="form-control form-search form-search-mutasi rounded-pill fw-semibold border-secondary-ss w-100"
                        style={{ height: "42px", width: "100%" }}
                        id="exampleFormControlInput1"
                        placeholder="Cari Berita"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                      />
                    </div>
                    <Dropdown
                      listValue={listDropdownValue}
                      defaultValue={listDropdownValue?.[0]?.label}
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="row gy-4">
                {!loading
                  ? beritaUpdate?.map((d, idx) => (
                      <CardBerita data={d} key={idx} />
                    ))
                  : [1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => {
                      return <SkeletonBerita />;
                    })}
              </div>
            </div>
          </div>
        </>
      </AnimatePage>
    </Layout>
  );
};

export async function getServerSideProps() {
  const { data: beritaTerbaru } = await getBerita(
    `?_sort=id:DESC&apakah_berita=true&_limit=99`
  );

  return {
    props: {
      beritaTerbaru: beritaTerbaru || null,
    },
  };
}

export default index;
