import { http, HttpResponse} from 'msw'
import { createMockBooks, MockBook } from '../db'

// Base URL API giả định (có thể đặt trong config sau)
const API_URL = '/api'

const mockBooks: MockBook[] = createMockBooks(35)

export const bookHandlers = [
  http.get(`${API_URL}/books`, ({ request }) => {
    const url = new URL(request.url)
    console.log('[MSW] Handling GET:', url.pathname + url.search)

    return HttpResponse.json(mockBooks)
  }),

  // Handler cho request GET /api/books/:bookId
  http.get<{ bookId: string }, never, MockBook | { message: string }>( // Generic types: Params, RequestBody, ResponseBody
    `${API_URL}/books/:bookId`,
    ({ params }) => {
      const { bookId } = params
      console.log(`[MSW] Handling GET: /api/books/${bookId}`)
      const book = mockBooks.find((b) => b.id === bookId)

      if (!book) {
        // Nếu không tìm thấy, trả về lỗi 404
        return HttpResponse.json(
          { message: 'Book Not Found' },
          { status: 404 }
        )
      }
      // Nếu tìm thấy, trả về thông tin sách
      return HttpResponse.json(book)
    }
  ),
]
