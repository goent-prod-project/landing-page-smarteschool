import { getBerita } from "client/BeritaClient";
import CardBerita from "components/Berita/CardBerita";
import Dropdown from "components/Dropdown/Dropdown";
import Layout from "components/Layout/Layout";
import AnimatePage from "components/Shared/AnimatePage/AnimatePage";

const index = ({ artikelTerbaru }) => {
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
  return (
    <Layout isIndex>
      <AnimatePage>
        <>
          <div className="container">
            <div className="py-4">
              <div className="row">
                <div className="d-flex justify-content-between mb-4">
                  <h3 className="md-fs-5 color-dark fw-extrabold title-page position-relative mb-5 ps-0 ">
                    Artikel Terbaru
                  </h3>
                  <div className="">
                    <Dropdown
                      listValue={listDropdownValue}
                      defaultValue={listDropdownValue?.[0]?.label}
                      //   onChange={handleChangeDropdown}
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="row gy-4">
                {artikelTerbaru?.map((d, idx) => (
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
  const { data: artikelTerbaru } = await getBerita(
    `?_sort=id:DESC&apakah_berita=false&_limit=99`
  );

  return {
    props: {
      artikelTerbaru: artikelTerbaru || null,
    },
  };
}

export default index;
