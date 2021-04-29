import React, { useState } from "react";
import Tile from "./Tile";
import {tile_amount, grid_size, board_size} from "./constants"
import {canSwap, swap} from "./helpers"

function Board() {

    // initiating an empty array of length = 9 (9 is the total amount of tiles we are working with)
    const[tiles, setTiles] = useState([...Array(tile_amount).keys()]);
    
    // first checks to see if Tiles can be swapped, then swaps thems
    const swapTiles = (tileIndex) => {
        if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
          const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1))
          setTiles(swappedTiles)
        }
      }
    
    // when a tile is clicked, the swapTiles function is called, and it provides the index of the tile that was clicked as the parameter for swapTiles
    const handleTileClick = (index) => {
    swapTiles(index)
    }
    
    const squareWidth = Math.round(board_size / grid_size);
    const squareHeight = Math.round(board_size / grid_size);
    const style = {
        width: board_size,
        height: board_size,
    };

    return (
        <>
            <ul style={style} className="board">
                {tiles.map((tile, index) => (
                    <Tile>
                        key={tile}
                        index={index}
                        tile={tile}
                        width={squareWidth}
                        height={squareHeight}
                        handleTileClick={handleTileClick}
                    </Tile>
                ))}
            </ul>
        </>

    );

}

export default Board;
