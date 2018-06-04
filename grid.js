
function Grid(numberOfRows, numberOfCols, parentElement) {
    this.numberOfRows = numberOfRows
    this.numberOfCols = numberOfCols
    this.parentElement = parentElement
    this.board_create()
}

Grid.prototype = {
    board_create: function () {
        this.board = new Array(this.numberOfRows).fill().map(() => new Array(this.numberOfCols).fill());
        this.board.forEach((row, rowIndex) => {
            this.board[rowIndex] = []
            const rowElement = this.create_row()
            row.forEach((_, colIndex) => {
                this.board[rowIndex][colIndex] = new Cell(rowIndex, colIndex, rowElement, this);
                // this.board[rowIndex][colIndex].addEventListener("click",this.handleClick)
            });
        });
    },


    create_row: function () {
        const rowElement = document.createElement("div")
        rowElement.classList.add("row")
        this.parentElement.appendChild(rowElement)
        return rowElement
    },
};