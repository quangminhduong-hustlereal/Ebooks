// src/pages/BookListPage.tsx
import React from 'react'

interface Book {
  id: string
  title: string
  author: string
  coverUrl: string
  price: number
}

const BookListPage: React.FC = () => {
  // Sử dụng kiểu Book[] thay vì any[]
  const [books, setBooks] = React.useState<Book[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    setLoading(true)
    setError(null)
    console.log('[BookListPage] Attempting to fetch /api/books...')
    fetch('/api/books')
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        return await res.json()
      })
      .then((data: Book[]) => {
        console.log('[BookListPage] Fetched books data:', data)
        setBooks(data)
      })
      .catch((err) => {
        console.error('[BookListPage] Error fetching books:', err)
        setError(err.message)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      {loading && <p className="text-center text-gray-500">Loading books...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      {!loading && !error && (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white text-lg font-semibold line-clamp-2">
                    {book.title}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">{book.author}</p>
                <div className="flex items-center justify-between">
                  <span className="text-indigo-600 font-bold">
                    ${book.price.toFixed(2)}
                  </span>
                  <button className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Quan trọng: Phải có default export
export default BookListPage
