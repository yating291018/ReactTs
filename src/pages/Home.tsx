import React, { useRef, useEffect, PropsWithChildren, ChangeEvent } from 'react'
import styles from './index.module.less'

type AppProps = PropsWithChildren<{ name: string }>

// type IProps = {
//   children: JSX.Element;
// }

// class Component<P, S> {
//   readonly props: Readonly<{ children: React.ReactNode }> & Readonly<P>;
//   state: Readonly<S>;
// }

const HomePage = (props: AppProps) => {
  const divRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    console.log(divRef.current?.innerHTML)
  }, [])
  const handler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('value', e.target.value)
  }
  return (
    <div className={styles.container} ref={divRef}>
      11111
      <input type="text" value="1111" onInput={handler} />
    </div>
  )
}

export default HomePage
