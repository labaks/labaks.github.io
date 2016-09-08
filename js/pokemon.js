/* global attackDexUltimate, attackDexStandart, base, conflictTypeTable, types */

//document.addEventListener("DOMContentLoaded", createTable);

var REM = false;

function createTable(cells, idContainer, array) {
    // cells - количество ячеек таблицы,
    // idContainer - контейнер в котором должна лежать таблица,
    // array - массив, который выводится в таблицу
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
    document.getElementById("inputPokemonName").innerHTML = document.getElementById("type").innerHTML = document.getElementById("maxCp").innerHTML = "";
    var parentSA = document.getElementById("standartAttacks");
    var childSA = document.getElementById("tablestandartAttacks");
    parentSA.removeChild(childSA);
    var parentUA = document.getElementById("ultimateAttacks");
    var childUA = document.getElementById("tableultimateAttacks");
    parentUA.removeChild(childUA);
    if ($("#tablex0AttacksS").length > 0) {
        var parentX0S = document.getElementById("x0AttacksS");
        var childX0S = document.getElementById("tablex0AttacksS");
        parentX0S.removeChild(childX0S);
    }
    if ($("#tablex025AttacksS").length > 0) {
        var parentX025S = document.getElementById("x025AttacksS");
        var childX025S = document.getElementById("tablex025AttacksS");
        parentX025S.removeChild(childX025S);
    }
    if ($("#tablex05AttacksS").length > 0) {
        var parentX05S = document.getElementById("x05AttacksS");
        var childX05S = document.getElementById("tablex05AttacksS");
        parentX05S.removeChild(childX05S);
    }
    if ($("#tablex1AttacksS").length > 0) {
        var parentX1S = document.getElementById("x1AttacksS");
        var childX1S = document.getElementById("tablex1AttacksS");
        parentX1S.removeChild(childX1S);
    }
    if ($("#tablex2AttacksS").length > 0) {
        var parentX2S = document.getElementById("x2AttacksS");
        var childX2S = document.getElementById("tablex2AttacksS");
        parentX2S.removeChild(childX2S);
    }
    if ($("#tablex4AttacksS").length > 0) {
        var parentX4S = document.getElementById("x4AttacksS");
        var childX4S = document.getElementById("tablex4AttacksS");
        parentX4S.removeChild(childX4S);
    }
    if ($("#tablex0Attacks").length > 0) {
        var parentX0 = document.getElementById("x0Attacks");
        var childX0 = document.getElementById("tablex0Attacks");
        parentX0.removeChild(childX0);
    }
    if ($("#tablex025Attacks").length > 0) {
        var parentX025 = document.getElementById("x025Attacks");
        var childX025 = document.getElementById("tablex025Attacks");
        parentX025.removeChild(childX025);
    }
    if ($("#tablex05Attacks").length > 0) {
        var parentX05 = document.getElementById("x05Attacks");
        var childX05 = document.getElementById("tablex05Attacks");
        parentX05.removeChild(childX05);
    }
    if ($("#tablex1Attacks").length > 0) {
        var parentX1 = document.getElementById("x1Attacks");
        var childX1 = document.getElementById("tablex1Attacks");
        parentX1.removeChild(childX1);
    }
    if ($("#tablex2Attacks").length > 0) {
        var parentX2 = document.getElementById("x2Attacks");
        var childX2 = document.getElementById("tablex2Attacks");
        parentX2.removeChild(childX2);
    }
    if ($("#tablex4Attacks").length > 0) {
        var parentX4 = document.getElementById("x4Attacks");
        var childX4 = document.getElementById("tablex4Attacks");
        parentX4.removeChild(childX4);
    }
}

function pokemonInfo() {
    if (REM) {
        clearPokemonInfo();
    }
    var name = document.getElementById("inputPokemonName").value;
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
    var multiplierAttacks = [];
    for (var i = 0; i < pokemon.type.length; i++) {
        multiplierAttacks.push(conflictTypeTable[pokemon.type[i] - 1]);
    }
    if (multiplierAttacks.length > 1) {
        var factor = [];
        for (var i = 0; i < multiplierAttacks[0].length; i++) {
            factor.push(multiplierAttacks[0][i] * multiplierAttacks[1][i]);
        }
        multiplierAttacks = factor;
    } else {
        multiplierAttacks = multiplierAttacks[0];
    }
    //Find x0 Standart Attacks
    if ($("#x0CheckS").prop('checked')) {
        var enable = false;
        $("#x0AttacksS").show();
        for (var i = 0; i < multiplierAttacks.length; i++) {
            if (multiplierAttacks[i] === 0)
                enable = true;
        }
        if (enable === true) {
            $("#noX0S").hide();
            createAttacksTable(0, multiplierAttacks, attackDexStandart, "x0AttacksS");
        } else {
            $("#noX0S").show();
        }
    } else {
        $("#x0AttacksS").hide();
    }
    //Find x0.25 Standart Attacks
    if ($("#x025CheckS").prop('checked')) {
        var enable = false;
        $("#x025AttacksS").show();
        for (var i = 0; i < multiplierAttacks.length; i++) {
            if (multiplierAttacks[i] === 0.25)
                enable = true;
        }
        if (enable === true) {
            $("#noX025S").hide();
            createAttacksTable(0.25, multiplierAttacks, attackDexStandart, "x025AttacksS");
        } else {
            $("#noX025S").show();
        }
    } else {
        $("#x025AttacksS").hide();
    }
    //Find x0.5 Standart Attacks
    if ($("#x05CheckS").prop('checked')) {
        var enable = false;
        $("#x05AttacksS").show();
        for (var i = 0; i < multiplierAttacks.length; i++) {
            if (multiplierAttacks[i] === 0.5)
                enable = true;
        }
        if (enable === true) {
            $("#noX05S").hide();
            createAttacksTable(0.5, multiplierAttacks, attackDexStandart, "x05AttacksS");
        } else {
            $("#noX05S").show();
        }
    } else {
        $("#x05AttacksS").hide();
    }
    //Find x1 Standart Attacks
    if ($("#x1CheckS").prop('checked')) {
        var enable = false;
        $("#x1AttacksS").show();
        for (var i = 0; i < multiplierAttacks.length; i++) {
            if (multiplierAttacks[i] === 1)
                enable = true;
        }
        if (enable === true) {
            $("#noX1S").hide();
            createAttacksTable(1, multiplierAttacks, attackDexStandart, "x1AttacksS");
        } else {
            $("#noX1S").show();
        }
    } else {
        $("#x1AttacksS").hide();
    }
    //Find x2 Standart Attacks
    if ($("#x2CheckS").prop('checked')) {
        var enable = false;
        $("#x2AttacksS").show();
        for (var i = 0; i < multiplierAttacks.length; i++) {
            if (multiplierAttacks[i] === 2)
                enable = true;
        }
        if (enable === true) {
            $("#noX2S").hide();
            createAttacksTable(2, multiplierAttacks, attackDexStandart, "x2AttacksS");
        } else {
            $("#noX2S").show();
        }
    } else {
        $("#x2AttacksS").hide();
    }
    //Find x4 Standart Attacks
    if ($("#x4CheckS").prop('checked')) {
        var enable = false;
        $("#x4AttacksS").show();
        for (var i = 0; i < multiplierAttacks.length; i++) {
            if (multiplierAttacks[i] === 4)
                enable = true;
        }
        if (enable === true) {
            $("#noX4S").hide();
            createAttacksTable(4, multiplierAttacks, attackDexStandart, "x4AttacksS");
        } else {
            $("#noX4S").show();
        }
    } else {
        $("#x4AttacksS").hide();
    }
    //Find x0 Ultimate Attacks
    if ($("#x0Check").prop('checked')) {
        var enable = false;
        $("#x0Attacks").show();
        for (var i = 0; i < multiplierAttacks.length; i++) {
            if (multiplierAttacks[i] === 0)
                enable = true;
        }
        if (enable === true) {
            $("#noX0").hide();
            createAttacksTable(0, multiplierAttacks, attackDexUltimate, "x0Attacks");
        } else {
            $("#noX0").show();
        }
    } else {
        $("#x0Attacks").hide();
    }
    //Find x0.25 Ultimate Attacks
    if ($("#x025Check").prop('checked')) {
        var enable = false;
        $("#x025Attacks").show();
        for (var i = 0; i < multiplierAttacks.length; i++) {
            if (multiplierAttacks[i] === 0.25)
                enable = true;
        }
        if (enable === true) {
            $("#noX025").hide();
            createAttacksTable(0.25, multiplierAttacks, attackDexUltimate, "x025Attacks");
        } else {
            $("#noX025").show();
        }
    } else {
        $("#x025Attacks").hide();
    }
    //Find x0.5 Ultimate Attacks
    if ($("#x05Check").prop('checked')) {
        var enable = false;
        $("#x05Attacks").show();
        for (var i = 0; i < multiplierAttacks.length; i++) {
            if (multiplierAttacks[i] === 0.5)
                enable = true;
        }
        if (enable === true) {
            $("#noX05").hide();
            createAttacksTable(0.5, multiplierAttacks, attackDexUltimate, "x05Attacks");
        } else {
            $("#noX05").show();
        }
    } else {
        $("#x05Attacks").hide();
    }
    //Find x1 Ultimate Attacks
    if ($("#x1Check").prop('checked')) {
        var enable = false;
        $("#x1Attacks").show();
        for (var i = 0; i < multiplierAttacks.length; i++) {
            if (multiplierAttacks[i] === 1)
                enable = true;
        }
        if (enable === true) {
            $("#noX1").hide();
            createAttacksTable(1, multiplierAttacks, attackDexUltimate, "x1Attacks");
        } else {
            $("#noX1").show();
        }
    } else {
        $("#x1Attacks").hide();
    }
    //Find x2 Ultimate Attacks
    if ($("#x2Check").prop('checked')) {
        var enable = false;
        $("#x2Attacks").show();
        for (var i = 0; i < multiplierAttacks.length; i++) {
            if (multiplierAttacks[i] === 2)
                enable = true;
        }
        if (enable === true) {
            $("#noX2").hide();
            createAttacksTable(2, multiplierAttacks, attackDexUltimate, "x2Attacks");
        } else {
            $("#noX2").show();
        }
    } else {
        $("#x2Attacks").hide();
    }
    //Find x4 Ultimate Attacks
    if ($("#x4Check").prop('checked')) {
        var enable = false;
        $("#x4Attacks").show();
        for (var i = 0; i < multiplierAttacks.length; i++) {
            if (multiplierAttacks[i] === 4)
                enable = true;
        }
        if (enable === true) {
            $("#noX4").hide();
            createAttacksTable(4, multiplierAttacks, attackDexUltimate, "x4Attacks");
        } else {
            $("#noX4").show();
        }
    } else {
        $("#x4Attacks").hide();
    }
    //Find maxCP
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

function findRepetition(array) {
    var numbersCount = {}, moreThanOne = {};
    array.forEach(function (value) {
        if (numbersCount[value]) {
            numbersCount[value]++;
            moreThanOne[value] = 1;
        } else
            numbersCount[value] = 1;
    });
    return Object.keys(moreThanOne);
}

function findUnique(array) {
    var obj = {};
    for (var i = 0; i < array.length; i++) {
        var str = array[i];
        obj[str] = true;
    }
    return Object.keys(obj);
}

function findPokemonById(id) {
    for (var i = 0; i < base.length; i++) {
        if (base[i].id === id) {
            return base[i].name;
        }
    }
}

function findPokemonsByNameWithAttack(attackId, dex) {
    var pokemons = [];
    for (var k = 0; k < dex[attackId].pokemonsHave.length; k++) {
        pokemons.push(findPokemonById(dex[attackId].pokemonsHave[k]));
    }
    return pokemons;
}

function createAttacksTable(multiplier, multiplierArray, dex, containerId) {
    // multiplier - множитель урона, int
    // multiplierArray - массив множителей, int array
    // dex - нужный декс, array
    // containerId - id контейнера, в который рисуется таблица, string
    var xTypes = [];
    for (var i = 0; i < multiplierArray.length; i++) {
        if (multiplierArray[i] === multiplier) {
            xTypes.push(i + 1);
        }
    }
    var xAttacks = [];
    var pokemons = [];
    for (var i = 0; i < xTypes.length; i++) {
        for (var j = 0; j < dex.length; j++) {
            if (xTypes[i] === dex[j].type) {
                var attack = [dex[j].name, dex[j].damage, findPokemonsByNameWithAttack(j, dex)];
                pokemons = pokemons.concat(findPokemonsByNameWithAttack(j, dex));
                xAttacks.push(attack);
            }
        }
    }
    pokemons = findUnique(pokemons);
    for (var i = 0; i < xAttacks.length; i++) {
        for (var j = 0; j < pokemons.length; j++) {
            if()
        }
    }
    console.log(pokemons);
    console.log(xAttacks);
    createTable(xAttacks[0].length, containerId, xAttacks);
}

$(function () {
    var availableTags = [];
    for (var i = 0; i < base.length; i++) {
        availableTags.push(base[i].name, base[i].nameRus);
    }
    $("#inputPokemonName").autocomplete({
        source: availableTags
    });
});
