import { Offcanvas, Stack } from "react-bootstrap";
import { useShopping } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";

type ShoppingCartProp = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProp) => {
  const { closeCart, cartItems } = useShopping();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
export default ShoppingCart;
