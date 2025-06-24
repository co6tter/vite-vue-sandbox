export const makeArrayPathString = (
  root: string,
  idx: number,
  sub?: string,
) => {
  if (sub) {
    return `${root}[${idx}].${sub}`;
  } else {
    return `${root}[${idx}]`;
  }
};

export const getArrayIndex = (path: string): number | undefined => {
  const m = path.match(/\[(\d+)]/);
  return m ? Number(m[1]) : undefined;
};
