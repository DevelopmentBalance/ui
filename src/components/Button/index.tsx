import React from "react";

import * as S from "./styles";

export interface IButton {
  onClick: () => void;
  bgColor?: string;
  children: string;
  disable?: boolean;
  loading?: string;
  typeLoading?: string;
  color?: string;
  size: 'small' | 'medium';
  width: string;
}

const Button = ({
  onClick = () => {},
  bgColor = "#9448BC",
  children = "Children",
  disable,
  loading,
  typeLoading = "bubbles",
  color = "#9448BC",
  size = 'small',
  width,
  ...restProps
}: IButton) => {
  const textButton = loading ? "" : children;
  return (
    <S.ButtonElement
      onClick={onClick}
      bgColor={bgColor}
      disabled={disable}
      loading={`${loading}`}
      size={size}
      width={width}
      {...restProps}
    >
      {textButton}
      <S.ButtonLoading
        type={typeLoading}
        color={color}
        loading={`${loading}`}
        height={40}
        width={40}
      />
    </S.ButtonElement>
  );
};

export default Button;
