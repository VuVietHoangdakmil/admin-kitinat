import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#bf9369",
        },
        components: {
          Layout: {
            /* here is your component tokens */
            siderBg: "white",
          },
          Collapse: {
            /* here is your component tokens */
            headerBg: "#fafafa",
          },
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
