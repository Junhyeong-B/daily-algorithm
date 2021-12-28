function solution(participant, completion) {
  const checkParticipant = new Map();

  participant.forEach((p) => {
    if (checkParticipant.has(p)) {
      checkParticipant.set(p, checkParticipant.get(p) + 1);
    } else {
      checkParticipant.set(p, 1);
    }
  });

  completion.forEach((c) => {
    checkParticipant.set(c, checkParticipant.get(c) - 1);
  });

  for (const [name, count] of checkParticipant) {
    if (count === 1) {
      return name;
    }
  }
}
