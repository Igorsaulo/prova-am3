export type Item<T> = {
    data: T[],
    totalCount: number,
    hasNext: boolean
}

export type Customer = {
    id: number,
    name: string
}

export type Product = {
    id: number,
    name: string
}

export type ProductItem = Item<Product>

export type CustomerItem = Item<Customer>