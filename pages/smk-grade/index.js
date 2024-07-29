import { Pagination } from "antd";
import { getKabupaten, getProvinsi, getSmkGrade } from "client/SmkGradeClient";
import Layout from "components/Layout/Layout";
import AnimatePage from "components/Shared/AnimatePage/AnimatePage";
import SelectShared from "components/Shared/SelectShared/SelectShared";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const initialFormData = {
  kabupaten: "",
  status: "",
  grade: "",
};

const index = ({ page, search }) => {
  const [formData, setFormData] = useState(initialFormData);
  const router = useRouter();
  const [getDataGrade, setGetDataGrade] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [dataKabupaten, setDataKabupaten] = useState([]);
  const [searchDebounce] = useDebounce(searchInput, 1000);
  const [currentPage, setCurrentPage] = useState(1);

  const listStatus = [
    { label: "Negeri", value: "negeri" },
    { label: "Swasta", value: "swasta" },
  ];

  const listGrade = [
    { label: "Grade A", value: "A" },
    { label: "Grade B", value: "B" },
    { label: "Grade C", value: "C" },
    { label: "Grade D", value: "D" },
  ];

  const onChange = (page) => {
    setCurrentPage(page);

    router.push(`${router.pathname}?page=${page}`);
  };

  const _getKabupaten = async () => {
    const { data, error } = await getKabupaten("010000");

    if (data) {
      setDataKabupaten(
        data?.kabupaten?.map((d) => {
          return { label: d?.kabupatenKota, value: d?.kodeKabKota };
        })
      );
    }
  };

  const _getGrade = async () => {
    const { data, error } = await getSmkGrade({
      page: searchInput != "" ? 1 : page,
      search: searchInput,
      kabupaten: formData?.kabupaten,
      status: formData?.status,
      grade: formData?.grade,
    });

    if (data) {
      setGetDataGrade(data?.sekolah);
    }
  };

  useEffect(() => {
    _getKabupaten();
  }, []);

  useEffect(() => {
    _getGrade();
  }, [
    page,
    searchDebounce,
    formData?.kabupaten,
    formData?.status,
    formData?.grade,
  ]);

  useEffect(() => {
    router.push(`${router.pathname}`, {
      query: {
        page,
        search: searchDebounce,
        kabupaten: formData?.kabupaten,
        status: formData?.status,
        grade: formData?.grade,
      },
    });
  }, [
    page,
    searchDebounce,
    formData?.kabupaten,
    formData?.status,
    formData?.grade,
  ]);

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
                SMK DKI Grade Smart E School
              </h3>
            </div>
          </div>
          <div
            className="card card-ss p-0 py-4 "
            // style={{
            //   marginTop: "-32px",
            // }}
          >
            <div className="card-body p-0">
              <div className="row px-4 mb-4">
                <div className="col-md-3 d-flex align-items-center">
                  <h4 className="fw-extrabold color-dark mb-md-0 mb-4">
                    Daftar SMK
                  </h4>
                </div>
                <div className="col-md-9 mb-md-0 mb-4">
                  <div className="d-flex justify-content-between align-items-center gap-3">
                    {/* <div className="card-select-smk-grade"> */}
                    <SelectShared
                      placeholder="Kabupaten/Kota"
                      className="rounded-pill w-75"
                      options={dataKabupaten}
                      handleChangeSelect={(e) =>
                        setFormData({ kabupaten: e?.value })
                      }
                      name="kabupaten"
                      value={formData?.kabupaten}
                    />
                    {/* </div>   */}
                    <SelectShared
                      placeholder="Status"
                      className="rounded-pill w-75"
                      options={listStatus}
                      handleChangeSelect={(e) =>
                        setFormData({ status: e?.value })
                      }
                      name="status"
                      value={formData?.status}
                    />
                    <SelectShared
                      placeholder="Grade"
                      className="rounded-pill w-75"
                      options={listGrade}
                      handleChangeSelect={(e) =>
                        setFormData({ grade: e?.value })
                      }
                      name="grade"
                      value={formData?.grade}
                    />
                    <input
                      type="text"
                      className="form-control form-search rounded-pill fw-semibold border-secondary-ss "
                      style={{ height: "42px" }}
                      id="exampleFormControlInput1"
                      placeholder="Cari"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <table className="table-ss mt-4">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Kabupaten/Kota</th>
                    <th>Status</th>
                    <th>Grade</th>
                    <th>Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  {getDataGrade?.data?.map((d, idx) => (
                    <tr key={idx}>
                      <td data-th="No">{idx + 1}</td>
                      <td data-th="Nama">{d?.nama}</td>
                      <td data-th="Kabupaten/Kota">{d?.kabupaten}</td>
                      <td data-th="Status">{d?.status}</td>
                      <td data-th="Grade">
                        <div
                          className={`label-ss border border-1 ${
                            d?.grade == "A"
                              ? "label-light-danger-ss"
                              : d?.grade == "B"
                              ? "label-light-warning-ss"
                              : d?.grade == "C"
                              ? "label-light-success-ss"
                              : "label-light-primary-ss"
                          }  rounded-pill text-center w-75`}
                        >
                          Grade {d?.grade}
                        </div>
                      </td>
                      <td data-th="Keterangan">
                        {d?.grade == "A"
                          ? "Penggunaan SES PRO"
                          : d?.grade == "B"
                          ? "Bimtek Operator"
                          : d?.grade == "C"
                          ? "Sosilisasi"
                          : "Belum Berpartispasi"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="d-flex justify-content-center my-4">
                <Pagination
                  current={currentPage}
                  total={getDataGrade?.total}
                  onChange={onChange}
                  showSizeChanger={false}
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatePage>
    </Layout>
  );
};

export async function getServerSideProps({ query: { page, search } }) {
  return {
    props: {
      page: page || 1,
      search: search || "",
    },
  };
}

export default index;
