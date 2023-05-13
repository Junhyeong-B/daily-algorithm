/**
 * Runtime 64 ms Beats 42.86%
 * Memory 42.8 MB Beats 55.10%
 */
function compareVersion(version1: string, version2: string): number {
  const ver1 = version1.split('.').map((n) => +n);
  const ver2 = version2.split('.').map((n) => +n);

  for (let i = 0; i < Math.max(ver1.length, ver2.length); i++) {
    if (ver1[i] === ver2[i]) {
      continue;
    }

    if (ver1[i] == undefined) {
      if (ver2[i] === 0) {
        continue;
      } else {
        return -1;
      }
    }

    if (ver2[i] == undefined) {
      if (ver1[i] === 0) {
        continue;
      } else {
        return 1;
      }
    }

    return ver1[i] < ver2[i] ? -1 : 1;
  }

  return 0;
}

console.log(compareVersion('1.0.1', '1')); // 1
