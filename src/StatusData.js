function getStatus(statusName) {
  switch (statusName) {
    case "Awaiting":
      return {
        text: "Bekleniyor",
        colorScheme: "yellow",
      };
      break;
    case "Created":
      return {
        text: "Oluşturuldu",
        colorScheme: "yellow",
      };
      break;
    case "Picking":
      return {
        text: "Toplanıyor",
        colorScheme: "orange",
      };
      break;
    case "Invoiced":
      return {
        text: "Fatura Kesildi",
        colorScheme: "green",
      };
      break;
    case "Shipped":
      return {
        text: "Kargoda",
        colorScheme: "green",
      };
      break;
    case "AtCollectionPoint":
      return {
        text: "PUDO Noktasında",
        colorScheme: "green",
      };
      break;
    case "Cancelled":
      return {
        text: "İptal Edildi",
        colorScheme: "red",
      };
      break;
    case "UnPacked":
      return {
        text: "Paket Bölündü",
        colorScheme: "yellow",
      };
      break;
    case "Delivered":
      return {
        text: "Teslim Edildi",
        colorScheme: "green",
      };
      break;
    case "UnDelivered":
      return {
        text: "Teslim Edilemedi",
        colorScheme: "orange",
      };
      break;
    case "UnDeliveredAndReturned":
      return {
        text: "Teslim Edilemedi Ve İade Geldi",
        colorScheme: "red",
      };
      break;

    default:
      return {
        text: "Bekleniyor",
        colorScheme: "yellow",
      };
      break;
  }
}
export default { getStatus };
