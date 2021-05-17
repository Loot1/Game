let map = [
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 3.1, 3.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 3.3, 3.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 4, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

function parseMap() {
    let pathTiles = 0
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (j == 0) {
                $('#map').append('<div class="row' + i + '" id="row">')
            }
            if (map[i][j] == 0) {
                $('.row' + i + '').append('<div class="red"> </div>')
            } else if (map[i][j] == 1 && pathTiles == 0) {
                $('.row' + i + '').append('<div class="green start"> </p>')
                pathTiles++;
            } else if (map[i][j] == 1 && pathTiles > 0) {
                $('.row' + i + '').append('<div class="green"> </p>')
            } else if (map[i][j] == 2.1) {
                $('.row' + i + '').append('<div class="topLeftTree"></p>')
            } else if (map[i][j] == 2.2) {
                $('.row' + i + '').append('<div class="topRightTree"></p>')
            } else if (map[i][j] == 2.3) {
                $('.row' + i + '').append('<div class="bottomRightTree"></p>')
            } else if (map[i][j] == 2.4) {
                $('.row' + i + '').append('<div class="bottomLeftTree"></p>')
            } else if (map[i][j] == 3.1) {
                $('.row' + i + '').append('<div class="topLeftTurret"></p>')
            } else if (map[i][j] == 3.2) {
                $('.row' + i + '').append('<div class="topRightTurret"></p>')
            } else if (map[i][j] == 3.3) {
                $('.row' + i + '').append('<div class="bottomRightTurret"></p>')
            } else if (map[i][j] == 3.4) {
                $('.row' + i + '').append('<div class="bottomLeftTurret"></p>')
            } else if (map[i][j] == 4) {
                $('.row' + i + '').append('<div class="flowers"></p>')
            }
            if (j == map.length) {
                $('#map').append('</div>')
            }
        }
    }
        $('.start').append('<div class="monster" id="monster"></div>')
}


function findNextSiblings() {
    let monster = $('#monster')
    if (monster.next('.green')) {
        return true;
    }
    return false
}

function findPreviousSiblings() {
    let monster = $('#monster')
    if (monster.prev('.red')) {
        return false;
    }
    return true
}

function findNextParent() {
    let monster = $('#monster')
    if (monster.parent().parent().children('.green')) {
        return true
    }
    return false
}

function findPreviousParent() {
    let monster = $('#monster')
    if (monster.parent().parent().children('.red')) {
        return false
    }
    return true
}

if ($(document).keydown(function (e) {
        let monster = $('#monster').parent()
        if (e.keyCode === 37 && findPreviousSiblings() === false) {
            $('.monster').remove()
            monster.prev().append('<div class="monster" id="monster"></div>')
        } else if (e.keyCode === 39 && findNextSiblings() === true) {
            $('.monster').remove()
            monster.next().append('<div class="monster" id="monster"></div>')
        } else if (e.keyCode === 40 && findNextParent() === true) {
            $('.monster').remove()
            monster.parent().next().children('.green').append('<div class="monster" id="monster"></div>')
            console.log(monster.parent().next().children())
        } else if (e.keyCode === 38 && findPreviousParent() === false) {
            $('.monster').remove()
            monster.parent().prev().children('.green').append('<div class="monster" id="monster"></div>')
            console.log(monster.parent().next().children())
        }
    }))

parseMap()
