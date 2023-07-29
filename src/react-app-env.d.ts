/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_SENTRY_DSN_KEY: string;
    // 다른 변수들도 필요한 경우 여기에 추가로 정의합니다.
  }
}
