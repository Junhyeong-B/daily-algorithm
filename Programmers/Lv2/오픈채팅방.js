function solution(record) {
  const answer = [];
  const inOutLog = [];
  const userList = {};

  record.forEach((user) => {
    const [action, id, name] = user.split(" ");
    switch (action) {
      case "Enter":
        inOutLog.push([`${id}`, "님이 들어왔습니다."]);
        userList[`${id}`] = name;
        break;
      case "Leave":
        inOutLog.push([`${id}`, "님이 나갔습니다."]);
        break;
      case "Change":
        userList[`${id}`] = name;
        break;
      default:
    }
  });

  inOutLog.forEach((rec) => {
    rec[0] = userList[rec[0]];
    answer.push(rec.join(""));
  });

  return answer;
}
