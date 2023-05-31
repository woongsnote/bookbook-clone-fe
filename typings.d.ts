interface Book {
    id: number,
    title: string,
}

interface BookCard extends Book {
    imageUrl: string,
    rating: number,
}

interface BookItem extends Book {
    height: number,
    isLeft: boolean,
}