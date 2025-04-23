export type Book = {
    id: string,
    title: string,
    author: string
};

export type ListProps<T> = {
    items: T[],
    renderItem: (item: T) => React.ReactNode;
}