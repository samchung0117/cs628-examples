//Section 6 - useRef Hook
// Example: https://react.dev/learn/escape-hatches#manipulating-the-dom-with-refs
// Hook: https://react.dev/reference/react/useRef
import { useRef } from 'react';

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}