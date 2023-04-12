/**
 * Runtime 82 ms Beats 21.74%
 * Memory 45.3 MB Beats 36.52%
 */
function simplifyPath(path: string): string {
  const stack: string[] = [];

  for (const str of path.split('/')) {
    if (str === '' || str === '.') {
      continue;
    }

    if (str === '..') {
      if (stack.length > 0) {
        stack.pop();
      }

      continue;
    }

    stack.push(str);
  }

  return '/' + stack.join('/');
}

console.log(simplifyPath('/../../../../../a')); // /a
