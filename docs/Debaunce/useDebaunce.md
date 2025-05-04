# ⚛️ useDebounce

`useDebounce` is a custom React hook from the **Hooksy** library that delays updating a value until after a specified amount of time has passed.  
It's useful when dealing with user input, search fields, or anything that shouldn't fire instantly on every keystroke.

---

## ✨ Features

- 🧠 Keeps performance smooth by limiting rapid updates  
- ⚡ Simple to use: just pass in a value and delay  
- 🧹 Cleans up timers on unmount or re-run  

---

## 🚀 Usage

```jsx
import { useDebounce } from 'hooksy';

function SearchBox() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch) {
      // trigger API call or filtering
      console.log('Searching:', debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search..."
      />
  );
}
```