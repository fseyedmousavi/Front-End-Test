import {
    gql
} from "graphql-request";

export const InsertCartOne = gql `
    mutation ($book_id: uuid!, $user_id: uuid!) {
        insert_bookshop_cart_one (object: {user_id: $user_id, book_id:$book_id}) {
            __typename
        }
    }
`

export const DeleteBookFromCart = gql `
    mutation ($book_id:uuid!, $user_id:uuid!) {
        delete_bookshop_cart_by_pk(book_id: $book_id, user_id: $user_id) {
            __typename
        }
    }
`