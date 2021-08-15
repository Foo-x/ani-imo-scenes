import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import * as styles from "~/styles/components/toast.module.css"

const displayTimeMilli = 3000

type Props = {
  text: string
  onHidden: () => void
}

const Toast: React.FC<Props> = ({ text, onHidden }) => {
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsHidden(false)
    })
  }, [])

  useEffect(() => {
    if (!isHidden) {
      const timer = setTimeout(() => {
        setIsHidden(true)
      }, displayTimeMilli)
      return () => clearTimeout(timer)
    }
    return
  }, [isHidden])

  const onTransitionEnd = () => {
    if (isHidden) {
      onHidden()
    }
  }

  return (
    <div
      className={isHidden ? styles.hiddenContainer : styles.container}
      onTransitionEnd={onTransitionEnd}
    >
      <div className={styles.body}>{text}</div>
      <button
        className={styles.closeButton}
        onClick={() => {
          setIsHidden(true)
        }}
      >
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 409.806 409.806"
          xmlSpace="preserve"
          width="0.75rem"
          height="0.75rem"
        >
          <path d="M228.929,205.01L404.596,29.343c6.78-6.548,6.968-17.352,0.42-24.132c-6.548-6.78-17.352-6.968-24.132-0.42 c-0.142,0.137-0.282,0.277-0.42,0.42L204.796,180.878L29.129,5.21c-6.78-6.548-17.584-6.36-24.132,0.42 c-6.388,6.614-6.388,17.099,0,23.713L180.664,205.01L4.997,380.677c-6.663,6.664-6.663,17.468,0,24.132 c6.664,6.662,17.468,6.662,24.132,0l175.667-175.667l175.667,175.667c6.78,6.548,17.584,6.36,24.132-0.42 c6.387-6.614,6.387-17.099,0-23.712L228.929,205.01z" />
        </svg>
      </button>
    </div>
  )
}

let toastContainer: HTMLDivElement

export const toast = (text: string) => {
  if (!toastContainer) {
    toastContainer = document.createElement("div")
  }
  if (!document.body.contains(toastContainer)) {
    document.body.appendChild(toastContainer)
  }

  ReactDOM.render(
    <Toast
      text={text}
      onHidden={() => ReactDOM.unmountComponentAtNode(toastContainer)}
    />,
    toastContainer
  )
}
