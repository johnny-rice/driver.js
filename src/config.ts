export type Config = {
  animate?: boolean;
};

let currentConfig: Config = {};

export function configure(config: Config = {}) {
  currentConfig = {
    animate: true,
    ...config,
  };
}

export function getConfig(): Config;
export function getConfig<K extends keyof Config>(key: K): Config[K];
export function getConfig<K extends keyof Config>(key?: K) {
  return key ? currentConfig[key] : currentConfig;
}