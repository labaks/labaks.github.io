document.addEventListener("DOMContentLoaded", createTable);

function createTable() {
// Это количество строк
    var rows = 151;
// Это количество ячеек в строке (количество столбцов)
    var cells = 2;

// Получить ссылку на body
    var body = document.body;

// Создать элемент <table> и элемент <tbody>
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");

// Создать все ячейки
    for (var j = 0; j < rows; j++) {
        // Создать строку
        var row = document.createElement("tr");

        for (var i = 0; i < cells; i++) {
            // Создать и заполнить элемент <td>
            var cell = document.createElement("td");
            if (i === 0) {
                // Здесь нужно будет заполнить своими данными ячейку
                var cellText = document.createTextNode(base[j].id);
            } else var cellText = document.createTextNode(base[j].name);

            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // Добавить строку в конец элемента tbody
        tableBody.appendChild(row);
    }

// Поместить <tbody> внуть <table>
    table.appendChild(tableBody);
// // Добавить <table> внутрь <body>
    body.appendChild(table);
}