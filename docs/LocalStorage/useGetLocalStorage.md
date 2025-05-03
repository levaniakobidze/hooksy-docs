# ⚛️ useGetLocalStorage

`useGetLocalStorage` is a read-only custom React hook from the **Hooksy** library.  
It retrieves a value from `localStorage` and keeps it in sync when storage changes — perfect for cross-tab sync or lightweight global state observation.

---

## ✨ Features

- ⚛️ Same API style as `useState`, but read-only  
- 📦 Automatically reads from `localStorage`  
- 🔄 Listens for `storage` events to stay in sync across tabs  
- 🛟 Fallbacks to `initialValue` if key is missing  

---

## 🧠 How it Works

1. 🔍 On initial render, it reads from `localStorage` using the provided key  
2. ✅ If the key exists, it parses the JSON and returns the value  
3. ❌ If the key doesn't exist or parsing fails, it uses `initialValue`  
4. 🔁 Listens for `storage` changes and updates reactively when `localStorage` is modified (even from other browser tabs)

---

## 🚀 Usage

```jsx
import { useGetLocalStorage } from 'hooksy';

function Navbar() {
  const theme = useGetLocalStorage('darkMode', false);

  return (
    <nav className={theme ? 'dark' : 'light'}>
      Current Theme: {theme ? 'Dark' : 'Light'}
    </nav>
  );
}
