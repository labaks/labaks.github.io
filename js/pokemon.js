document.addEventListener("DOMContentLoaded", createTable);

function createTable() {
    var rows = 151;
    var cells = 4;

    var body = document.body;

    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");

    for (var j = 0; j < rows; j++) {
        var row = document.createElement("tr");

        for (var i = 2; i < cells; i++) {
            var cell = document.createElement("td");
            var cellText;
            // 0 == id, 1 == name, 2 == nameRus, 3 == maxCp
            switch (i) {
                case 0:
                    cellText = document.createTextNode(base[j].id);
                    break;
                case 1:
                    cellText = document.createTextNode(base[j].name);
                    break;
                case 2:
                    cellText = document.createTextNode(base[j].nameRus);
                    break;
                case 3:
                    cellText = document.createTextNode(base[j].maxCp);
                    break;
            }
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
    body.appendChild(table);
}
