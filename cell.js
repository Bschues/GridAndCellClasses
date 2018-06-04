function Cell(rowIndex, colIndex, parentElement, Grid) {
    this.rowIndex = rowIndex
    this.colIndex = colIndex
    this.parentElement = parentElement
    this.add_element()
}

Cell.prototype = {
    add_element: function () {
        this.element = document.createElement("div")
        this.element.classList.add("cell")
        this.element.dataset.rowIndex = this.rowIndex
        this.element.dataset.colIndex = this.colIndex
        this.parentElement.appendChild(this.element)
        this.element.addEventListener("click", this.handle_click)
       
    },
    
    check_neighbor_cells: function() {
        console.log(cellclicked)
    },

    handle_click: function (event) {
        let cellclicked = event.target;
        let clickedRow = cellclicked.dataset.rowIndex
        let clickedCol = cellclicked.dataset.colIndex
        console.log(clickedRow,clickedCol);
        this.checkneighbor_cells();
    },
}