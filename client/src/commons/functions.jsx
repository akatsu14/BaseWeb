export const functionAlert = (notice, content, onPressCan, onPressOk) => {
  const isConfirm = confirm(`${notice}\n${content}`);
  console.log("🚀 ~ functionAlert ~ isConfirm:", isConfirm);
  if (isConfirm) {
    onPressOk && onPressOk();
  } else {
    onPressCan && onPressCan();
  }
};
export const toVND = (price) => {
  return price?.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};
