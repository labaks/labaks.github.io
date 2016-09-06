//document.addEventListener("DOMContentLoaded", createTable);

var REM = false;

function createTable(cells, idContainer, array) {
    var container = document.getElementById(idContainer);
    var table = document.createElement("table");
    table.id = 'table' + idContainer;
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

function clearPokemonInfo() {
    document.getElementById("name").innerHTML = document.getElementById("type").innerHTML = document.getElementById("maxCp").innerHTML = "";
    var parent1 = document.getElementById("standartAttacks");
    var parent2 = document.getElementById("ultimateAttacks");
    var child1 = document.getElementById("tablestandartAttacks");
    var child2 = document.getElementById("tableultimateAttacks");
    parent1.removeChild(child1);
    parent2.removeChild(child2);

}

function pokemonInfo() {
    if (REM) {
        clearPokemonInfo();
        REM = false;
    }
    ;
    var name = document.getElementById("input").value;
    document.getElementById("name").innerHTML = name;
    var pokemon;
    var rowsS, rowsU, cellsS, cellsU;
    rowsS = rowsU = cellsS = cellsU = 0;
    var sAttacks = [];
    var uAttacks = [];
    //Find by name;
    for (var k = 0; k < base.length; k++) {
        if (base[k].name == name || base[k].nameRus == name) {
            pokemon = base[k];
        }
    }
    //Find type;
    for (var k = 0; k < pokemon.type.length; k++) {
        for (var i = 0; i < types.length; i++) {
            if (types[i].id === pokemon.type[k]) {
                if (k > 0) {
                    document.getElementById("type").innerHTML += ", ";
                }
                document.getElementById("type").innerHTML += types[i].type;
            }
        }
    }
    //Find super effective attacks
    var superAttacks = [];
    for (var i = 0; i < pokemon.type.length; i++) {
        superAttacks.push(typeTable[pokemon.type[i] - 1]);
    }
    var superAttacksTypes = [];
    for (var i = 0; i < superAttacks.length; i++) {
        for (var j = 0; j < superAttacks[i].length; j++) {
            if (superAttacks[i][j] === 2) {
                superAttacksTypes.push(j + 1);
            }
        }
    }
    console.log(superAttacks);
    console.log(superAttacksTypes);
    document.getElementById("maxCp").innerHTML = pokemon.maxCP;
    //Find Standart Attacks;
    findAttacks(attackDexStandart, sAttacks, pokemon);
    createTable(sAttacks[0].length, "standartAttacks", sAttacks);
    //Find Ultimate Attacks;
    findAttacks(attackDexUltimate, uAttacks, pokemon);
    createTable(uAttacks[0].length, "ultimateAttacks", uAttacks);
    REM = true;
}

function findAttacks(dex, output, pokemon) {
    for (var i = 0; i < dex.length; i++) {
        for (var j = 0; j < dex[i].pokemonsHave.length; j++) {
            if (dex[i].pokemonsHave[j] === pokemon.id) {
                for (var l = 0; l < types.length; l++) {
                    if (dex[i].type === types[l].id) {
                        var attack = [dex[i].name, types[l].type, dex[i].damage];
                        output.push(attack);
                    }
                }
            }
        }
    }
}


$(function () {
    var availableTags = [];
    for (var i = 0; i < base.length; i++) {
        availableTags.push(base[i].name, base[i].nameRus);
    }
    $("#input").autocomplete({
        source: availableTags
    });
});
