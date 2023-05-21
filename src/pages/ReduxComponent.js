import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../store/reducers/action';
import { Button } from 'react-bootstrap';
import { addCustomerAction, removeCustomerAction } from '../store/customerReducer';
import { fetchCustomers } from '../asyncAction/customers';


const ReduxComponent = () => {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers);

    const addCash = (cash) => {
      dispatch({type:"ADD_CASH", payload: cash})
    }

    const getCash = (cash) => {
      dispatch({type:"GET_CASH", payload: cash})
    }

    const addCustomer = (name) => {
      const customer = {
        name,
        id: Date.now(),
      }
      dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
      dispatch(removeCustomerAction(customer.id))
    }
    
  // useEffect(() => {
    //     dispatch(fetchGames());
    //   }, []);

  return (
    <div>
      ReduxComponent
      <div style={{fontsize: "3rem"}}>{cash}</div>
      <div style={{display: "flex"}}>
        <Button onClick={() => addCash(Number(prompt()))}>Пополнить баланс</Button>
        <Button onClick={() => getCash(Number(prompt()))}>Снять с баланса</Button>

        <Button onClick={() => addCustomer(prompt())}>Добавить клиента</Button>
        <Button onClick={() => dispatch(fetchCustomers())}>Добавить клиентов</Button>
      </div>

      {customers.length > 0 ?
        <div>
          {customers.map(customer => 
              <div 
                onClick={() => removeCustomer(customer)}
                style={{fontSize:"2rem", border: "1px solid black", marginTop:5, padding: "10px"}}
              >
                {customer.name}
              </div>
          )}
        </div>
      :
        <div style={{fontSize:"2rem", marginTop:20}}>
          Клиенты отсутствует!
        </div>
      }
    </div>
  )
}

export default ReduxComponent