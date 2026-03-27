import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

const Card = ({ player, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {

  const [isSelected, setIsSelected] = useState(false);

  const handleChoosePlayer = () => { 

    let newCoin = coin - player.price;
    if(newCoin >= 0){
      setCoin(coin - player.price)
    }else{
      alert('Not Enough Coins');
      return;
    }

    alert(`${player.playerName} is selected`)
    setIsSelected(true); 
    setSelectedPlayers([...selectedPlayers, player])
  }
    

  return (

    <div className="card bg-base-100 shadow-sm border border-teal-500">
      <figure>
        <img className='h-[450px] w-full rounded-lg'
          src={player.playerImage}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"><FaUser /> {player.playerName}</h2>

        <div className='flex justify-between'>
          <div className='flex gap-2 items-center'>
            <FaFlag />
            <p>{player.playerCountry}</p>
          </div>
          <button className='btn'>{player.playerType}</button>
        </div>

        <div className="divider"></div>

        <h2 className='font-bold'>Rating: {player.rating}</h2>

        <div className='flex justify-between gap-4 font-bold'>
          <p>{player.battingStyle}</p>
          <p className='text-right'>{player.bowlingStyle}</p>
        </div>



        <div className="card-actions justify-between items-center">
          <p className='font-semibold'>Price: {player.price} Taka</p>
          <button className="btn btn-soft btn-primary" onClick={handleChoosePlayer} disabled={isSelected}>
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  )

};

export default Card;