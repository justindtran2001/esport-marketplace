import { Col, Flex, Row, theme } from "antd";
import { Heading, Link } from "../atoms";
import { Footer as AntDFooter } from "antd/es/layout/layout";
import { ActionTextInput, ContactInfoText } from "../molecules";
import { MailFilled, PhoneFilled } from "@ant-design/icons";

const { useToken } = theme;

const navigationItems = [
  {
    label: "Home",
  },
  {
    label: "Whitepaper",
  },
  {
    label: "FAQs",
  },
  {
    label: "About us",
  },
  {
    label: "Marketplace",
  },
  {
    label: "News",
  },
  {
    label: "Our teams",
  },
  {
    label: "Roadmap",
  },
  {
    label: "Community",
  },
];

const Navigation = () => {
  const { token } = useToken();

  return (
    <Flex vertical flex={1} gap="middle">
      <Heading level={4}>NAVIGATION</Heading>
      <Row>
        {navigationItems.map(({ label }, idx) => (
          <Col key={`bottom-nav-item-${idx}`} span={8}>
            <Link style={{ color: token.colorText }}>{label}</Link>
          </Col>
        ))}
      </Row>
    </Flex>
  );
};

const ContactUs = () => {
  const { token } = useToken();
  return (
    <Flex vertical align="start" flex={1} gap="middle">
      <Heading level={4}>CONTACT US</Heading>
      <ContactInfoText
        text={
          <Link href="tel:01234568910" style={{ color: token.colorText }}>
            01234568910
          </Link>
        }
        iconComponent={<PhoneFilled />}
      />
      <ContactInfoText
        text={
          <Link
            href="mailto:tymex-talent@tyme.com"
            style={{ color: token.colorText }}
          >
            tymex-talent@tyme.com
          </Link>
        }
        iconComponent={<MailFilled />}
      />
    </Flex>
  );
};

const Subscribe = () => (
  <Flex vertical flex={1} gap="middle">
    <Heading level={4}>SUBSCRIBE TO RECEIVE OUR LATEST UPDATE</Heading>
    <ActionTextInput actionLabel="Subscribe" placeholder="Your email address" />
  </Flex>
);

export const Footer = () => {
  return (
    <AntDFooter>
      <Flex justify="space-between" align="start">
        <Navigation />
        <ContactUs />
        <Subscribe />
      </Flex>
    </AntDFooter>
  );
};
