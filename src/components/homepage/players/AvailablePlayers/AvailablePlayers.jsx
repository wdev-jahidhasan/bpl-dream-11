import React from 'react';
import Card from '../../../ui/Card';

const AvailablePlayers = ({ players, setCoin, coin, setSelectedPlayers, selectedPlayers }) => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
          players.map((player) => {
            return <Card 
            key={player.id}
            player={player} 
            setCoin={setCoin} 
            coin={coin} 
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}></Card>
          })
        }
      </div>
    </div>

  );
};

export default AvailablePlayers;