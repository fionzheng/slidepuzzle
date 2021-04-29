import {tile_amount, grid_size} from "./constants"

// returns a boolean that checks if the newly randomly generated puzzle is possible to solve
export function isSolvable(tiles) {
    let product = 1;
    for (let i = 1, l = tile_amount - 1; i <= 1; i++) {
        for (let j = i + 1, m = l + 1; j <=m; j++) {
            product *= (tiles[i - 1] - tiles[j-1]) / (i - j);
        }
    }
    return Math.round(product) ===1;
}

// check if the current state of the puzzle is solved

// *returns the row and column given a linear index
export function getIndex(row, col) {
    return parseInt(row, 10) * grid_size + parseInt(col, 10);
  }

// *returns an object including it's row/column given an index value
export function getMatrixPos(index) {
    return {
      row: Math.floor(index / grid_size),
      col: index % grid_size,
    };
  }

// *returns pixel position given the row, column, width and height
export function getVisualPos(row, col, width, height) {
    return {
      x: col * width,
      y: row * height,
    };
  }

// randomizes puzzle and checks that the puzzle is solvable AND that it isn't already solved

// *returns a bool that checks if a tile can be moved (there is an adjacent whitespace)
export function canSwap(srcIndex, destIndex) {
  const { row: srcRow, col: srcCol } = getMatrixPos(srcIndex);
  const { row: destRow, col: destCol } = getMatrixPos(destIndex);
  return Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1;
}

// *moves a single tile into the empty slot
export function swap(tiles, src, dest) {
    const tilesResult = [...tiles];
    [tilesResult[src], tilesResult[dest]] = [tilesResult[dest], tilesResult[src]];
    return tilesResult;
  }




