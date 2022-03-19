import React, { useState } from "react";
import { FaCloudDownloadAlt, FaWhatsapp } from "react-icons/fa";
import TextareaAutosize from "react-textarea-autosize";
import ReactiveButton from "reactive-button";
import NewModal from "../Shared/NewModal/NewModal";
import SelectShared from "../Shared/SelectShared/SelectShared";

const ModalGabungSmarteschool = ({
  formData,
  handleChangeForm,
  lampiran,
  onSubmit,
  success,
}) => {
  return (
    <NewModal
      removeFooter={success}
      success={success}
      modalId="modalGabungSmarteschool"
      title={
        <>
          {success ? (
            ""
          ) : (
            <>
              <h4 className="mb-1 fw-extrabold">Daftar Program GPDS</h4>
              <span className="fs-6 fw-normal">
                Isi informasi dibawah untuk mengikuti program GPDS
              </span>
            </>
          )}
        </>
      }
      content={
        <>
          {success ? (
            <>
              <h4 className="fw-extrabold text-center color-dark mb-0">
                Lupa Password
              </h4>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-5 col-sm-6 col-8">
                  <img
                    src={`/img/account-created.png`}
                    alt="illustration"
                    className="img-fluid mb-4"
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-10 text-center">
                  <h6 className="fs-18-ss fw-bold color-dark">
                    Anda dapat memulai program GPDS
                  </h6>
                  <p className="fw-semibold md-fs-14-ss">
                    Masuk ke Smarteschool sekolah Anda dengan menggunakan akun
                  </p>
                </div>
                <div className="col-md-7 mb-4">
                  <div className="rounded-ss bg-very-soft-secondary w-100 p-3">
                    <table>
                      <tr>
                        <td className="align-text-top" style={{ width: "50%" }}>
                          <p className="mb-2 fs-14-ss">Jenis Akun</p>
                        </td>
                        <td className="align-text-top" style={{ width: "5%" }}>
                          <p className="mb-2 fs-14-ss fw-bold">:</p>
                        </td>
                        <td className="align-text-top">
                          <p className="mb-2 fs-14-ss fw-bold">
                            Manajemen Sekolah
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-text-top" style={{ width: "50%" }}>
                          <p className="mb-2 fs-14-ss">Nomor WhatsApp </p>
                        </td>
                        <td className="align-text-top" style={{ width: "5%" }}>
                          <p className="mb-2 fs-14-ss fw-bold">:</p>
                        </td>
                        <td className="align-text-top">
                          <p className="mb-2 fs-14-ss fw-bold">081212312341</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-text-top" style={{ width: "50%" }}>
                          <p className="mb-2 fs-14-ss mb-0">Password</p>
                        </td>
                        <td className="align-text-top" style={{ width: "5%" }}>
                          <p className="mb-2 fs-14-ss mb-0 fw-bold">:</p>
                        </td>
                        <td className="align-text-top">
                          <p className="mb-2 fs-14-ss mb-0 fw-bold">
                            *********aa
                          </p>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className="col-md-7">
                  <a
                    href="https://web.whatsapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ss btn-primary btn-primary-ss w-100 rounded-ss fw-bold mb-3"
                  >
                    Materi Pelatihan GPDS
                  </a>
                  <button className="btn-link-smarteschool btn-link-demo btn color-primary rounded-ss w-100 rounded-ss fw-bold py-2">
                    <img
                      src="/img/icon-smarteschool.png"
                      alt="icon"
                      style={{ width: "24px", height: "24px" }}
                      className="me-2"
                    />{" "}
                    Menuju Smarteschool
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mb-4">
                <label className="form-label">Nama</label>
                <input
                  className="form-control"
                  autoComplete="off"
                  placeholder="Tuliskan nama"
                  type="text"
                  name="nama"
                  onChange={handleChangeForm}
                  value={formData?.nama}
                />
              </div>
              <div className="mb-4">
                <label className="form-label">Nomor WhatsApp</label>
                <input
                  className="form-control"
                  autoComplete="off"
                  placeholder="Tuliskan nomor WhatsApp"
                  type="text"
                  name="whatsapp"
                  onChange={handleChangeForm}
                  value={formData?.whatsapp}
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Password</label>
                <input
                  className="form-control mb-2"
                  id="passwordBaru"
                  placeholder="Masukkan Password Baru"
                  // value={formData.passwordBaru}
                  // onChange={(e) => handleChangePassword(e)}
                  // type={formData.lihatPasswordBaru ? "text" : "password"}
                  type={`password`}
                  autocomplete="new-password"
                />
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="lihatPasswordBaru"
                    // onChange={(e) => handleChangePassword(e)}
                  />
                  <label
                    className="form-check-label fs-14-ss color-secondary fw-semibold"
                    htmlFor="lihatPasswordBaru"
                  >
                    Tampilkan password
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label">Konfirmasi Password</label>
                <input
                  className={`form-control mb-2`}
                  // className={`form-control mb-2 ${
                  //   formData.passwordBaru !== formData.konfirmasiPassword
                  //     ? "form-konfirmasi-salah"
                  //     : ""
                  // }`}
                  id="konfirmasiPassword"
                  placeholder="Konfirmasi Password Baru"
                  // value={formData.konfirmasiPassword}
                  // onChange={(e) => handleChangePassword(e)}
                  // type={formData.lihatKonfirmasiPassword ? "text" : "password"}
                  type={`password`}
                  autocomplete="new-password"
                />
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="lihatKonfirmasiPassword"
                    // onChange={(e) => handleChangePassword(e)}
                  />
                  <label
                    className="form-check-label fs-14-ss color-secondary fw-semibold"
                    htmlFor="lihatKonfirmasiPassword"
                  >
                    Tampilkan password
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label">Jabatan</label>
                <input
                  className="form-control"
                  autoComplete="off"
                  placeholder="Pilih jabatan"
                  type="text"
                  name="jabatan"
                  onChange={handleChangeForm}
                  value={formData?.jabatan}
                />
              </div>
              <div className="mb-4">
                <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label mb-md-0 mb-2"
                  >
                    Surat Pernyataan
                  </label>
                  <a
                    href="/surat-pernyataan-smarteschool.docx"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="py-2 px-4 bg-soft-primary rounded-pill fs-14-ss color-primary text-decoration-none fw-semibold"
                  >
                    <FaCloudDownloadAlt className="me-2" />
                    Download Template
                  </a>
                </div>
                <label
                  for="formFile"
                  class="w-100 file-input rounded-ss p-3 pointer mb-4"
                >
                  <div className="d-flex align-items-center justify-content-center ">
                    <img
                      src="/img/icon-upload-file.svg"
                      alt="icon-upload"
                      className="me-4"
                    />
                    <p className="fw-semibold color-secondary fs-18-ss mb-0">
                      Klik untuk mengunggah{" "}
                      <span className="color-primary">Surat Pernyataan</span>
                    </p>
                  </div>
                </label>
                <input
                  class="form-control d-none"
                  type="file"
                  id="formFile"
                  ref={lampiran}
                  onChange={(e) =>
                    handleChangeForm({
                      target: { name: "lampiran", value: e.target.files[0] },
                    })
                  }
                  accept="application/pdf"
                />
                {formData?.lampiran && (
                  <div
                    className="bg-soft-primary rounded-ss p-3 d-flex align-items-center w-100 pointer"
                    style={{ minHeight: "79px" }}
                  >
                    <img
                      width="40px"
                      height="40px"
                      src="/img/icon-file.svg"
                      alt="icon-file"
                      className="me-3"
                    />
                    <span className="fw-bold color-dark text-break">
                      {lampiran.current.files[0].name}
                    </span>
                  </div>
                )}
              </div>
            </>
          )}
        </>
      }
      submitButton={
        <ReactiveButton
          //   buttonState={formData.btnBio}
          color={"primary"}
          idleText={"Kirim"}
          loadingText={"Diproses"}
          successText={"Berhasil"}
          errorText={"Gagal"}
          type={"button"}
          // data-bs-dismiss="modal"
          className={"btn btn-primary"}
          onClick={() => {
            onSubmit();
          }}
        />
      }
    />
  );
};

export default ModalGabungSmarteschool;
