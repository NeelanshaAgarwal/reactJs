import React, { useRef } from 'react'

const FocusInput = () => {

    const inputElement = useRef(null)

    const focusInput = () => {
        inputElement.current.focus()
        inputElement.current.value = "Hello"
    }

  return (
    <div>
      <input ref={inputElement} type="text" />
        <button onClick={focusInput}>Focus and click me!</button>
    </div>
  )
}

export default FocusInput
