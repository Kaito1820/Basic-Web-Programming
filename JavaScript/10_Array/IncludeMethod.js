// Include method là phương thức tồn tại sẵn trong prototype của string và array

let games = [
    'LOL',
    'Cytus',
    'Valorant',
    'RIME'
]

console.log(games.include('LOL')) // true
console.log(games.include('LOL', 2)) // tim tu index 2 -> false