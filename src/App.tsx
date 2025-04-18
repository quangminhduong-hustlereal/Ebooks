import { useState, useEffect } from 'react'

interface Book {
  id: string
  title: string
  author: string
  price: number
}

function App() {
  const [books, setBooks] = useState<Book[]>([]) // Sử dụng kiểu Book[] thay vì any[]
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    console.log('[App] Attempting to fetch /api/books...')
    fetch('/api/books')
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data: Book[] = await res.json() // Đảm bảo dữ liệu trả về là kiểu Book[]
        console.log('[App] Fetched books data:', data)
        setBooks(data)
      })
      .catch((err) => {
        console.error('[App] Error fetching books:', err)
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ebook Store (MSW Test)</h1>
      {loading && <p>Loading books...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {books.map((book) => (
            <li key={book.id} className="mb-2 border-b pb-1">
              {book.title} by {book.author} (${book.price})
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
