import { Slider } from "antd";
import { SliderRangeProps } from "antd/es/slider";

export type SliderInputProps = SliderRangeProps;

export const SliderInput = (props: SliderInputProps) => {
  return <Slider {...props} />;
};
