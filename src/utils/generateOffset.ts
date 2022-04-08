export function generateOffset(page: number) {
  if (page === 0) {
    page = 1;
  }

  return page * 12 - 12;
}
