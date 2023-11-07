
import { useState } from 'react';


function useTextToggle(initialText) {
  const [text, setText] = useState(initialText);

  const toggleText = () => {
    setText(text === initialText ? 'Text Toggled!' : initialText);
  };

  return [text, toggleText];
}

export default useTextToggle;