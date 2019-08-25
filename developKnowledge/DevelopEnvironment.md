이번에 망한 맥북백업을 경험삼아, 앞으로는 데이터를 꼭 잘 저장해두자 사라져도 되는 데이터 빼고는 전부 클라우드에 넣어두거나 하자. 지금까지 썼던 TIL , 면접 팁들은 다 기억을 되살려서 적어보자 :cry:. 새롭게 시작하는 마음으로다가 지금까지 공부했던 것들을 다시 복습함과 동시에, 미루고 미뤄왔던 `zsh` 를 깔고 `oh-my-zsh` 를 적용시켜 보았다.

1. 우선 [여기](https://www.iterm2.com/downloads.html) 에 들어가서 `iTerm2`라는 맥용 터미널을 다운받자. 다운을 받은 후에는 꼭 응용프로그램 폴더로 앱을 이동시켜주는 것을 잊지 말자.

2. 다음은 `HomeBrew`를 설치해야 한다.

   ```
   /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
   ```

   위의 명령어를 터미널에 입력하면 `HomeBrew`를 다운받을 수 있다.

3. 이렇게 해야 `zsh`를 다운받을 수 있다.

   ```
   brew install zsh
   ```

   위의 명령어를 통해서 다운 받을 수 있다.

4. 다음은 `oh-my-zsh`이다.
   `oh-my-zsh`은 `zsh`을 좀 더 편리하게 이용하게 이용해주는 일종의 `zsh` 플러그인이다.

   ```
   sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
   ```

   위의 명령어를 터미널에 입력하면 된다. 비밀번호를 입력하는 것은 기본 쉘을 바꾸기 위해서이니 당황하지 말 것.

5. 다음으로 이쁘장한 테마를 받아보자.

   [여기](https://github.com/mhartington/oceanic-next-iterm/archive/master.zip)에 들어가면 파일을 다운받을 수 있는데, 여기서 `Oceanic-Next.itermcolors` 이 파일을 실행하면 `iTerm2`에 색 테마가 추가된다. 적용하기 위해서 `iTerm2`를 실행하고 맥 화면 상단 좌측의 사과 아이콘 옆 `iTerm2`를 누르고 나오는 메뉴 중`‘Preferences…‘`를 누른다. 그 이후에 `Profiles > Default > Colors > Color Presets… > Oceanic-Next`를 누르고 재실행 하면 적용이된다.

6. 다음 agnoster테마 설치
   텍스트 편집기로 `~/.zshrc` 파일을 열어주자. vi ~/.zshrc 의 명령어를 입력하면 터미널에서도 띄울 수 있다. 그 파일을 10번째줄 쯔음에 있는 `ZSH_THEME="something"` 을

   `ZSH_THEME="agnoster"` 로 바꾸어주면 된다.

7. 다음으로 폰트를 설치해보자. 위처럼 설치를 하면 터미널에서 열었을 때 글자가 깨지거나 하는 문제가 생긴다. 그것을 방지하기 위해서 폰트를 다운받을 필요가 있다.
   [여기](https://beomi.github.io/others/Ubuntu_Mono_derivative_Powerline.ttf) 에서 폰트를 다운 받고, 위에서 한것처럼 iterm2의 탭에서 preference를 들어가 준다. 그이후
   `Profiles > Default > Text > ChangeFont` 순서로 들어가서 `collection` 탭에는 `고정폭` `font-family` 탬에는 `Ubuntu 어쩌구` 로되있는 것으로 설정해주자.

8. 마지막으로 `zsh-syntax-highlighting` 를 설치해 주자. 이는 시스템 `PATH`에 등록된 명령어들을 자동으로 HighLighting 해주는 프로그램이다.

   ```
   git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
   echo "source ${(q-)PWD}/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ${ZDOTDIR:-$HOME}/.zshrc
   ```

   터미널에 위의 명령어를 입력해주자.

9. 이렇게 하면 iTerm2는 이쁘장한 테마로 문제없이 동작하게 된다. 하지만 나는 VSCode로 터미널을 사용하기 때문에 VSCode의 터미널에도 테마를 입혀줄 필요가 있었다.

   VSCode 의 설정탭에 들어가서

   terminal.integrated.shell.osx 는 zsh로

   terminal.integrated.fontFamily 는 Ubuntu Mono derivative Powerline로 바꾸어 주면 된다. 그렇게 바꾸어 주면 설정의 JSONData가 이렇게 바뀌게 된다.

   ```
   {
       "terminal.integrated.shell.osx": "zsh",
       "terminal.integrated.fontFamily": "Ubuntu Mono derivative Powerline"
   }
   ```

   그리고 재실행 시켜주면 VSCode에 나오는 터미널의 모습도 잘 바뀌어있는 것을 확인할 수 있다.

10. 기일게 나오는 이름을 바꾸고 싶을때 쓰는 방법.

    ```
    $ vim ~/.zshrc

    prompt_context() {
      if [[ "$USER" != "$DEFAULT_USER" || -n "$SSH_CLIENT" ]]; then
        prompt_segment black default "%(!.%{%F{yellow}%}.)$USER"
      fi
    }
    ```

    vim을 사용해 수정하는 파일을 열고 `shift + g` 를 눌러 파일의 맨끝으로 간다음 위의 함수를 복붙해주면된다. 수정해준 이후에는 :wq( 세미콜론, 저장, 나가기) 를해주면 끝.
