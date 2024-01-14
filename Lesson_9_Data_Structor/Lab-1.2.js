'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Task 1: 1. Lặp mảng game.scored array và in ra cầu thủ cùng với số bàn thắng đã ghi (Ví
// dụ: "Goal 1: Lewandowski")

for (let [goal, name] of game.scored.entries()) {
  console.log(`Goal ${goal + 1} is ${name}`);
}

//Task 2:  Sử dụng vòng lặp để tính tỉ lệ kết quả trận đấu và in ra console (Chúng ta đã
// học cách tính trung bình tổng ở phần trước, các bạn có thể xem lại nếu không
// nhớ)
const value = Object.keys(game.odds);
let sum = 0;
for (const [keys, odd] of Object.entries(game.odds)) {
  sum += odd;
}

console.log(`The everage odd is ${sum / value.length}`);

//Task 3: 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//  Tỉ lệ thắng của Bayern Munich: 1.33
//  Tỉ lệ hòa of draw: 3.25
//  Tỉ lệ thắng của Borrussia Dortmund: 6.5
// Lấy ra tên đội bóng trực tiếp từ object 'game', bạn không nên "hardcode" tỉ lệ
// thắng của mỗi đội (ngoại trừ trường hợp 2 đội hòa nhau)

for (let [keys, value] of Object.entries(game.odds)) {
  const status = keys === 'x' ? 'draw' : `victory ${game[keys]}`;
  console.log(`Odd of ${status} : ${value}`);
}

//Task4 : Tạo 1 object chứa tên các cầu thủ cũng với số bàn thắng của hoj
const scorers = {};
for (const player of game.scored) {
  console.log(player);
  scorers[player] = (scorers[player] || 0) + 1;
  //scorers.Lewandowski = (scorers.Lewandowski || 0) +1;
}
console.log(scorers);
