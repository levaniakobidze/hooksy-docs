---
sidebar_position: 1
---
# ⚛️ useLocalStorage

`useLocalStorage` is a custom React hook from the **Hooksy** library that syncs state with `localStorage`.  
It behaves just like `useState`, but keeps your data persistent between page reloads.

---

## ✨ Features

- ✅ Same API as `useState`
- ✅ Saves data to `localStorage`
- ✅ Supports function-style updates
- ✅ Automatically JSON serializes/deserializes values

---

## 🧠 How it Works

1. On initial render, it looks for a value in `localStorage` using the given key.
2. If found, it parses the JSON and uses that value.
3. If not found, it falls back to the `initialValue`.
4. When updated, it sets both state and `localStorage`.

---

## 🚀 Usage

```jsx
import { useLocalStorage } from 'hooksy';

function MyComponent() {
  const [name, setName] = useLocalStorage('username', 'Guest');

  return (
    <div>
      <p>Welcome, {name}!</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
