import Swal from "sweetalert2";

const helpClickHandler = (helpImg, closeImg) => {
    Swal.fire({
      title:
        '<h1 style="font-weight: 500; font-size: 16px; color: rgba(68, 68, 68, 1); padding-top: 0px !important">Cara Memesan Produk</h1>',
      width: 310,
      imageUrl: helpImg,
      imageWidth: 44,
      imageAlt: "question icon",
      html:
        "<hr style='margin-top: 5px; !important' />" +
        '<ol><li style="font-weight: 400; font-size: 12px; color: rgba(68, 68, 68, 1); margin-bottom: 8px; text-align: left;">Cari produk yang kamu inginkan</li><li style="font-weight: 400; font-size: 12px; margin-bottom: 8px; color: rgba(68, 68, 68, 1); text-align: left;">Tambahkan aja produknya dengan menekan tombol tambah</li><li style="font-weight: 400; margin-bottom: 8px; font-size: 12px; color: rgba(68, 68, 68, 1); text-align: left;">Tekan keranjang yang ada dibawah layar kamu untuk masuk ke halaman checkout</li><li style="font-weight: 400; margin-bottom: 8px; font-size: 12px; color: rgba(68, 68, 68, 1); text-align: left;">Pastikan data-data kamu valid yaa. Jika ada produk yang tidak ditemukan, kamu bisa tambahin di Catatan Tambahan</li><li style="font-weight: 400; font-size: 12px; color: rgba(68, 68, 68, 1); text-align: left;">Terakhir, tekan tombol pesan dehh.</li></ol>',
      showCloseButton: true,
      closeButtonHtml: `<img src="${closeImg}" />`,
      showConfirmButton: false,
    });
  };

  export default helpClickHandler;