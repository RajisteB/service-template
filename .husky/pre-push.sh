#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# get branch name
branch="$(git rev-parse --abbrev-ref HEAD)"

# disallow push to master branch
# MASTER='master'

# if [[ "$branch" == *"$MASTER"* ]]; then
#   echo "ERROR: Cannot push to master. Switch to a diferent branch and create a pull request."
#   exit 1;
# fi

