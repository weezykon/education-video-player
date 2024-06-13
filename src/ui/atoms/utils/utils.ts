import { FontSize, FontWeight } from "./types";

export const getFontSize = (size: keyof typeof FontSize) => {
  const sizes = {
    [FontSize.h1]: 'text-h2 md:text-h1 3xl:text-h1',
    [FontSize.h2]: 'text-h3 md:text-h2 3xl:text-h2',
    [FontSize.h3]: 'text-h4 md:text-h3 3xl:text-h3',
    [FontSize.h4]: 'text-h6 md:text-h4 3xl:text-h4',
    [FontSize.h5]: 'text-h7 md:text-h5 3xl:text-h5',
    [FontSize.h6]: 'text-h7 md:text-h6 3xl:text-h6',
    [FontSize.h7]: 'text-h8 md:text-h7 3xl:text-h7',
    [FontSize.h8]: 'text-h9 md:text-h8 3xl:text-h8',
    [FontSize.h9]: 'text-h10 md:text-h9 3xl:text-h9',
    [FontSize.h10]: 'text-b11 md:text-h10 3xl:text-h10',
    [FontSize.h11]: 'text-b5 md:text-h11 3xl:text-h11',
    [FontSize.base]: 'text-b4 md:text-b5 3xl:text-xl',
    [FontSize.b1]: 'text-b2 md:text-b1 3xl:text-b1',
    [FontSize.b2]: 'text-b3 md:text-b2 3xl:text-b2',
    [FontSize.b3]: 'text-b4 md:text-b3 3xl:text-b3',
    [FontSize.b4]: 'text-b5 md:text-b4 3xl:text-b4',
    [FontSize.b5]: 'text-b6 md:text-b5 3xl:text-b5',
    [FontSize.b6]: 'text-b6 md:text-b6 3xl:text-b6',
    [FontSize.b7]: 'text-b7 md:text-b7 3xl:text-b6',
    [FontSize.b8]: 'text-b8 md:text-b8 3xl:text-b8',
    [FontSize.b9]: 'text-b9 md:text-b9 3xl:text-b9',
  };
  return sizes[size];
}

export const getFontWeight = (weight: keyof typeof FontWeight) => {
  const weights = {
    [FontWeight.thin]: 'font-thin',
    [FontWeight.extraLight]: 'font-extralight',
    [FontWeight.light]: 'font-light',
    [FontWeight.normal]: 'font-normal',
    [FontWeight.medium]: 'font-medium',
    [FontWeight.semiBold]: 'font-semibold',
    [FontWeight.bold]: 'font-bold',
    [FontWeight.extraBold]: 'font-extrabold',
    [FontWeight.black]: 'font-black',
  };
  return weights[weight];
}