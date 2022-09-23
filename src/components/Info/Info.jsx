import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const Info = () => {
    return (
        <>
            <h3>Step: 2</h3>
            <h2>Your Information</h2>
            <button>Next</button>
            <div className="customer">
                <form>
                    <input type='text' placeholder='Name'></input>
                    <input type='text' placeholder='Street Address'></input>
                    <input type='text' placeholder='City'></input>
                    <input type='text' placeholder='Zip'></input>
                </form>
            </div>
                <input type="radio" value="pickup" name="pickup" /> Pickup
                <input type="radio" value="delivery" name="delivery" /> Delivery
        </>
    )

}

export default Info;