import { ThemeConfig, theme } from 'antd';

const BASE_THEME_TOKEN: ThemeConfig['token'] = {
  sizeStep: 4,
  borderRadius: 4,
  wireframe: false,
  fontSize: 16,
};

export const darkTheme: ThemeConfig = {
  cssVar: true,
  hashed: false,
  algorithm: [theme.darkAlgorithm],
  token: { ...BASE_THEME_TOKEN },
};

export const lightTheme: ThemeConfig = {
  cssVar: true,
  hashed: false,
  algorithm: [theme.defaultAlgorithm],
  token: { ...BASE_THEME_TOKEN },
};
