/\*

git commands to save to github

1. go to github and create a new repo

for existing and unconnected repo:

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/AdamAksel/anotherPracticeRepo.git <-- "change to your own git repo adress"
git push -u origin main

for existing and connected repo:

git add .
git commit -m "some message"
git push -u origin "branch name"

create a new branch:

git branch "new branch name"

make branch active branch:

git checkout "branch name"

how to merge two branches:

1. go to the branch you want to merge into
   git checkout "branch name"
2. merge another branch into it
   git merge "branch name you wish to merge"

\*/
