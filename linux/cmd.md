### 명령어

#### ls

> 현재 디렉토리의 파일 목록을 출력하는 명령어. 'ls -l'은 자세히 보기

#### pwd

> 현재 위치하고 있는 디렉토리를 알려주는 명령어

#### mkdir

> mkdir 새로 생성할 디렉토리명

#### cd

> cd 이동할 디렉토리의 경로명

```
상대경로와 절대경로
상대경로는 현재 디렉토리의 위치를 기준으로 다른 디렉토리의 위치를 표현하는 것으로 ..은 부모 디렉토리를 의미합니다. 'cd ..'은 현재 디렉토리의 부모 디렉토리로 이동하는 명령이 됩니다. 참고로 현재 디렉토리는 '.' 입니다.

절대경로는 최상위 디렉토리를 기준으로 경로를 표현하는 것을 의미합니다. 최상위 디렉토리는 루트(root) 디렉토리라고 하고 '/' 입니다. 'cd /'는 최상위 디렉토리로 이동한다는 뜻입니다. 'cd /home/egoing'은 현재 디렉토리가 무엇이건 언제나 '/home/egoing'을 의미하는데 이런 식의 경로 표현을 절대경로라고 합니다.
```

#### rm

> rm 파일명
> rm -r 디렉토리명

#### nano

> 파일에 정보를 추가하고 편집하는 에디터

#### homebrew / apt

> brew / apt-get

#### wget

> 다운로드 명령어

#### | 파이프라인

> 파이프라인 : a프로그램의 출력이 b 프로그램의 입력이 됨

### IO Redirection

#### > output

> standard output : 1> , >
> standard error : 2>
> touch a.txt
> ls -l > a.txt 시 ls -l 의 값이 a.txt 로 만들어짐 cat a.txt 를 할 경우 ls-l 의 내용을 볼수있음

#### < input

> standard input : <
> touch a.txt
> cat < a.txt , cat a.txt 와 같은

#### head

#### >> append

> ls -l >> a.txt ; ls -l >> a.txt cat a.txt

#### /dev/null

> 화면에 출력하고 싶지 않을때 사용

#### locate , find , whereis

> 파일 검색

#### $PATH

> 환경변수

#### 백그라운드 실행

> Ctrl + z : 실행중인 프로그램을 백그라운드로 보내는 단축키. 이 기능을 실행하면 명령어가 일시 정지

> &가 명령어 뒤에 붙으면 명령어가 실행될 때 백그라운드로 실행
> ex) ls -alR / > result.txt 2> error.log & :

> jobs : 백그라운드 작업들의 목록을 보여줌

#### daemon , service

> 항상 프로그램 실행

#### cron

> crontab
> 정기적으로 프로그램 실행

#### tail

> 제일 마지막을 출력 -f : 변경사항 존재시 업데이트

#### id , who

> 사용자 정보

#### root

> sudo su vs su - root
> sudo su : sudo 권한이 있는 user가 root로 접속할 때 비밀번호 없이 바로 접속
> su - root : root의 비밀번호를 알고 있을 때 sudo 권한이 없어도 접속하는 방법
> sudo passwd -l root : su - root를 언락
> sudo passwd -u root : su - root를 락

#### chmod

> ugo / +- / rwx
> u : 유저 , g : 그룹 , o : 다른사용자 , a: 모든사용자
> 권한 : + : 권한 추가 , - 권한제거 , = 권한 동일
> r : read 읽기 , w : write 쓰기 , x : excute 실행

```
8진법 | 2진법 | 파일 모드
0     |  000  |  ---
1     |  001  |  --x
2     |  010  |  -w-
3     |  011  |  -wx
4     |  100  |  r--
5     |  101  |  r-x
6     |  110  |  rw-
7     |  111  |  rwx
```

#### chown

> chown {user}:{group} {file or directory}
> ex) 사용자 : a , 그룹 : b , 파일명 :test.txt 일때 , chown a:b test.txt

#### ; , && , & 차이점

> ; - 앞의 명령어가 실패해도 다음 명령어가 실행
> ex) mkdir test; cd test; touch abc

> && - 앞의 명령어가 성공했을 때 다음 명령어가 실행
> ex) mkdir test && cd test && touch abc

> & - 앞의 명령어를 백그라운드로 돌리고 동시에 뒤의 명령어를 실행

#### rsync

```
test1, test2, test3 ... test10 파일 10개를 생성하는 명령어
touch test{1..10}

rsync -av src dest
이렇게 하면 dest라는 디렉토리 안에 src라는 디렉토리가 생성됨
a는 아카이브 모드, v는 진행상태 출력

dest라는 디렉토리 안에 src 안에 있는 내용을 동기화하고자 한다면
rsync -a src/ dest
여기에서 src/는 src 디렉토리 안에 있는 파일들이라는 뜻

rsync의 가장 큰 장점은 증분백업 기능
```
