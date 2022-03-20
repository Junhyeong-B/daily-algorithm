{
  /*
    풀이 과정:
      1. 하드디스크가 작업을 수행하고 있지 않을 때는 요청이 들어온 작업부터 시작하므로 jobs 배열을 요청이 들어온 시간을 기준[0번째 index]으로 오름차순 정렬하여 순서대로 확인한다.
      2. 특정 요청을 수행하고 있을 때 다른 작업이 수행 가능한 시간이 여러개라면 그 중 소요시간이 작을 요청을 먼저 수행해야 전체 시간이 줄어든다.
        [0, 3] 작업이 수행중일 때, [1, 9], [2, 6] 작업이 수행 가능하다면 [2, 6] 먼저 해야 전체 시간이 최소화된다.
      3. 2번 요구사항을 수행하기 위해 Minimum Heap을 구현했다. 해당 Heap은 요소로 배열만 받는다는 전제 조건하에 1번째 index를 기준으로 비교한다.
        [0, 3] 작업이 수행중일 때, [1, 9], [2, 6] 작업을 Heap에 push하고 이를 꺼내서 사용할 때는 [2, 6]부터 사용하기 위해 Minimum Heap 사용
      4. 변수 설명
        answer: 각 작업의 요청부터 종료까지 시간을 더한 값
        time = 작업이 끝날 때 까지 총 소요 시간
        last = 마지막으로 수행 한 작업의 시작 시간
        count = 수행한 작업의 갯수
      5. count가 jobs 배열의 length보다 작을 때, 각 작업의 요청 시간이 last보다 크고 time보다 작다면 작업 중인 요청이 끝나면 바로 수행이 가능한 상태이므로 heap에 모두 추가한다.
      6. heap에서 작업을 하나씩 꺼내어 answer, last, time, count를 각각 연산해준다.
      7. 모든 작업이 완료되면 answer를 length로 나눈다.
  */
  /*
    정확성  테스트
      테스트 1 〉	통과 (27.84ms, 35MB)
      테스트 2 〉	통과 (20.66ms, 35.3MB)
      테스트 3 〉	통과 (19.98ms, 35.2MB)
      테스트 4 〉	통과 (24.15ms, 35.4MB)
      테스트 5 〉	통과 (26.84ms, 35.3MB)
      테스트 6 〉	통과 (1.17ms, 29.8MB)
      테스트 7 〉	통과 (17.36ms, 35.2MB)
      테스트 8 〉	통과 (23.06ms, 35MB)
      테스트 9 〉	통과 (4.58ms, 31MB)
      테스트 10 〉	통과 (24.69ms, 35MB)
      테스트 11 〉	통과 (0.55ms, 29.9MB)
      테스트 12 〉	통과 (0.57ms, 30MB)
      테스트 13 〉	통과 (0.80ms, 29.8MB)
      테스트 14 〉	통과 (0.70ms, 30.2MB)
      테스트 15 〉	통과 (0.72ms, 29.9MB)
      테스트 16 〉	통과 (0.72ms, 30.1MB)
      테스트 17 〉	통과 (0.43ms, 30MB)
      테스트 18 〉	통과 (0.45ms, 30.2MB)
      테스트 19 〉	통과 (0.35ms, 30MB)
      테스트 20 〉	통과 (0.35ms, 29.7MB)

    채점 결과
      정확성: 100.0
      합계: 100.0 / 100.0
  */

  class Heap {
    constructor() {
      this.values = [];
    }

    swap(index1, index2) {
      [this.values[index1], this.values[index2]] = [
        this.values[index2],
        this.values[index1],
      ];
    }

    parent(index) {
      return Math.floor((index - 1) / 2);
    }

    leftChild(index) {
      return index * 2 + 1;
    }

    rightChild(index) {
      return index * 2 + 2;
    }

    isLeaf(index) {
      return (
        index > Math.floor(this.values.length / 2) &&
        index < this.values.length - 1
      );
    }

    push(value) {
      this.values.push(value);
      this.heapifyUp(this.values.length - 1);
    }

    heapifyUp(index) {
      let currentIndex = index;
      let parentIndex = this.parent(index);

      while (
        currentIndex > 0 &&
        this.values[currentIndex][1] < this.values[parentIndex][1]
      ) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = this.parent(parentIndex);
      }
    }

    pop() {
      if (this.values.length < 1) {
        return;
      } else if (this.values.length === 1) {
        return this.values.pop();
      }

      const returnValue = this.values[0];
      this.values[0] = this.values.pop();
      this.heapifyDown(0);

      return returnValue;
    }

    heapifyDown(index) {
      if (this.isLeaf(index)) {
        return;
      }

      let currentIndex = index;
      let leftChildIndex = this.leftChild(index);
      let rightChildIndex = this.rightChild(index);

      if (
        this.values[leftChildIndex] &&
        this.values[currentIndex][1] > this.values[leftChildIndex][1]
      ) {
        currentIndex = leftChildIndex;
      }

      if (
        this.values[rightChildIndex] &&
        this.values[currentIndex][1] > this.values[rightChildIndex][1]
      ) {
        currentIndex = rightChildIndex;
      }

      if (currentIndex !== index) {
        this.swap(currentIndex, index);
        this.heapifyDown(currentIndex);
      }
    }
  }

  const solution = (jobs) => {
    const sortedJobs = jobs.slice().sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      } else {
        return a[0] - b[0];
      }
    });

    let answer = 0;
    let time = sortedJobs[0][0];
    let last = -1;
    let count = 0;
    const heap = new Heap();
    const { length } = jobs;

    while (count < length) {
      for (const [start, term] of sortedJobs) {
        if (last < start && start <= time) {
          heap.push([start, term]);
        }
      }

      if (heap.values.length) {
        const [start, term] = heap.pop();
        last = time;
        time += term;
        answer += time - start;
        count += 1;
      } else {
        time += 1;
      }
    }

    return Math.floor(answer / length);
  };
}
