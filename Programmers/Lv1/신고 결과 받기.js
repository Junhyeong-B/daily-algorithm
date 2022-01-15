function solution(id_list, report, k) {
  const rep = new Set(report);
  const reportRecord = new Map();
  const count = new Map();

  for (const record of rep) {
    const [from, to] = record.split(" ");
    reportRecord.set(
      to,
      reportRecord.has(to) ? [...reportRecord.get(to), from] : [from]
    );
  }

  for (const [, value] of reportRecord) {
    if (value.length >= k) {
      for (const reporter of value) {
        count.set(reporter, count.has(reporter) ? count.get(reporter) + 1 : 1);
      }
    }
  }

  const answer = [...id_list].map((id) => {
    if (count.has(id)) {
      return count.get(id);
    } else {
      return 0;
    }
  });
  return answer;
}
