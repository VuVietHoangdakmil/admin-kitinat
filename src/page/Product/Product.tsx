import TableProduct from "../../components/table/product/Product";
import ProductCrud from "../../components/PageCrud/product";
import { useParams, useNavigate } from "react-router-dom";
import { PageCRUD } from "../../types/enum";
import { FaPlus, FaRegSave } from "react-icons/fa";
import Config from "../../components/ConfigProvide";
import { Button } from "antd";
import { path } from "../../routes";
import { IoReturnUpBackOutline } from "react-icons/io5";
const Product = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  return (
    <>
      {type === PageCRUD.VIEW ? (
        <>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              icon={<FaPlus />}
              type="primary"
              style={{
                margin: "0 0 10px 0",
                height: "40px",
              }}
              onClick={() => navigate(path.productCreate)}
            >
              Thêm mới
            </Button>
          </div>
          <TableProduct />
        </>
      ) : type === PageCRUD.UPDATE || type === PageCRUD.CREATE ? (
        <>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              icon={<FaRegSave />}
              type="primary"
              style={{
                height: "40px",
                margin: "0 0 10px 0",
              }}
            >
              Lưu
            </Button>
            <Config primaryColor="#1677ff">
              <Button
                icon={<IoReturnUpBackOutline />}
                type="primary"
                style={{
                  height: "40px",
                  margin: "0 0 10px 20px",
                }}
                onClick={() => {
                  navigate(-1);
                }}
              >
                Quay lại
              </Button>
            </Config>
          </div>
          <div
            style={{
              overflowY: "auto",
              height: "100vh",
              paddingBottom: "150px",
            }}
          >
            <ProductCrud type={type + ""} />
          </div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};
export default Product;
