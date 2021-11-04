import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaWhatsapp } from "react-icons/fa";
import TextareaAutosize from "react-textarea-autosize";
import NewModal from "../Shared/NewModal/NewModal";

const ModalUjiCobaAkun = ({}) => {
  const initialState = {
    nama: "",
    jabatan: "",
    namaSekolah: "",
    alamatSekolah: "",
  };

  const [stateForm, setStateForm] = useState(initialState);

  const handleChange = (e) => {
    setStateForm({ ...stateForm, [e.target.name]: e.target.value });
  };

  const handleClickSendWhatsapp = () => {
    if (!stateForm.nama) {
      toast.error("Kamu belum mengisi nama kamu");
      return;
    } else if (!stateForm.jabatan) {
      toast.error("Kamu belum mengisi jabatan kamu");
      return;
    } else if (!stateForm.namaSekolah) {
      toast.error("Kamu belum mengisi nama sekolah kamu");
      return;
    } else if (!stateForm.alamatSekolah) {
      toast.error("Kamu belum mengisi alamat sekolah kamu");
      return;
    }

    window.open(
      `https://api.whatsapp.com/send?phone=6285778537382&text=Halo, Saya ingin memiliki akun untuk mencoba sistem Simulasi Sekolah Online Virtual by Smarteschool.%0ANama : ${stateForm.nama}%0AJabatan : ${stateForm.jabatan}%0ANama Sekolah : ${stateForm.namaSekolah}%0AAlamat Sekolah : ${stateForm.alamatSekolah}`
    );
  };

  return (
    <NewModal
      modalId="modalUjiCobaAkun"
      title={
        <>
          <h4 className="mb-1 fw-extrabold">Informasi Data Diri </h4>
          <span className="fs-6 fw-normal">
            Isi informasi untuk mendapatkan akun virtual untuk demo.
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
