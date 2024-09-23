import React, { useState } from 'react';

import type { Item } from '../interfaces/Item';

interface ItemInputFormProps {
    addItem: (item: Item) => void;
    tripId: number;
    newItemId: number;
}

const ItemInputForm: React.FC<ItemInputFormProps> = ({ addItem, tripId: number, newItemId }) => {
    const [itemName, setItemName] = useState<string>('');
    const [category, setCategory] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (itemName && category) {
            const newItem: Item = {
                id: newItemId,
                tripId: number,
                name: itemName,
                category: category,
                onRemove: (id: number) => console.log(`Removing item with id ${id}`),
            };
            addItem(newItem);
            setItemName('');
            setCategory('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input 
                className="form-control" 
                type="search" 
                placeholder="ItemName e.g. water, jacket, energybar" 
                aria-label="ItemName"
                onChange={(e) => setItemName(e.target.value)}> </input>
                <button className="btn btn-outline-success" type="submit">Add</button>
            </div>

            <p className="mt-3 mx-1">Category:</p>

            <div className="form-check form-check-inline mx-1">
                <input 
                className="form-check-input" 
                type="radio" 
                name="addOption" 
                id="cloths" 
                value="cloths"
                onChange={(e) => setCategory(e.target.value)}> </input>
                <label className="form-check-label" htmlFor="cloths">Cloths</label>
            </div>

            <div className="form-check form-check-inline mx-1">
                <input 
                className="form-check-input" 
                type="radio" 
                name="addOption" 
                id="drinks" 
                value="drinks"
                onChange={(e) => setCategory(e.target.value)}> </input>
                <label className="form-check-label" htmlFor="drinks">Drinks</label>
            </div>

            <div className="form-check form-check-inline mx-1">
                <input 
                className="form-check-input" 
                type="radio" 
                name="addOption" 
                id="food" 
                value="food"
                onChange={(e) => setCategory(e.target.value)}> </input>
                <label className="form-check-label" htmlFor="food">Food</label>
            </div>

            <div className="form-check form-check-inline mx-1">
                <input 
                className="form-check-input" 
                type="radio" 
                name="addOption" 
                id="tools" 
                value="tools"
                onChange={(e) => setCategory(e.target.value)}> </input>
                <label className="form-check-label" htmlFor="tools">Tools</label>
            </div>
        </form>
    );
}

export default ItemInputForm;