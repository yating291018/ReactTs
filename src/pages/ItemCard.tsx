import { FC, memo } from 'react'
import { Checkbox } from 'antd'
interface CartItem {
  id: number;
  price: number;
  checked: boolean;
  onCheckedChange: {
    current: (id: number) => void
  }
}

const areEqual = (prevProps: CartItem, nextProps: CartItem) => {
  return prevProps.checked === nextProps.checked
}
const ItemCard: FC<CartItem> = (props) => {
  const { onCheckedChange, checked, price, id } = props
  return (
    <div className="good">
      <Checkbox checked={checked} onChange={() => onCheckedChange.current(id)}>商品</Checkbox>
      <span>${price}</span>
    </div>
  )
}

export default memo(ItemCard, areEqual)
