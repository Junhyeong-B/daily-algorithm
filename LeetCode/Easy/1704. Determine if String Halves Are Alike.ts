/**
 * Runtime 82 ms Beats 89.47%
 * Memory 44.9 MB Beats 68.42%
 */

function halvesAreAlike(s: string): boolean {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    A: true,
    E: true,
    I: true,
    O: true,
    U: true,
  };
  const half = s.length / 2;
  const a = s
    .slice(0, half)
    .split('')
    .filter((alpha) => vowels[alpha]).length;
  const b = s
    .slice(half)
    .split('')
    .filter((alpha) => vowels[alpha]).length;

  return a === b;
}

console.log(halvesAreAlike('textbook'));
