{
  /*
    1차 시도: Brute Force
      2중 for문으로 모든 경우를 확인 → O(n^2) → Time Limit Exceeded로 실패
    2차 시도: 2 Pointer
      O(n) → left, right 값으로 확인하여 height가 더 낮은 pointer 이동 → 성공
  */
  function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let answer = 0;

    while (left < right) {
      answer = Math.max(answer, Math.min(height[left], height[right]) * (right - left));
      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
    }

    return answer;
  };
}