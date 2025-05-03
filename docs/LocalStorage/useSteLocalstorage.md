# ⚛️ useSetLocalStorage

`useSetLocalStorage` is a utility React hook from the **Hooksy** library that allows you to directly set values in `localStorage`.  
It works as a simple setter function and is useful when you don't need React state but still want to persist data.

---

## ✨ Features

- 🔥 Write-only hook for `localStorage`  
- 🧠 Handles JSON serialization under the hood  
- 💡 Supports function-style updates (like `useState`)  
- 🧹 Lightweight and easy to use

---

## 🚀 Usage

```jsx
import { useSetLocalStorage } from 'hooksy';

function SaveTokenButton() {
  const setLocalStorage = useSetLocalStorage();

  const handleSave = () => {
    setLocalStorage('auth_token', 'my-super-secret-token');
  };

  return <button onClick={handleSave}>Save Token</button>;
}
