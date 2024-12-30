// import "./App.css";

import { ConfigProvider, theme } from "antd";
import { Marketplace } from "./components/templates";

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Marketplace />
    </ConfigProvider>
  );
}

export default App;
