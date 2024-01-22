'use strict';
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

//Task 1: 1. Create an array 'events' of the different game events that happened (no duplicatites

const events = new Set([...gameEvents.values()]);
console.log(events);

//Task 2:  After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.

gameEvents.delete(64);

//Task 3 : Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
const quantityEvents = [...gameEvents.keys()].length;

console.log(
  `An event happened, on average, every ${
    [...gameEvents.keys()].slice(-1) / quantityEvents
  } minutes`
);

for (const [keys, value] of gameEvents.entries()) {
  let game = keys <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${game} HALF] ${keys} : ${value} `);
}
