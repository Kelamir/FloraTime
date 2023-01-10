import { describe, it, expect } from 'vitest';
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
