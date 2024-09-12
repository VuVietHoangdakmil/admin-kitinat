import TableProduct from "../../components/table/Product";
import ProductCrud from "../../components/PageCrud/product";
import { useParams } from "react-router-dom";
import { PageCRUD } from "../../types/enum";
const Product = () => {
  const { type } = useParams();

  return (
    <>
      {type === PageCRUD.VIEW ? (
        <TableProduct />
      ) : type === PageCRUD.UPDATE || type === PageCRUD.CREATE ? (
        <ProductCrud type={type + ""} />
      ) : (
        <div></div>
      )}
    </>
  );
};
export default Product;
