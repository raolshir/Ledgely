// Global polyfills (not a route) - placed outside the app/ folder so expo-router won't treat it as a screen.
// Polyfill setImmediate / clearImmediate for libraries (e.g. react-native-swiper) that expect them on web.
// Extend here if other globals are needed later.

const g: any = globalThis as any; // Intentional any for attaching globals

if (typeof g.setImmediate === "undefined") {
  g.setImmediate = (
    handler: (...args: unknown[]) => void,
    ...args: unknown[]
  ) => {
    return setTimeout(handler, 0, ...args);
  };
}

if (typeof g.clearImmediate === "undefined") {
  g.clearImmediate = (id: unknown) => clearTimeout(id as number);
}

// Intentionally no default export; this file is imported for side-effects only.
