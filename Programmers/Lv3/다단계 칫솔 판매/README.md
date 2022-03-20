```jsx
{
  /*
    정확성  테스트
      테스트 1 〉 통과 (0.34ms, 30MB)
      테스트 2 〉 통과 (0.44ms, 29.7MB)
      테스트 3 〉 통과 (0.26ms, 29.8MB)
      테스트 4 〉 통과 (0.65ms, 30.1MB)
      테스트 5 〉 통과 (0.84ms, 30.4MB)
      테스트 6 〉 통과 (10.89ms, 35.8MB)
      테스트 7 〉 통과 (10.31ms, 36MB)
      테스트 8 〉 통과 (10.01ms, 36.6MB)
      테스트 9 〉 통과 (16.74ms, 37.2MB)
      테스트 10 〉통과 (28.06ms, 43.7MB)
      테스트 11 〉통과 (24.62ms, 43MB)
      테스트 12 〉통과 (27.09ms, 43.3MB)
      테스트 13 〉통과 (23.44ms, 43.1MB)
    채점 결과
      정확성: 100.0
      합계: 100.0 / 100.0
  */
  const solution = (enroll, referral, seller, amount) => {
    const group = {
      center: {
        profit: 0,
      },
    };

    for (const member of enroll) {
      group[member] = {
        parent: null,
        profit: 0,
      };
    }

    for (let i = 0; i < referral.length; i++) {
      if (referral[i] === "-") {
        group[enroll[i]].parent = "center";
      } else {
        group[enroll[i]].parent = referral[i];
      }
    }

    for (let i = 0; i < seller.length; i++) {
      let profit = amount[i] * 100;
      let distribute = profit * 0.1;
      let currentMember = seller[i];
      group[currentMember].profit += profit - distribute;

      currentMember = group[currentMember].parent;
      while (currentMember) {
        if (!distribute) {
          break;
        }
        profit = distribute;
        distribute = Math.floor(profit * 0.1);

        if (currentMember === "center") {
          group[currentMember].profit += profit;
        } else {
          group[currentMember].profit += profit - distribute;
        }

        currentMember = group[currentMember].parent;
      }
    }

    const answer = enroll.map((member) => group[member].profit);
    return answer;
  };

  /* 첫 번째 시도 */
  /*
    실패 이유:
      seller 한 명씩 돌면서 본인을 추천한 직원에게 돈을 넘겨주는 것을 while문으로 그대로 구현했는데
      이익을 분배하고 남은 돈이 0원일 경우(모두 자신이 가진 경우)에도 최종 center 노드까지 계속 반복하게 해서 시간 초과가 났던 것 같다.

      결국, 불필요한 과정이었고, 남은 금액이 0원일 경우 while문을 break하고 다음 seller로 진행하게 해서 문제를 해결했다.
  */
  /*
    정확성  테스트
      테스트 1 〉	 통과 (0.35ms, 30MB)
      테스트 2 〉	 통과 (0.21ms, 30.4MB)
      테스트 3 〉	 통과 (0.41ms, 30.1MB)
      테스트 4 〉	 통과 (0.44ms, 30.1MB)
      테스트 5 〉	 통과 (1.07ms, 30.4MB)
      테스트 6 〉	 통과 (9.58ms, 36.1MB)
      테스트 7 〉	 통과 (11.03ms, 36.2MB)
      테스트 8 〉	 통과 (11.49ms, 36.7MB)
      테스트 9 〉	 통과 (16.98ms, 37.7MB)
      테스트 10 〉 통과 (44.52ms, 43.8MB)
      테스트 11 〉 실패 (시간 초과)
      테스트 12 〉 실패 (시간 초과)
      테스트 13 〉 실패 (시간 초과)
    채점 결과
      정확성: 76.9
      합계: 76.9 / 100.0
  */

  const firstTry = (enroll, referral, seller, amount) => {
    const group = {
      center: {
        profit: 0,
      },
    };

    for (const member of enroll) {
      group[member] = {
        parent: null,
        profit: 0,
      };
    }

    for (let i = 0; i < referral.length; i++) {
      if (referral[i] === "-") {
        group[enroll[i]].parent = "center";
      } else {
        group[enroll[i]].parent = referral[i];
      }
    }

    for (let i = 0; i < seller.length; i++) {
      let profit = amount[i] * 100;
      let distribute = profit * 0.1;
      let currentMember = seller[i];
      group[currentMember].profit += profit - distribute;

      currentMember = group[currentMember].parent;
      while (currentMember) {
        profit = distribute;
        distribute = Math.floor(profit * 0.1);

        if (currentMember === "center") {
          group[currentMember].profit += profit;
        } else {
          group[currentMember].profit += profit - distribute;
        }

        currentMember = group[currentMember].parent;
      }
    }

    const answer = enroll.map((member) => group[member].profit);
    return answer;
  };
}
```