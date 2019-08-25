코드 리뷰를 할 때, 코드를 자신의 컴퓨터에 가져와서 리뷰 하는 법

## `git fetch upstream pull/${IDnum}/head:${받아올 로컬 브랜치}`

커밋 옮기기

1. 각 step 마다 브랜치를 딸 것 git checkout (origin에있는 브랜치명)을 치게되면 로컬에도 브랜치가 생김.
2. rebase를 할것.
   (현재 브랜치) git rebase (rebase할 브랜치)
   {git rebase (뿌리가될 브랜치) (병합할 브랜치) 를 입력하면 위와 같은 효과를 낼 수 있음}.
   명령어를 하면 rebase 할 브랜치 위에 현재브랜치에 있는 커밋들이 쌓이는 작업이 일어남.
3. 다 정리를 하였다면 맨처음으로 가서
   `git format-patch {commit id} --stdout | git --git-dir=../gittest1/.git am`

4. 원래 폴더에서 위의 명령어를 실행하게 되면 원래 폴더에 지금까지 쌓여있던 커밋들이 적용되며 중복된 파일을 만들어 내기 때문에 충돌을 일으키게 된다. 고로 커밋을 옮기는 파일로 가서 아래의 명령어를 실행하면 된다.
   `git --git-dir=../{커밋들이 모여있는 폴더명}/.git format-patch {commit id} --stdout | git am`
   이 명령을 치면 기존 폴더에 있던 커밋들을 format-patch를 이용하며 patch로 만들고 am(patch를 현재 커밋에 붙이는)하는 작업이 이루어진다.
