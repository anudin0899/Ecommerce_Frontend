import React from 'react';
import Style from "./index.module.css"

const AddressCard = ({ address, isSelected, onSelect }) => {
    return (
        <div
            className={`${Style.address_card} ${isSelected ? `${Style.selected}` : ''}`}
            onClick={() => onSelect(address._id)}
        >
            <div className={Style.radio_wrapper}>
                <input
                    type="radio"
                    name="address"
                    checked={isSelected}
                    onChange={() => onSelect(address._id)}
                />
                <label>
                    <h4>{address?.houseName}</h4>
                    <p>{address?.locality},</p>
                    <p>{address?.city}, {address?.state} - {address?.pincode}</p>
                    <p>{address?.landmark},</p>
                    <p>{address?.mobileNumber}</p>
                </label>
            </div>
        </div>
    );
};

export default AddressCard;
