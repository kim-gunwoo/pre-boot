#!/bin/bash
#!/bin/zsh
rm test.txt
touch test.txt
if ! [ -d bak ]; then
        mkdir bak
fi
cp test.txt bak