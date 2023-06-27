
import carrito from './Assets/carrito.png'

const CartWidget = () => {
    return (
        <div className="w-25 p-3">
            <img src={carrito} alt="cart-widget"/>
            0
        </div>
    )
}

export default CartWidget