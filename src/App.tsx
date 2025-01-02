// import "./App.css";

import { ConfigProvider, theme } from "antd";
import { Marketplace } from "./components/templates";

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#DA34DD",
          colorInfo: "#DA34DD",
        },
        components: {
          Layout: {
            headerBg: "rgba(23, 22, 26, 0.7)",
            footerBg: "rgba(23, 22, 26, 0.7)",
          },
          Typography: {
            titleMarginTop: "0em",
          },
          Button: {
            defaultHoverBorderColor: "rgb(218,69,143)",
            defaultHoverColor: "rgb(218,69,143)",
            defaultActiveBorderColor: "rgb(218,69,143)",
            defaultActiveColor: "rgb(218,69,143)",
            groupBorderColor: "rgb(218,69,143)",
          },
        },
      }}
    >
      <Marketplace />
    </ConfigProvider>
  );
}

export default App;
