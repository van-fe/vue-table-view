declare global {
  interface WindowEventMap {
    "current-page-change": CustomEvent<{ page: number }>;
    "page-size-change": CustomEvent<{ size: number }>;
  }
}

export {};
