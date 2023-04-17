// generic loop
export const loop = (times: number, callback: (x: number) => void) => {
  for (let i = 0; i < times; i++) {
    callback(i);
  }
};
