export type Author = {
  id: string
  name: string
}

export type Deck = {
  isFavorite: boolean
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}

export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type Decks = {
  items: Deck[]
  pagination: Pagination
}

// {
//   "items": [
//   {
//     "isFavorite": true,
//     "author": {
//       "id": "string",
//       "name": "string"
//     },
//     "id": "string",
//     "userId": "string",
//     "name": "string",
//     "isPrivate": true,
//     "cover": "string",
//     "created": "2025-01-08T07:51:09.173Z",
//     "updated": "2025-01-08T07:51:09.173Z",
//     "cardsCount": 0
//   }
// ],
//   "pagination": {
//     "currentPage": 0,
//     "itemsPerPage": 0,
//     "totalPages": 0,
//     "totalItems": 0
//   }
// }


export type BaseResponse = {
  id: string,
  userId: string,
  name: string,
  isPrivate: boolean,
  cover: string,
  created: string,
  updated: string,
  cardsCount: string
}

// {
//   "id": "string",
//   "userId": "string",
//   "name": "string",
//   "isPrivate": true,
//   "cover": "string",
//   "created": "2025-01-09T20:18:28.260Z",
//   "updated": "2025-01-09T20:18:28.260Z",
//   "cardsCount": 0
// }