const rows = 3;
const columns = 3;

const $ = (id) => document.getElementById(id);

const createCells = () => {
  const playGround = $("playGround");
  for (var i = 0; i < rows; i++)
    for (var j = 0; j < columns; j++) {
      const cell = document.createElement("div");
      cell.setAttribute("class", "cell");

      cell.setAttribute("id", `${i}-${j}`);
      cell.setAttribute("data-row", i);
      cell.setAttribute("data-column", j);
      cell.setAttribute("onclick", `changePlayer(${e})`);
      console.log("🚀 ~ file: source.js ~ line 12 ~ createCells ~ cell", cell);
      playGround.append(cell);
    }
};
// const splitPart = $("cell").split("-");
// console.log(
//   "🚀 ~ file: source.js ~ line 19 ~ createCells ~ splitPart",
//   splitPart
// );
let flag = true;
// let checkRow = element.getAttribute("data-row");
// let checkColumn = element.getAttribute("data-column");
// const checkCell = document.getElementsByClassName("cell");
const changePlayer = (e) => {
  if (flag) {
    e.innerHTML = "X";
    console.log("🚀 ~ file: source.js ~ line 34 ~ changePlayer ~ e", e);
    e.value = "X";
    e.disabled = true;
    // checkCell.value = "X";
    // checkCell.innerHTML = `<input type="text" value="X" style="color: black;">`;
    // checkCell.disabled = true;
    flag = false;
  } else {
    e.innerHTML = "X";
    e.value = "X";
    e.disabled = true;
    // checkCell.value = "O";
    // checkCell.innerHTML = `<input type="text" value="O">`;
    // checkCell.disabled = true;
    // flag = true;
  }
  return flag;
};

alert("Start Game");
createCells();
