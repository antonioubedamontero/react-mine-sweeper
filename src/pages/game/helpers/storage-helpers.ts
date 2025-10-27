import type { ConfigInfo } from "../interfaces";

export const saveInfoToStorage = (configInfo: ConfigInfo): void => {
  localStorage.setItem("config", JSON.stringify(configInfo));
};

export const getInfoFromStorage = (): ConfigInfo => {
  const config = localStorage.getItem("config");

  if (!config) throw new Error("Missing configuration in storage");

  return JSON.parse(config);
};
