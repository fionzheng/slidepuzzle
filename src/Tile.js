import React from "react";
import {getMatrixPos, getVisualPos} from "./helpers";
import {tile_amount, grid_size} from "./constants"

function Tile(props) {
    const {tile, index, width, height, handleTileClick} = props;
    const { row, col } = getMatrixPos(index);
    const visualPos = getVisualPos(row, col, width, height);
    const tileStyle = {
        width: `calc(100% / ${grid_size})`,
        height: `calc(100% / ${grid_size})`,
        translateX: visualPos.x,
        translateY: visualPos.y,
    };

    return (
        <li
          style={{
            ...tileStyle,
            transform: `translate3d(${tileStyle.translateX}px, ${tileStyle.translateY}px, 0)`,
            // Is last tile?
            opacity: tile === tile_amount - 1 ? 0 : 1,
          }}
          className="tile"
          onClick={() => handleTileClick(index)}
        >
          {tile + 1}
        </li>
    )
}

export default Tile;