import { v4 as uuid } from "uuid";
import { Flex, Form } from "antd";
import { Content } from "antd/es/layout/layout";
import {
  CategoryList,
  CategoryListProps,
  CharacterCard,
  PriceInput,
  SearchInput,
} from "../molecules";
import { SelectInput, TextButton } from "../atoms";
import { DefaultOptionType } from "antd/es/select";
import { CloseCircleFilled } from "@ant-design/icons";
import { Category, Character } from "@/data/models";
import { useState } from "react";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";

const tierOptions: DefaultOptionType[] = [
  {
    label: "all",
    value: "tier-all",
  },
];
const themeOptions: DefaultOptionType[] = [
  {
    label: "Halloween",
    value: "theme-halloween",
  },
  {
    label: "Christmas",
    value: "theme-christmas",
  },
];
const timeOptions: DefaultOptionType[] = [
  {
    label: "Latest",
    value: "time-latest",
  },
];
const priceOptions: DefaultOptionType[] = [
  {
    label: "Low to high",
    value: "price-low-to-high",
  },
];

const formInputs: {
  name: string;
  component: JSX.Element;
  label?: string;
}[] = [
  {
    name: "search",
    component: <SearchInput />,
  },
  {
    label: "price range",
    name: "priceRange",
    component: <PriceInput />,
  },
  {
    label: "tier",
    name: "tier",
    component: (
      <SelectInput options={tierOptions} defaultValue={tierOptions[0].value} />
    ),
  },
  {
    label: "theme",
    name: "theme",
    component: (
      <SelectInput
        options={themeOptions}
        defaultValue={themeOptions[0].value}
      />
    ),
  },
  {
    label: "timeSort",
    name: "timeSort",
    component: (
      <SelectInput options={timeOptions} defaultValue={timeOptions[0].value} />
    ),
  },
  {
    label: "priceSort",
    name: "priceSort",
    component: (
      <SelectInput
        options={priceOptions}
        defaultValue={priceOptions[0].value}
      />
    ),
  },
];

const SearchAndFilter = () => {
  const [form] = useForm();

  const onFinish = (values: unknown) => {
    //TODO: Integrate search API
    console.log("🚀 ~ SearchAndFilter ~ values:", values);
  };

  return (
    <Form
      form={form}
      initialValues={{
        searchQuery: "",
        priceRange: [0, 200],
      }}
      layout="vertical"
      colon={false}
      onFinish={onFinish}
    >
      <Flex flex={2} vertical>
        {formInputs.map(({ label, name, component }) => (
          <FormItem
            key={`form-input-${name}`}
            name={name}
            label={<strong>{label?.toUpperCase()}</strong>}
          >
            {component}
          </FormItem>
        ))}
        <Flex style={{ marginTop: "2em" }} gap={6}>
          <TextButton
            icon={<CloseCircleFilled />}
            variant="text"
            color="default"
            onClick={() => form.resetFields()}
          >
            Reset filter
          </TextButton>
          <TextButton
            variant="solid"
            color="primary"
            onClick={() => form.submit()}
          >
            Search
          </TextButton>
        </Flex>
      </Flex>
    </Form>
  );
};

const SearchContent = ({
  categoryListProps,
  characters,
}: {
  categoryListProps: CategoryListProps;
  characters: Character[];
}) => {
  return (
    <Flex flex={5} vertical gap={"middle"}>
      <CategoryList {...categoryListProps} />
      <Flex wrap gap="middle">
        {characters.map((character) => {
          const { id, author, ...characterProps } = character;

          return (
            <CharacterCard
              {...characterProps}
              key={id}
              author={{
                name: author.name,
                profilePic: author.profilePic,
              }}
            />
          );
        })}
      </Flex>
      {/* TODO: View more (require pagination API) */}
    </Flex>
  );
};

export const ShoppingSection = () => {
  // TODO: Integrate data from API
  const [characters] = useState<Character[]>(
    new Array(5).fill({
      id: uuid(),
      name: "Mafia England",
      category: Category.COMMON,
      image: {
        ariaLabel: "mafia-england-img",
        src: "/mafia-england.png",
      },
      price: 1200,
      author: {
        id: "author-id-123",
        name: "Author name 123",
        profilePic: {
          ariaLabel: "author-123-img",
          src: "",
        },
      },
    }),
  );
  const [currentCategory, setCurrentCategory] = useState(Category.COMMON);

  return (
    <Content>
      <Flex justify="space-between" gap="large">
        <SearchAndFilter />
        <SearchContent
          categoryListProps={{
            categories: [Category.COMMON, Category.EPIC, Category.RARE],
            selectedCategory: currentCategory,
            onCategorySelect: (category) => setCurrentCategory(category),
          }}
          characters={characters}
        />
      </Flex>
    </Content>
  );
};
