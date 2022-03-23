function isAnagram(s: string, t: string): boolean {
  const sMap = new Map<string, number>();
  const tMap = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const sAlphaCount = sMap.get(s[i]) || 0;

    sMap.set(s[i], sAlphaCount + 1);
  }

  for (let i = 0; i < t.length; i++) {
    const tAlphaCount = tMap.get(t[i]) || 0;

    tMap.set(t[i], tAlphaCount + 1);
  }

  for (const [sAlpha, count] of Array.from(sMap)) {
    if (tMap.size !== sMap.size || !tMap.has(sAlpha) || tMap.get(sAlpha) !== count) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("a", "ab"))