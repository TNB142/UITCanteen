import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../../context/shoppingCartContext"
import menuItems from "../../data/items.json"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { decreaseCartQuantity } = useShoppingCart()
    const item = menuItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2}
            className="d-flex align-items-center">
            <img src={item.imgUrl}
                style={{
                    width: "125px",
                    height: "75px",
                    objectFit: "cover"
                }} />
            <div className="me-auto">
                <div>
                    {item.name} {" "}
                    <div>
                        {quantity >= 1 && (<span
                            className="text-muted"
                            style={{
                                fontSize: "1rem"
                            }}>
                            Số lượng: {quantity} phần
                        </span>
                        )}
                    </div>
                </div>
            </div>
            <Button
                variant="danger"
                size="sm"
                // className="bg-danger"
                onClick={() => decreaseCartQuantity(item.id)}
            >
                <img
                alt=""
                src="../svg/delete.svg"
                />
            </Button>
        </Stack>
    )
}