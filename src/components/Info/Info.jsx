import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const Info = () => {
    return (
        <>
            <h3>Step: 2</h3>
            <h2>Your Information</h2>
            <div className="customer">
                <form>
                    <input placeholder='Name'></input>
                    <input placeholder='Street Address'></input>
                    <input placeholder='City'></input>
                    <input placeholder='Zip'></input>
                </form>
                <input type="radio" value="pickup" name="pickup" /> Pickup
                <input type="radio" value="delivery" name="delivery" /> Delivery
            </div>
        </>
    )

}

export default Info;