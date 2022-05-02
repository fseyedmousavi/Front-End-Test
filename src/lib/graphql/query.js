import {
    gql
} from "graphql-request";

export const GetBookCover = gql `
    {
        books: bookshop_book {
            id
            author
            img
            price
            title
        }
    }`

export const GetBookById = gql `
    query ($id: uuid!){
        book: bookshop_book_by_pk(id: $id) {
            id
            author
            img
            price
            publish_year
            rate
            title
            summary
        }
    }`

export const GetCartByUserId = gql `
    query ($user_id: uuid!) {
        data: bookshop_cart (where:{user_id:{_eq:$user_id}}) {
            book_id
        }
    }
`

export const BookInCart = gql `
    query ($book_id:uuid!, $user_id:uuid!) {
        inCart: bookshop_cart_by_pk(book_id: $book_id, user_id: $user_id) {
            __typename
        }
    }
`