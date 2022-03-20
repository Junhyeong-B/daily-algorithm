import os
from urllib import parse


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

    directories = []

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

        if directory == '.':
            if len(files) == 1:
                content += "### [{}]({})\n".format(category,
                                                   parse.quote(os.path.join(root, files[0])))
                directories.append(category)
            continue

        if directory not in directories:
            content += "### {}\n".format(directory)
            directories.append(directory)

        for file in files:
            _, extention = os.path.splitext(file)
            if extention == ".md":
                content += "- [{}]({})\n".format(category,
                                                 parse.quote(os.path.join(root, file)))
        content += "\n"

    with open("README.md", "w", encoding="UTF-8") as fd:
        fd.write(content)


if __name__ == "__main__":
    main()
