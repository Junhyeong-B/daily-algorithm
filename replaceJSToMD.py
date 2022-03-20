import os


def main():
    for root, dirs, files in os.walk("."):
        dirs.sort()
        if root == '.':
            for dir in ('.git', '.github'):
                try:
                    dirs.remove(dir)
                except ValueError:
                    pass
            continue

        for file in files:
            filename, extention = file.split(".")
            if extention == "js" or extention == "ts":
                fileSource = root + "/" + file
                newFilenameDirectory = root + "/" + filename
                if os.path.isdir(newFilenameDirectory):
                    continue

                os.mkdir(newFilenameDirectory)
                content = ""
                if extention == "js":
                    content += "```jsx\n"

                if extention == "ts":
                    content += "```tsx\n"

                with open(fileSource, "r", encoding='UTF-8') as f:
                    lines = f.readlines()
                    for line in lines:
                        content += line

                content += "```"
                with open(newFilenameDirectory + "/README.md", "w", encoding="UTF-8") as fd:
                    fd.write(content)
                os.remove(fileSource)


if __name__ == "__main__":
    main()
