// Fisher-Yates Shuffle 알고리즘: 배열 무작위 섞기
const shuffle = <T>(array: T[]) => {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
  }

  return [...newArray];
};
