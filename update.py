import os
from urllib import parse
import re


def count_problem():
    count = 0
    for root, dirs, files in os.walk("."):
        dirs.sort()
        if root == '.':
            for dir in ('.git', '.github', "Practice"):
                try:
                    dirs.remove(dir)
                except ValueError:
                    pass
            continue
        if len(dirs) == 0:
            count += len(files)
    return count


count = count_problem()


HEADER = """
# 🚩 Javascript 코딩테스트 Repository
- 코딩테스트 연습 저장소입니다.
---
"""

HEADER += f'# 현재까지 푼 문제 수: 🐥 {count}개\n'


def main():
    content = ""
    content += HEADER

    directories = ["."]

    for root, dirs, files in os.walk("."):
        dirs.sort()
        if root == '.':
            for dir in ('.git', '.github'):
                try:
                    dirs.remove(dir)
                except ValueError:
                    pass
            continue

        category = os.path.basename(root)

        if category == 'images' or category == 'files':
            continue

        directory = os.path.basename(os.path.dirname(root))

        if directory == ".":
            content += "## {}\n".format(category)
        else:
            content += "### {}\n".format(category)
        directories.append(category)

        if directory not in directories:
            content += "### {}\n".format(directory)
            directories.append(directory)

        fileArray = []
        for file in files:
            filename, extention = os.path.splitext(file)

            if extention == ".js" or extention == ".ts":
                questionNumber = re.sub(r'[^0-9]', '', file)
                num = int(questionNumber) if questionNumber != "" else 0
                fileArray.append([num,
                                  "- [{}]({})\n".format(filename, parse.quote(os.path.join(root, file)))])

        fileArray.sort(key=lambda x: x[0])
        for fileDir in fileArray:
            content += fileDir[1]

    with open("README.md", "w", encoding="UTF-8") as fd:
        fd.write(content)


if __name__ == "__main__":
    main()
