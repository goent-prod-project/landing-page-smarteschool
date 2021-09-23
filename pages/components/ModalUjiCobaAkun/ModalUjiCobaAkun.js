import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import ReactiveButton from "reactive-button";
import NewModal from "../Shared/NewModal/NewModal";
import UploadBanner from "../Shared/UploadBanner/UploadBanner";

const ModalUjiCobaAkun = ({ handleChangeForm, formData, _postProfilUser }) => {
  return (
    <NewModal
      modalId="modalUjiCobaAkun"
      title={
        <>
          <h4 className="mb-1 fw-extrabold">Informasi Data Diri </h4>
          <span className="fs-6 fw-normal">
            Isi informasi untuk mendapatkan akun virtual secara instan, berupa 1
            akun guru dan 2 akun siswa.
          </span>
        </>
      }
      content={
        <>
          <div className="mb-4">
            <label className="form-label">Nama</label>
            <input
              className="form-control"
              autoComplete="off"
              placeholder="Tuliskan nama kamu disini"
              type="text"
              name="nama"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Jabatan</label>
            <input
              className="form-control"
              autoComplete="off"
              placeholder="Tuliskan nama jabatan kamu di sekolahmu"
              type="text"
              name="jabatan"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Nama Sekolah</label>
            <input
              className="form-control"
              autoComplete="off"
              placeholder="Tuliskan nama sekolahmu"
              type="text"
              name="namaSekolah"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Alamat Sekolah</label>
            <TextareaAutosize
              className="form-control"
              autoComplete="off"
              style={{
                resize: "none",
                width: "100%",
              }}
              placeholder="Tuliskan alamat sekolahmu"
              minRows={3}
              name="alamatSekolah"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </>
      }
      submitButton={
        <button onClick={handleClickSendWhatsapp} className="btn btn-primary">
          <FaWhatsapp className="fs-4 me-2" />
          <span className="mt-2">Kirim</span>
        </button>
      }
    />
  );
};

export default ModalUjiCobaAkun;
