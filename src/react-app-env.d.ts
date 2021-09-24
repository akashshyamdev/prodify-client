/// <reference types="react-scripts" />

// ENV Variables
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    PUBLIC_URL: string;

    REACT_APP_SERVER_URL: string;

    REACT_APP_FACEBOOK_ID: string;

    REACT_APP_GITHUB_CLIENT_ID: string;
    REACT_APP_GITHUB_CLIENT_SECRET: string;

    REACT_APP_GOOGLE_CLIENT_ID: string;
    REACT_APP_GOOGLE_CLIENT_SECRET: string;

    JEST_WORKER_ID: string;
  }
}

// Extend the window object
declare global {
  interface Window {
    FB: {
      getLoginStatus(): void;
    };
  }
}
