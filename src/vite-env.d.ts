/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WORDPRESS_URL?: string;
  readonly VITE_CF7_FORM_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
