import React from "react";
import { FaEye, FaRegTrashAlt } from "react-icons/fa";
import { Table, Image } from "antd";
import type { TableProps } from "antd";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { path } from "../../../routes";
import "./product.css";
interface DataType {
  key: string;
  img: string;
  title: string;
  chuyen_muc: string;
  price: string;
  price_discount: string;
}

const data: DataType[] = [
  {
    key: "1",
    title: "Sữa chua",
    img: "/img/product/product1.jpg",
    chuyen_muc: "0",
    price: "0",
    price_discount: "0",
  },
  {
    key: "2",
    title: "Nước ép dâu",
    img: "/img/product/product2.jpg",
    chuyen_muc: "0",
    price: "0",
    price_discount: "0",
  },
  {
    key: "3",
    title: "Nước ép cam",
    img: "/img/product/product3.jpg",
    chuyen_muc: "0",
    price: "0",
    price_discount: "0",
  },
];

const ProductTable: React.FC = () => {
  const navigate = useNavigate();
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Hình",
      dataIndex: "img",
      key: "img",
      render: (src) => <Image height={100} src={src} />,
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Chuyên mục",
      dataIndex: "chuyen_muc",
      key: "chuyen_muc",
    },
    {
      title: "Giá",
      key: "price",
      dataIndex: "price",
    },
    {
      title: "Giá khuyến mãi",
      key: "price_discount",
      dataIndex: "price_discount",
    },
    {
      title: "Hành động",
      key: "action",
      render: () => {
        return (
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <button
              className="action-btn"
              style={{
                backgroundColor: "#08e783",
                height: "40px",
                width: "40px",
                fontSize: "20px",
                color: "white",
                textAlign: "center",
                lineHeight: "40px",
                borderRadius: "10px",
                border: "none",
              }}
            >
              <FaEye />
            </button>
            <button
              onClick={() => navigate(path.productUpdate)}
              className="action-btn"
              style={{
                backgroundColor: "#416dea",
                height: "40px",
                width: "40px",
                fontSize: "20px",
                color: "white",
                textAlign: "center",
                lineHeight: "40px",
                borderRadius: "10px",
                border: "none",
              }}
            >
              <CiEdit />
            </button>
            <div
              className="action-btn"
              style={{
                backgroundColor: "#f82222",
                height: "40px",
                width: "40px",
                fontSize: "20px",
                color: "white",
                textAlign: "center",
                lineHeight: "40px",
                borderRadius: "10px",
              }}
            >
              <FaRegTrashAlt />
            </div>
          </div>
        );
      },
    },
  ];

  return <Table scroll={{ y: "90vh" }} columns={columns} dataSource={data} />;
};

export default ProductTable;
