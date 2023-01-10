import { describe, it, expect, test } from 'vitest';
import { shouldFinish } from "./lib/utils/countdown";
import { nextState } from "./lib/utils/countdown";
import { formatTimeRemaining } from "./lib/utils/countdown";

describe('sum test', () => {
	it('adds 1 + 2 to equal 3', () => {
		expect(1 + 2).toBe(3);
	});
});

describe('formatTimeRemaining() test', () => {
	it('returns correct time', () => {
		expect(formatTimeRemaining(1500)).toEqual(`25:00`);
	});
});

describe('formatTimeRemaining() test a high number', () => {
	it('returns correct time', () => {
		expect(formatTimeRemaining(1234567)).toEqual(`20576:07`);
	});
});


describe('shouldFinish() test', () => {
	it('should return true when the value => 0', () => {
		expect(shouldFinish(25)).toBe(false);
	});
});

describe('shouldFinish() test', () => {
	it('should return true when the value => 0', () => {
		expect(shouldFinish(-1)).toBe(true);
	});
});

