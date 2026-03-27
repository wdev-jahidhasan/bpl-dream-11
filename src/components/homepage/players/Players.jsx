import React, { use, useState } from 'react';
import AvailablePlayers from '../players/AvailablePlayers/AvailablePlayers';

const Players = ({playersPromise}) => {
  console.log(playersPromise);
  const players = use(playersPromise);
  

  const [selectedType, setSelectedType] = useState('available');
  console.log(selectedType, "selectedType");
  return (
    <div className='container mx-auto my-[60px]'>

      <div className='flex justify-between items-center gap-4 mb-[20px]'>
        <h2 className='font-bold text-3xl'>Available Players</h2>
        
        <div>
          <button
          onClick={()=> setSelectedType("available")}
           className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : "" } rounded-r-none rounded-l-xl`}>Available</button>
          <button
          onClick={()=> setSelectedType("selected")}
          className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : "" } rounded-l-none rounded-r-xl`}>Selected</button>
        </div>
      </div>

      <AvailablePlayers players={players}></AvailablePlayers>
    </div>
  );
};

export default Players;