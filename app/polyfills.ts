// Polyfills required for some legacy React Native libraries on web (e.g. react-native-swiper)
// Safely add setImmediate / clearImmediate if missing (web environments in newer RN versions)

const g: any = globalThis as any; // intentional any for attaching globals

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
