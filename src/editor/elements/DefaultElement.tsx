import React from "react";
import { Typography, TypographyProps } from "@material-ui/core";

export const DefaultElement = React.forwardRef(function DefaultElement(
  props: TypographyProps,
  ref: React.Ref<HTMLElement>,
) {
  return <Typography ref={ref} {...props} />;
});
