import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";
const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {

  const handleDeleteSelectedPlayer = (player) => {

    const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName !== player.playerName);
    setSelectedPlayers(filteredPlayers);
    setCoin(coin + player.price);

  }

  return (
    <div>
      {selectedPlayers.length === 0 ?
        <div className="text-center my-24">
          <h2 className="text-2xl font-semibold text-gray-400 mb-5">No players selected yet</h2>
          <p className="font-semibold">Go to available tab to select player</p>
        </div>
        : selectedPlayers.map((player, ind) => {
          return <div key={ind} className="flex items-center gap-6 justify-between p-10 rounded-2xl border-2 my-5">

            <div className="flex items-center gap-5">
              <img src={player.playerImage} alt="" className="h-20 w-20" />
              <div>
                <h2 className="flex gap-2 items-center font-semibold text-2xl"><FaUser /> {player.playerName}</h2>
                <p>{player.playerType}</p>
              </div>
            </div>
            <button className="btn text-red-500" onClick={() => handleDeleteSelectedPlayer(player)}>
              <MdDelete />
            </button>

          </div>
        })
      }
    </div>
  );
};

export default SelectedPlayers;