export const formatDate = (inputDate) => {
  if (!inputDate) return "";

  const date = new Date(inputDate);
  if (isNaN(date)) return "";

  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();

  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return `${month} ${day}, ${year} at ${time}`;
};