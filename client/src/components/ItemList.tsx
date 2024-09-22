import React from 'react';

import type { Item } from '../interfaces/Item';

interface ItemListProps {
    items?: Item[] | null;
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
    return (
        <ul className="list-group" id="itemList">
            {(items?.length ?? 0) > 0 ? (
                items?.map(item => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    {item.name}
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => item.onRemove(item.id)}
                    >
                        Remove
                    </button>
                    </li>
                ))
            ) : (
                <p>No items available</p>
            )}
        </ul>
    );
}

export default ItemList;