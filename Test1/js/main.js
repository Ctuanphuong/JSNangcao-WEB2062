// Bài 1
const ConNguoi = function (chieu_cao, can_nang) {
  this.chieu_cao = chieu_cao;
  this.can_nang = can_nang;
};
ConNguoi.prototype.boi_loi = function () {
  console.log(` chiều cao là: ${this.chieu_cao + 5}`);
};
ConNguoi.prototype.an_kieng = function () {
  console.log(` cân nặng là: ${this.can_nang - 10}`);
};
const phuong = new ConNguoi(170, 62);
phuong.boi_loi();
phuong.an_kieng();
const tuan = new ConNguoi(175, 56);
tuan.boi_loi();
tuan.an_kieng();
const ngoc = new ConNguoi(180, 60);
ngoc.boi_loi();
ngoc.an_kieng();

// Bài 2:

class SinhVien extends ConNguoi {
  constructor(so_mon_da_qua, ho_ten, ma_sv, chieu_cao, can_nang) {
    super(chieu_cao, can_nang);
    this.so_mon_da_qua = so_mon_da_qua;
    this.ho_ten = ho_ten;
    this.ma_sv = ma_sv;
  }
  hoc_bai() {
    console.log(`Số môn đã qua: ${this.so_mon_da_qua}`);
    const them2 = this.so_mon_da_qua + 2;
    console.log(`Số môn đã qua bonus: ${them2}`);
  }
  xem_ho_so() {
    console.log(`Họ tên: ${this.ho_ten}`);
    console.log(`Mã sinh viên: ${this.ma_sv}`);
    console.log(`Chiều cao: ${this.chieu_cao}`);
    console.log(`Cân nặng: ${this.can_nang}`);
  }
}
const sv = new SinhVien(10, "Chu Tuấn Phương", "PH20555", 170, 62);
sv.hoc_bai();
sv.xem_ho_so();
