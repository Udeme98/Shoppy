import { Offcanvas } from "react-bootstrap";
import { useShopping } from "../context/ShoppingCartContext";

type ShoppingCartProp = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProp) => {
  const { closeCart } = useShopping();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
};
export default ShoppingCart;
