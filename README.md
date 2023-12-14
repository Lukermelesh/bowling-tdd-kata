<h1 align="center">
    Bowling Tdd Kata
<br><br>
  <img width="241" src ="bowling-logo.png" />
  </h1>

## Installations
  ```bash
git clone git@github.com:Lukermelesh/bowling-tdd-kata.git
cd bowling-tdd-kata
yarn
```

## General instructions

- TDD

The main purpose of this Kata is practicing TDD. Do not skip that part!

Follow the [three rules of TDD](http://butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd):

> *RED* - write a red test
>
> *GREEN* - write the **minimum** set of code to pass this test
>
> *REFACTOR* - refactor your code

Refactoring your code (right after it gets green) is the most important part!!! Do not skip it

- Work in pairs/alone

- Complete each task/step before moving to next one!

## Game Task

Bowling is game where players roll a heavy ball to knock down pins arranged in a triangle.

Write code to keep track of the score of a game of bowling. It should support two operations:

`roll(pins : int)` is called each time the player rolls a ball. The argument is the number of pins knocked down.

`score() : int` is called only at the very end of the game. It returns the total score for that game.

### Scoring Bowling

The game consists of 10 frames. A frame is composed of one or two ball throws with 10 pins standing at frame initialization. There are three cases for the tabulation of a frame.

1. **Open frame** is where a score of less than 10 is recorded for the frame. In this case the score for the frame is the number of pins knocked down.

2. **Spare** is where all ten pins are knocked down after the second throw. The total value of a spare is 10 plus the number of pins knocked down in their next throw.

3. **Strike** is where all ten pins are knocked down after the first throw.
   The total value of a strike is 10 plus the number of pins knocked down in their next two throws.
   If a strike is immediately followed by a second strike, then we can not total the value of first strike until they throw the ball one more time.

### Example
Here is a three frame example:
("X" = Strike, "/" = Spare)

| Frame 1 | Frame 2 | Frame 3 |
|--------|----------|---------|
| X	|  5 / | 9 0 |

**Frame 1**: (10 + 5 + 5) = 20

**Frame 2**: (5 + 5 + 9) = 19

**Frame 3**: (9 + 0) = 9

This means the current running total is 48.

The tenth frame in the game is a special case.
If someone throws a strike or a spare then they get a fill ball.
Fill balls exist to calculate the total of the 10th frame.
Scoring a strike or spare on the fill ball does not give the player more fill balls.
The total value of the 10th frame is the total number of pins knocked down.

For a tenth frame of X1/ (strike and a spare), the total value is 20.

For a tenth frame of XXX (three strikes), the total value is 30.