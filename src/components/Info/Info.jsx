import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const Info = () => {

    // const history = useHistory();

    const dispatch = useDispatch();

    const handleName = (event) => {
        dispatch({ type: 'SET_CUSTOMER',
        payload: event.target.value });
    }

    const handleStreet = (event) => {
        dispatch({
            type: 'SET_STREET',
            payload: event.target.value
        });
    }

    const handleCity = (e) => {
        dispatch({
            type: 'SET_CITY',
            payload: e.target.value
        });
    }

    const handleZip = (e) => {
        dispatch({
            type: 'SET_ZIP',
            payload: e.target.value
        });
    }

    return (
        <>
            <h3>Step: 2</h3>
            <h2>Your Information</h2>
            <button>Next</button>
            <div className="customer">
                <form>
                    <input onChange={handleName} type='text' placeholder='Name'></input>
                    <input onChange={handleStreet} type='text' placeholder='Street Address'></input>
                    <input onChange={handleCity} type='text' placeholder='City'></input>
                    <input onChange={handleZip} type='text' placeholder='Zip'></input>
                </form>
            </div>
                <input type="radio" value="pickup" name="pickup" /> Pickup
                <input type="radio" value="delivery" name="delivery" /> Delivery
        </>
    )

}

export default Info;