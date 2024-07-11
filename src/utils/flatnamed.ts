export const flatnamed = (input: string) => {
  return input.toLowerCase().replace(/[^\wé'-]+/g, "_");
};
