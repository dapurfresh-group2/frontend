import Swal from "sweetalert2";

const logoutModal = async (deleteFunction) => {
  Swal.fire({
    html: '<p style="font-size: 16px; font-weight: 500px; font-color: rgba(68, 68, 68, 1); text-align: left; padding: 15px">Apakah kamu yakin untuk keluar?</p>',
    showConfirmButton: true,
    confirmButtonColor: "#fff",
    buttonsStyling: false,
    showCancelButton: true,
    confirmButtonText: "Yakin",
    cancelButtonText: "Tidak yakin",
    width: 280,
  }).then((result) => {
    if (result.isConfirmed) {
      deleteFunction();
    }
  });
};

export default logoutModal;
