const startDate = new Date('2020-05-03');
const currentDate = new Date();

export const currentYear = currentDate.getFullYear();

export function getMage(): number {
  const yearsDifference = currentDate.getFullYear() - startDate.getFullYear();
  const isBeforeMay =
    currentDate.getMonth() < 4 ||
    (currentDate.getMonth() === 4 && currentDate.getDate() < 3);

  return isBeforeMay ? yearsDifference - 1 : yearsDifference;
}
