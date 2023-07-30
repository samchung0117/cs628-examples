// Section 5 - useRef Hook
// Example: https://react.dev/learn/escape-hatches#referencing-values-with-refs
// Hook: https://react.dev/reference/react/useRef
import { useRef } from 'react';

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}