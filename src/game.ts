const isStrike = (first: number) => first === 10;

const isSpare = (first: number, second: number) => first + second === 10 && !isStrike(first);

export function score(rolls: number[]) {
  let result = 0, currentIndex = 0;

  for (let frame = 0; frame < 10; frame++) {
    const first = rolls[currentIndex++];
    const second = !isStrike(first) ? rolls[currentIndex++] : 0;
    const spare = isSpare(first, second) ? rolls[currentIndex] : 0;
    const strike = isStrike(first) ? rolls[currentIndex] + rolls[currentIndex + 1] : 0;
    result += first + second + spare + strike;
  }
  return result;
}