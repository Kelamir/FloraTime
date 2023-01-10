import { describe, it, expect, test } from "vitest";
import { shouldFinish } from "./lib/utils/countdown";
import { nextState } from "./lib/utils/countdown";
import { formatTimeRemaining } from "./lib/utils/countdown";

describe('sum test', () => {
	it('adds 1 + 2 to equal 3', () => {
		expect(1 + 2).toBe(3);
	});
});


test.each([
	[1500, "25:00"],
	[1234567, "20576:07"],
	[60, "1:00"],
	[3600, "60:00"],
])('add(%i) -> %i', (num, expected) => {
	expect(formatTimeRemaining(num)).toBe(expected)
})

test.each([
	[25, false],
	[-1, true],
	[0, true],
])('shouldFinish(%i) -> %i', (num, expected) => {
	expect(shouldFinish(num)).toBe(expected)
})

test.todo('test nextState')
