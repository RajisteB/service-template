#!/bin/sh
. "$(dirname "$0")/_/husky.sh"


# get branch name
branch="$(git rev-parse --abbrev-ref HEAD)"

# only allow commits to feature/, hotfix/, bugfix/, local/, config/ branches
# if [[ "$branch" == "master" ]]; then
#   echo "ERROR: Commit to master branch not permitted. You may only commit to branches that start with feature/, hotfix/, bugfix/, local/, or config/"
#   exit 1;
# fi

# if [[ "$branch" =~ "feature/" || "$branch" =~ "hotfix/"  || "$branch" =~ "bugfix/"  || "$branch" =~ "local/" || "$branch" =~ "config/" ]]; then
#   npm run lint-fix && npm test
# else
#   echo "ERROR: Commit to branch [$branch] not permitted. You may only commit to branches that start with feature/, hotfix/, bugfix/, local/, or config/"
#   exit 1;
# fi

