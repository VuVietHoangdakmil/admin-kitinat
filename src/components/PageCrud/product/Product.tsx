import { PageCRUD } from "../../../types/enum";
import { Row, Col, Form, Input, Collapse, Upload, Button } from "antd";
import EditorCustom from "../../EditorCustom";
import { UploadOutlined } from "@ant-design/icons";
import "./index.css";
type Props = {
  type: string;
};
const Product: React.FC<Props> = ({ type }) => {
  console.log("d", type === PageCRUD.CREATE);
  return (
    <Row gutter={20}>
      <Col span={16}>
        <Collapse
          defaultActiveKey={"1"}
          items={[
            {
              key: "1",
              label: "Thông tin",
              children: (
                <Form
                  layout="vertical"
                  name="basic"
                  labelCol={{ span: 8 }}
                  // wrapperCol={{ span: 16 }}
                  initialValues={{ remember: true }}
                  // onFinish={onFinish}
                  // onFinishFailed={onFinishFailed}
                >
                  <Form.Item label="Tiêu đề" name="username">
                    <Input style={{ display: "block" }} />
                  </Form.Item>

                  <Form.Item label="Tóm tắt" name="password">
                    <EditorCustom height={200} />
                  </Form.Item>
                  <Form.Item label="Nội dung" name="content">
                    <EditorCustom height={400} />
                  </Form.Item>
                </Form>
              ),
            },
          ]}
        />
        <Collapse
          style={{ marginTop: "10px" }}
          defaultActiveKey={"1"}
          items={[
            {
              key: "1",
              label: "Lượt xem tùy chỉnh",
              children: (
                <Form
                  layout="vertical"
                  name="basic"
                  labelCol={{ span: 8 }}
                  // wrapperCol={{ span: 16 }}
                  initialValues={{ remember: true }}
                  // onFinish={onFinish}
                  // onFinishFailed={onFinishFailed}
                >
                  <Form.Item label="Lượt xem sản phẩm" name="username">
                    <Input style={{ display: "block" }} />
                  </Form.Item>
                </Form>
              ),
            },
          ]}
        />
      </Col>
      <Col span={8}>
        <Collapse
          defaultActiveKey={"1"}
          items={[
            {
              key: "1",
              label: "Phân loại",
              children: (
                <Form
                  layout="vertical"
                  name="basic"
                  initialValues={{ remember: true }}
                  // onFinish={onFinish}
                  // onFinishFailed={onFinishFailed}
                >
                  <Form.Item label="Mã sản phẩm" name="username">
                    <Input style={{}} />
                  </Form.Item>
                  <Form.Item label="Tìm kiếm danh mục" name="username">
                    <Input style={{}} />
                  </Form.Item>
                </Form>
              ),
            },
          ]}
        />
        <Collapse
          style={{ marginTop: "10px" }}
          defaultActiveKey={"1"}
          items={[
            {
              key: "1",
              label: "Thông tin giá",
              children: (
                <Form
                  layout="vertical"
                  name="basic"
                  initialValues={{ remember: true }}
                  // onFinish={onFinish}
                  // onFinishFailed={onFinishFailed}
                >
                  <Form.Item label="Giá" name="username">
                    <Input style={{}} />
                  </Form.Item>
                  <Form.Item label="Giá khuyến mãi" name="username">
                    <Input style={{}} />
                  </Form.Item>
                  <Form.Item label="Đơn vị tính bằng" name="username">
                    <Input style={{}} />
                  </Form.Item>
                </Form>
              ),
            },
          ]}
        />
        <Collapse
          style={{ marginTop: "10px" }}
          defaultActiveKey={"1"}
          items={[
            {
              key: "1",
              label: "Hình ảnh",
              children: (
                <Form
                  layout="vertical"
                  name="basic"
                  initialValues={{ remember: true }}
                  // onFinish={onFinish}
                  // onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    name="upload"
                    label="Hình ảnh"
                    // valuePropName="fileList"
                  >
                    <Upload name="logo" action="">
                      <Button icon={<UploadOutlined />}>Chọn hình ảnh</Button>
                    </Upload>
                  </Form.Item>
                </Form>
              ),
            },
          ]}
        />
        <Collapse
          style={{ marginTop: "10px" }}
          defaultActiveKey={"1"}
          items={[
            {
              key: "1",
              label: "SEO",
              children: (
                <Form
                  layout="vertical"
                  name="basic"
                  initialValues={{ remember: true }}
                  // onFinish={onFinish}
                  // onFinishFailed={onFinishFailed}
                >
                  <Form.Item label="Slug" name="username">
                    <Input style={{}} />
                  </Form.Item>
                  <Form.Item label="Meta title" name="username">
                    <Input style={{}} />
                  </Form.Item>
                  <Form.Item label="Meta Keyword" name="username">
                    <Input style={{}} />
                  </Form.Item>
                  <Form.Item label="Meta Description" name="username">
                    <Input.TextArea style={{ height: "150px" }} />
                  </Form.Item>
                </Form>
              ),
            },
          ]}
        />
      </Col>
    </Row>
  );
};
export default Product;
