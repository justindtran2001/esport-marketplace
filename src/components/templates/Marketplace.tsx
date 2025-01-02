import { Layout } from "antd";
import { Footer, Header, HeroSection, ShoppingSection } from "../organisms";
import { Content } from "antd/es/layout/layout";

export const Marketplace = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <HeroSection />
        <ShoppingSection />
      </Content>
      <Footer />
    </Layout>
  );
};
