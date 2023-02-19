/**
 * Runtime 77 ms Beats 82.35%
 * Memory 46.3 MB Beats 52.94%
 */

function getHint(secret: string, guess: string): string {
  const secretHash = secret
    .split('')
    .reduce<Record<string, number>>((acc, cur) => {
      acc[cur] = (acc[cur] ?? 0) + 1;
      return acc;
    }, {});

  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    }

    if (guess[i] in secretHash) {
      cows++;
      secretHash[guess[i]] -= 1;

      if (secretHash[guess[i]] === 0) {
        delete secretHash[guess[i]];
      }
    }
  }

  return `${bulls}A${cows - bulls}B`;
}

console.log(getHint('1123', '0111')); // "1A1B"
