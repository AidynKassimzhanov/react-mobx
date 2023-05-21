import React, { useEffect, useState } from 'react'
import { Title } from '../components/Title';
import { Button, ListGroup, Row, Table } from 'react-bootstrap';
<<<<<<< HEAD
import { observer } from 'mobx-react-lite';
import games from '../store/games';
=======
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addManyGamesAction, removeGameAction } from '../store/gameReducer';
>>>>>>> 9fcb7659f4e2ae497b837a132037864fd317e1b1

const DiscoverGames = observer(() => {
const title = "Главная страница";

<<<<<<< HEAD
useEffect(() => {
    games.getGames()
=======
const dispatch = useDispatch();
const games = useSelector(state => state.games.games);

//Функция загрузки данных с сервера
const fetchGames = async () => {
    const $host = axios.create({
        baseURL: process.env.REACT_APP_API_URL
    })   
    const {data} = await $host.get('api/v1/games')
    console.log(data.content)
    dispatch(addManyGamesAction(data.content))
}

//удаление игры с состояния
const removeGame = (slug) => {
    dispatch(removeGameAction(slug))
}

//загрузка данных с сервера
useEffect(() => {
    fetchGames()
>>>>>>> 9fcb7659f4e2ae497b837a132037864fd317e1b1
}, [])

  return (
    <div>
        <Title title={title}/>
        <Table striped>
            <thead>
                <tr>
                <th>#</th>
                <th>Game</th>
                <th>Author</th>
                <th>Description</th>
                </tr>
            </thead>
            <tbody>
                    {games.games.map((game, index) =>
                        <tr key={game.slug}>
                            <td>{index + 1}</td>
                            <td>{game.title}</td>
                            <td>{game.author}</td>
                            <td>{game.description}</td>
<<<<<<< HEAD
                            <Button onClick={() => games.removeGame(game.slug)}> Удалить </Button>
=======
                            <Button onClick={() => removeGame(game.slug)}> Удалить </Button>
>>>>>>> 9fcb7659f4e2ae497b837a132037864fd317e1b1
                        </tr>
                    )}
            </tbody>
            </Table>
     
    </div>
    
    
  )
})

export default DiscoverGames