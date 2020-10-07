import Baohiemchinhsach from "../container/Baohiemchinhsach";
import Dangnhap from "../container/Dangnhap";
import Quanlyduan from "../container/Quanlyduan";
import Quanlyhosoduan from "../container/Quanlyhosoduan";
import Quanlykehoachcongviec from "../container/Quanlykehoachcongviec";
import Quanlykhachhang from "../container/Quanlykhachhang";
import Quanlynhanvien from "../container/Quanlynhanvien";
import Quanlythuchi from "../container/Quanlythuchi";
import Thongke from "../container/Thongke";
import Trangchu from "../container/Trangchu";

export const API_ENDPOINT = "http://localhost:3000";

export const ADMIN_ROUTES = [
  {
    path: "/Trangchu",
    name: "Trang chủ",
    exact: true,
    component: Trangchu,
  },
  {
    path: "/Quanlyduan",
    name: "Chi tiết quản lý dự án",
    exact: true,
    component: Quanlyduan,
  },
  {
    path: "/Quanlykehoachcongviec",
    name: "Chi tiết quản lý kế hoạch công việc",
    exact: true,
    component: Quanlykehoachcongviec,
  },
  {
    path: "/Quanlynhanvien",
    name: "Chi tiết quản lý nhân viên",
    exact: true,
    component: Quanlynhanvien,
  },
  {
    path: "/Quanlykhachhang",
    name: "Chi tiết  khách hàng",
    exact: true,
    component: Quanlykhachhang,
  },
  {
    path: "/Quanlyhosoduan",
    name: "Chi tiết hồ sơ dự án",
    exact: true,
    component: Quanlyhosoduan,
  },
  {
    path: "/Quanlythuchi",
    name: "Chi tiết thu chi",
    exact: true,
    component: Quanlythuchi,
  },
  {
    path: "/Thongke",
    name: "Thống kê",
    exact: true,
    component: Thongke,
  },
  {
    path: "/Baohiemchinhsach",
    name: "Chi tiết bảo hiểm chính sách",
    exact: true,
    component: Baohiemchinhsach,
  },

];

export const LOGIN_ROUTES = [
  {
    path: "/Dangnhap",
    name: "Đăng Nhập",
    exact: true,
    component: Dangnhap,
  },
];
