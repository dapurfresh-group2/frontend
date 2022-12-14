import iconNoData from "../../assets/icons/ic-no-data.png";

function NotFoundProduct() {
  return (
    <div className="container-notfound d-flex flex-column align-items-center">
      <div className="">
        <img src={iconNoData} alt="icon no data" className="icon-no-data" />
      </div>
      <div className="notfound-title mt-3">
        Yahh, pencarian kamu tidak ditemukan
      </div>
      <div className="notfound-description mt-3">
        Silahkan pesan produk lain, dan tambahkan
      </div>
      <div className="notfound-description">produk yang kamu inginkan</div>
      <div className="notfound-description">
        di catatan tambahan pada halaman checkout
      </div>
    </div>
  );
}

export default NotFoundProduct;
