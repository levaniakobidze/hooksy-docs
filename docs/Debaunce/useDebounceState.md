# ⚛️ useDebouncedState

`useDebouncedState` is a custom hook from the **Hooksy** library that acts like `useState`, but debounces the value before returning it.  
This is perfect for filtering UIs, live search, input forms, or anything where you don’t want updates firing too frequently.

---

## ✨ Features

- 💬 Acts like `useState` but with a debounced return value  
- 🔄 Only updates after delay (no rapid firing)  
- ⚙️ Works great with inputs, search fields, and UI sliders  
- 🧹 Auto-cleans timers to avoid memory leaks

---

## 🚀 Usage

```jsx
import { useDebouncedState } from 'hooksy/debounce';

function FilterInput() {
  const [debouncedValue, setValue] = useDebouncedState('', 500);

  useEffect(() => {
    if (debouncedValue) {
      console.log('Filtered by:', debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <input
      type="text"
      placeholder="Filter items..."
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

```