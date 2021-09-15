import { FC, useState, useEffect, useRef } from 'react'
import ItemCard from './ItemCard'
import './good.less'
interface IProps {}

interface CheckMap {
  id: number
  checked: boolean
  price: number
}

// Omit摘除某些属性
type IMap = Omit<CheckMap, 'checked | price'>

const GoodPage: FC<IProps> = () => {
  // 选中的数据
  const onCheckedChange = (id: number) => {
    console.log('map', map)
    setMap({
      ...map,
      id: 1,
    })
    const index = checkedDataMap.findIndex((item) => item.id === id)
    checkedDataMap[index].checked = !checkedDataMap[index].checked
    setcheckedDataMap([...checkedDataMap])
  }
  const handlerRef = useRef<(id: number) => void>(onCheckedChange)
  const [checkedDataMap, setcheckedDataMap] = useState<CheckMap[]>([
    {
      id: 1,
      checked: false,
      price: 105,
    },
    {
      id: 2,
      checked: false,
      price: 103,
    },
    {
      id: 3,
      checked: false,
      price: 102,
    },
    {
      id: 4,
      checked: false,
      price: 100,
    },
  ])

  const [map, setMap] = useState<IMap | {}>()
  // setMap({
  //   id: 1,
  //   checked: false,
  //   price: 1
  // })
  // 总和
  const sumPrice = () => {
    return checkedDataMap
      .filter((item) => {
        return item.checked === true
      })
      .reduce((prev: number, current: CheckMap) => {
        return prev + current.price
      }, 0)
  }

  useEffect(() => {
    handlerRef.current = onCheckedChange
  })

  return (
    <div className="container">
      <div className="title">购物车</div>
      {checkedDataMap.map((item) => {
        return (
          <ItemCard
            key={item.id}
            {...item}
            onCheckedChange={handlerRef}
          ></ItemCard>
        )
      })}
      <div className="good">
        <span>总和</span>
        <span>${sumPrice()}</span>
      </div>
    </div>
  )
}

export default GoodPage
