const product = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList()  {
    const listItems = product.map(product =>
        <li
            key={product.id}
            style={{
                color: product.isFruit ? 'red' : 'darkgreen',
            }}
        >
            {product.title}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    );
}