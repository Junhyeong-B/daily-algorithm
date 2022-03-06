function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const preLists: number[][] = Array.from({ length: numCourses }, () => []);

  for (const [a, b] of prerequisites) {
    preLists[a].push(b);
  }

  const visitSet = new Set<number>(); // 들어야 할 course가 겹치면 무한 Loop이니 확인하기 위해 Set 사용
  const dfs = (crs: number) => {
    if (visitSet.has(crs)) {
      return false;
    }
    if (preLists[crs].length === 0) {
      return true;
    }

    visitSet.add(crs);
    for (const preCrs of preLists[crs]) {
      if (!dfs(preCrs)) {
        return false;
      }
    }
    visitSet.delete(crs);
    preLists[crs] = []; // crs가 들을 수 있는 course라면 두 번 확인할 필요 없게 빈 배열로 할당

    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false;
    }
  }

  return true;
};