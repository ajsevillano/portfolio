export default function generateRandomId() {
  const id = Math.floor(Math.random() * 20000);
  const suffix = Math.random().toString(36).substring(2, 10).toUpperCase();
  return `${id}-${suffix}`;
}
