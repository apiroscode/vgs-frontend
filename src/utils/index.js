import { firestore } from "@/config/firebase";

export const maybe = (exp, d) => {
  try {
    const result = exp();
    return result === undefined ? d : result;
  } catch {
    return d;
  }
};

export const reTotalOrder = async (orderId) => {
  const orderRef = firestore.collection("orders").doc(orderId);
  const allItems = await orderRef.collection("items").get();
  let totalQty = [];
  const totalAmount = await Promise.all(
    allItems.docs.map(async (item) => {
      const { qty } = item.data();
      totalQty.push(qty);
      const product = await firestore.collection("products").doc(item.id).get();

      if (product.exists) {
        const { price } = product.data();
        return qty * price;
      }
      return 0;
    })
  );

  await orderRef.update({
    totalQty: totalQty.reduce((a, b) => a + b, 0),
    totalAmount: totalAmount.reduce((a, b) => a + b, 0),
  });
};
