import { useState } from "react"

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increase count
        </button>
      </div>
    </main>
  )
}
