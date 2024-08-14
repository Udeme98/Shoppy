import { Stack } from "react-bootstrap";
import { useShopping } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShopping();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2}>
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
    </Stack>
  );
};
export default CartItem;
