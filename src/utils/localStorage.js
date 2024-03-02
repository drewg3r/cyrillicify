const storageLocaleKey = 'locale';
const storageThemeKey = 'theme';
const storageLayoutKey = 'layout';

export const getStoredLocale = () => {
  return localStorage.getItem(storageLocaleKey);
};

export const setStoredLocale = (locale) => {
  localStorage.setItem(storageLocaleKey, locale);
};

export const getStoredTheme = () => {
  return localStorage.getItem(storageThemeKey);
}

export const setStoredTheme = (theme) => {
  localStorage.setItem(storageThemeKey, theme);
};

export const getStoredLayout = () => {
  return localStorage.getItem(storageLayoutKey);
}

export const setStoredLayout = (theme) => {
  localStorage.setItem(storageLayoutKey, theme);
};
