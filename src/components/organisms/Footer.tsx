import { Col, Flex, Row } from "antd";
import { Heading, Link } from "../atoms";
import { ActionTextInput, ContactInfoText } from "../molecules";
import { MailFilled, PhoneFilled } from "@ant-design/icons";

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

export const Footer = () => {
  return (
    <Flex justify="space-between">
      <Flex vertical flex={1}>
        <Heading level={5}>NAVIGATION</Heading>
        <Row>
          {navigationItems.map(({ label }, idx) => (
            <Col key={`bottom-nav-item-${idx}`} span={8}>
              <Link>{label}</Link>
            </Col>
          ))}
        </Row>
      </Flex>
      <Flex vertical align="start" flex={1}>
        <Heading level={5}>CONTACT US</Heading>
        <ContactInfoText
          text={<a href="tel:01234568910">01234568910</a>}
          iconComponent={<PhoneFilled />}
        />
        <ContactInfoText
          text={
            <a href="mailto:tymex-talent@tyme.com">tymex-talent@tyme.com</a>
          }
          iconComponent={<MailFilled />}
        />
      </Flex>
      <Flex vertical flex={1}>
        <Heading level={5}>SUBSCRIBE TO RECEIVE OUR LATEST UPDATE</Heading>
        <ActionTextInput
          actionLabel="Subscribe"
          placeholder="Your email address"
        />
      </Flex>
    </Flex>
  );
};
