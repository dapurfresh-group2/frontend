import Swal from "sweetalert2";

const deleteModal = async (deleteFunction) => {
  Swal.fire({
    html: '<p style="font-size: 16px; font-weight: 500px; font-color: rgba(68, 68, 68, 1); text-align: left; padding: 15px">Apakah kamu yakin untuk batalin pesanan?</p>',
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

export default deleteModal;
