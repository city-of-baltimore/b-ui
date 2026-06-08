const THEME_STORAGE_KEY = "theme";
const THEME_OWNER = document.documentElement;

const cachedTheme = localStorage.getItem(THEME_STORAGE_KEY);
if (cachedTheme) {
  THEME_OWNER.dataset[THEME_STORAGE_KEY] = cachedTheme;
}

document.addEventListener("DOMContentLoaded", () => {
  const theme_picker = document.getElementById("theme-picker");
  if (!theme_picker) return;

  if (cachedTheme && cachedTheme !== theme_picker.value) {
    theme_picker.value = cachedTheme;
  }

  theme_picker.addEventListener("change", (e) => {
    const theme = e.target.value;
    THEME_OWNER.dataset[THEME_STORAGE_KEY] = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  });
});
