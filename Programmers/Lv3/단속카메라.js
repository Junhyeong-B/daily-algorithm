{
  /*
    풀이 과정:
      차가 고속도로에 진입한 시점, 진출한 시점이 있을 때 그 중간에 카메라를 설치하는 것 보다 진출 시점에 카메라를 설치하는 게 더 넓은 범위를 커버할 수 있다고 생각했다.
      routes 파라미터를 정렬하여 첫 번째로 들어오는 차량 진출 시점에 카메라를 1대 설치한다면, 해당 차의 진출 시점보다 먼저 들어오는 모든 차량에 대해 카메라를 만나게 되므로 효율적이다.
      다만, 두 번째로 들어온 차량의 진출 시점이 첫 번째 들어온 차량의 진출 시점보다 앞서게 되면 카메라를 만나지 않고 지나친다.
      예를 들어, [[0, 5], [2, 4]] 배열이 들어와서 5에 카메라를 설치한다면 두 번째 차량은 카메라를 만나지 않는다.
      따라서, 진입 시점으로 정렬하면 안되고, 진출 시점으로 정렬해야한다.
      즉, [[2, 4], [0, 5]] 순서가 되어야 하고, 4 지점에 카메라를 설치하면 두 차량 모두 지나치게된다.
  */
  /*
    정확성  테스트
      테스트 1 〉	통과 (0.14ms, 30.1MB)
      테스트 2 〉	통과 (0.14ms, 30.1MB)
      테스트 3 〉	통과 (0.12ms, 30.1MB)
      테스트 4 〉	통과 (0.12ms, 30.1MB)
      테스트 5 〉	통과 (0.12ms, 30.2MB)

    효율성  테스트
      테스트 1 〉	통과 (1.25ms, 30MB)
      테스트 2 〉	통과 (1.07ms, 30.1MB)
      테스트 3 〉	통과 (3.64ms, 31.8MB)
      테스트 4 〉	통과 (0.16ms, 30MB)
      테스트 5 〉	통과 (4.41ms, 32.1MB)

    채점 결과
      정확성: 50.0
      효율성: 50.0
      합계: 100.0 / 100.0
  */
  const solution = (routes) => {
    const sortedRoutes = routes.slice().sort((a, b) => a[1] - b[1]);
    let answer = 1;
    let currentCameraPosition = sortedRoutes[0][1];

    for (const [start, end] of sortedRoutes) {
      if (!(start <= currentCameraPosition && currentCameraPosition <= end)) {
        answer += 1;
        currentCameraPosition = end;
      }
    }

    return answer;
  };
}
