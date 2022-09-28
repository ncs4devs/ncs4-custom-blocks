import zipfile
import re
import functools
import os
import sys

def patternToRegex(pattern):
    regex = re.sub("\.", "\.", pattern)
    regex = re.sub("\*", ".*", regex)
    return regex


def createIncludeChecker(filePath):
    with open(filePath) as patternFile:
        patterns = patternFile.readlines()
        def checker(f):
            if f == filePath:
                return False
            for pattern in patterns:
                pattern = pattern.rstrip("\n")
                pattern = patternToRegex(pattern)
                if pattern.isspace() or pattern == "":
                    continue
                if bool(re.search(pattern, f)):
                    return False
            return True

        return checker

def getFileList(dir):
    for (path, _, fileNames) in os.walk(dir):
        for file in fileNames:
            yield os.path.join(path, file).replace("\\", "/")


def makeZip(dir, zipFile, ignoreFile):
    checker = createIncludeChecker(ignoreFile)
    files = filter(checker, getFileList(dir))
    with zipfile.ZipFile(zipFile, "w") as zip:
        for file in files:
            print(file)
            zip.write(file);

args = {
    "dir": "./",
    "ignoreFile": "./.buildignore",
    "zipFile": "../ncs4-custom-blocks.zip",
}

flags = {
    "ignoreFile": "--ignore",
    "zipFile": "--out",
}

def tokenizeArgs(args, flags):
    tokens = []
    i = 1 # arg 0 is the program name
    while i < len(args):
        if args[i] in flags.values():
            if i + 1 < len(args):
                tokens.append({ "flag": args[i], "arg": args[i+1] })
            else:
                raise SyntaxError(
                    "Argument expected for option '" + args[i] + "'"
                )
            i += 1
        else:
            tokens.append({ "flag": None, "arg": args[i] })
        i += 1
    return tokens

for token in tokenizeArgs(sys.argv, flags):
    if token["flag"] == None:
        args["dir"] = token["arg"]
    else:
        for option, flag in flags.items():
            if flag == token["flag"]:
                args[option] = token["arg"]
                break
        raise NotImplementedError


makeZip(**args);
