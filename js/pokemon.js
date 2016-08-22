//document.addEventListener("DOMContentLoaded", createTable);

function createTable(cells, idContainer, array) {
    var container = document.getElementById(idContainer);
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");
    for (var j = 0; j < array.length; j++) {
        var row = document.createElement("tr");
        for (var i = 0; i < cells; i++) {
            var cell = document.createElement("td");
            var cellText;
            cellText = document.createTextNode(array[j][i]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
    container.appendChild(table);
}

function one() {
    for (i = 0; i < attackDexStandart[0].pokemonsHave.length; i++) {
        for (j = 0; j < base.length; j++) {
            if (attackDexStandart[0].pokemonsHave[i] === base[j].id) {
                console.log(base[j].name);
            }
        }
    }
}

function pokemonInfo() {
    var name = document.getElementById("input").value;
    document.getElementById("name").innerHTML = name;
    var pokemon;
    var rowsS, rowsU, cellsS, cellsU;
    rowsS = rowsU = cellsS = cellsU = 0;
    var sAttacks = [];
    var uAttacks = [];
    //Find by name;
    for (var k = 0; k < base.length; k++) {
        if (base[k].name == name) {
            pokemon = base[k];
        }
    }
//Find type;
//    for (var k = 0; k < types.length; k++) {
//        if(types[k].id === pokemon.type) {
//            document.getElementById("type").innerHTML = types[k].type;
//        }
//    }
    document.getElementById("maxCp").innerHTML = pokemon.maxCp;
    //Find Standart Attacks;
    for (var i = 0; i < attackDexStandart.length; i++) {
        for (var j = 0; j < attackDexStandart[i].pokemonsHave.length; j++) {
            if (attackDexStandart[i].pokemonsHave[j] === pokemon.id) {
                for (var l = 0; l < types.length; l++) {
                    if (attackDexStandart[i].type === types[l].id) {
                        var sAttack = [attackDexStandart[i].name, types[l].type, attackDexStandart[i].damage];
                        sAttacks.push(sAttack);
                    }
                }
            }
        }
    }
    createTable(sAttacks[0].length, "standartAttacks", sAttacks);
//Find Ultimate Attacks;
    for (var i = 0; i < attackDexUltimate.length; i++) {
        for (var j = 0; j < attackDexUltimate[i].pokemonsHave.length; j++) {
            if (attackDexUltimate[i].pokemonsHave[j] === pokemon.id) {
                for (var l = 0; l < types.length; l++) {
                    if (attackDexUltimate[i].type === types[l].id) {
                        var uAttack = [attackDexUltimate[i].name, types[l].type, attackDexUltimate[i].damage];
                        uAttacks.push(uAttack);
                    }
                }
            }
        }
    }
    createTable(uAttacks[0].length, "ultimateAttacks", uAttacks);
}
