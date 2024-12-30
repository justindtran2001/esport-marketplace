import { SliderInput, SliderInputProps } from "../atoms";

const marks: SliderInputProps["marks"] = {
  0.01: {
    label: "0.01EH",
    style: { transform: "" },
  },
  200: {
    label: "200EH",
    style: { transform: "translateX(-100%)" },
  },
};

const formatter: NonNullable<SliderInputProps["tooltip"]>["formatter"] = (
  value,
) => `${value}EH`;

export type PriceInputProps = Omit<
  SliderInputProps,
  "range" | "min" | "max" | "step" | "marks" | "tooltip" | "defaultValue"
>;

export const PriceInput = (props: PriceInputProps) => {
  return (
    <SliderInput
      {...props}
      range
      min={0.01}
      max={200}
      step={0.01}
      marks={marks}
      tooltip={{ formatter }}
      defaultValue={[10, 180]}
    />
  );
};
