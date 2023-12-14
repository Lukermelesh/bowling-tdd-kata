import { describe, it, expect } from 'vitest';
import { score } from './game.ts';

describe('Bowling', () => {
  it('should score a game with all gutterballs', () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(score(rolls)).toBe(0);
  });

  it('should score a game with all open frames', () => {
    const rolls = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    expect(score(rolls)).toBe(20);
  });

  it('should score a game with one spare', () => {
    const rolls = [1, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(score(rolls)).toBe(12);
  });

  it('should score a game with one spare in the last frame', () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 9, 1];
    expect(score(rolls)).toBe(11);
  });

  it('should score a game with 2 consecutive spares', () => {
    const rolls = [1, 9, 1, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(score(rolls)).toBe(23);
  });

  it('should score a game with one strike', () => {
    const rolls = [10, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(score(rolls)).toBe(14);
  });

  it('should score a game with 2 consecutive strikes', () => {
    const rolls = [10, 10, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(score(rolls)).toBe(35);
  });

  it('should score a game with one strike in the last frame', () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 1, 1];
    expect(score(rolls)).toBe(12);
  });

  it('should score a game with 2 strikes in the last frame', () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 1];
    expect(score(rolls)).toBe(21);
  });

  it('should score a game with 3 strikes in the last frame', () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
    expect(score(rolls)).toBe(30);
  });
});