export type SerializedData = Record<
  string,
  string | number | Record<string, string | number> | (string | number)[]
>;
