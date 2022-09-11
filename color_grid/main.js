
let currentColor = '';
let dragStarted = false;
let colorArray = [
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
];
document.addEventListener("DOMContentLoaded", function (arguments) {
  let mainContainer = document.querySelector(".container");
  let blockContainer = document.querySelector(".single-grid-row");
  let colorPaletteRow = document.querySelector(".color-pallete-row");
  for (let i = 0; i < 4; i++) {
    let clonedNode = blockContainer.cloneNode(true);
    mainContainer.insertBefore(clonedNode, colorPaletteRow);
  }

  Array.from(colorPaletteRow.children).forEach((ele, index) => {
    ele.style.backgroundColor = colorArray[index];
    let currentIndex = index;
    ele.onclick = () => {
        console.log(currentIndex);
        currentColor = colorArray[currentIndex];
    }
  });
});

function gridBlockClicked (ele) {
    ele.style.backgroundColor = currentColor;
  }

function blockDragStarted (element) {
    console.log(element);
    dragStarted = true;
}

function mouseMoved (element) {
    console.log(element);
    if(dragStarted){
        element.style.backgroundColor = currentColor;
    }
}

function mouseUpEvent (element) {
    dragStarted = false;
}