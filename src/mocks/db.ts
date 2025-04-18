import { faker } from '@faker-js/faker'

export interface MockBook {
  id: string
  title: string
  author: string
  summary: string
  coverUrl: string
  price: number
  rating: number
  createdAt: Date
}


const createMockBook = (): MockBook => ({
  id: faker.string.uuid(),
  title: faker.commerce.productName() + ' Book',
  author: faker.person.fullName(),
  summary: faker.lorem.paragraph(),

  coverUrl: faker.image.urlLoremFlickr({ category: 'book', width: 300, height: 400 }),
  price: parseFloat(faker.commerce.price({ min: 5, max: 50 })),
  rating: faker.number.float({ min: 1, max: 5, fractionDigits: 1 }),
  createdAt: faker.date.past({ years: 2 }),
})

// Hàm tạo danh sách sách giả
export const createMockBooks = (count = 20): MockBook[] => {
  return Array.from({ length: count }, createMockBook)
}


