function solution(survey, choices) {
  const personalityTypes = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < choices.length; i++) {
    const [disAgreeType, agreeType] = survey[i].split("");
    switch (choices[i]) {
      case 1:
      case 2:
      case 3:
        personalityTypes[disAgreeType] += 4 - choices[i];
        break;
      case 5:
      case 6:
      case 7:
        personalityTypes[agreeType] += choices[i] - 4;
        break;
      default:
    }
  }

  const first = personalityTypes.R >= personalityTypes.T ? "R" : "T";
  const second = personalityTypes.C >= personalityTypes.F ? "C" : "F";
  const third = personalityTypes.J >= personalityTypes.M ? "J" : "M";
  const forth = personalityTypes.A >= personalityTypes.N ? "A" : "N";

  const answer = first + second + third + forth;
  return answer;
}

/**
 * 정확성  테스트
 *  테스트 1 〉	  통과 (0.11ms, 29.9MB)
 *  테스트 2 〉	  통과 (0.31ms, 29.9MB)
 *  테스트 3 〉	  통과 (0.41ms, 30MB)
 *  테스트 4 〉	  통과 (0.19ms, 29.9MB)
 *  테스트 5 〉	  통과 (0.26ms, 30.1MB)
 *  테스트 6 〉	  통과 (0.27ms, 29.7MB)
 *  테스트 7 〉	  통과 (0.35ms, 29.7MB)
 *  테스트 8 〉	  통과 (0.29ms, 29.9MB)
 *  테스트 9 〉	  통과 (0.33ms, 29.8MB)
 *  테스트 10 〉	통과 (0.47ms, 30.1MB)
 *  테스트 11 〉	통과 (0.44ms, 29.9MB)
 *  테스트 12 〉	통과 (0.48ms, 29.8MB)
 *  테스트 13 〉	통과 (0.77ms, 29.9MB)
 *  테스트 14 〉	통과 (0.59ms, 30.3MB)
 *  테스트 15 〉	통과 (0.52ms, 30.2MB)
 *  테스트 16 〉	통과 (0.66ms, 30.1MB)
 *  테스트 17 〉	통과 (0.66ms, 30.1MB)
 *  테스트 18 〉	통과 (0.70ms, 30.1MB)
 *  테스트 19 〉	통과 (0.63ms, 30MB)
 *  테스트 20 〉	통과 (0.71ms, 30.2MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */
