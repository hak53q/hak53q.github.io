#!/bin/bash

url="https://github.com/hak53q/Plangothic"
dir="$HOME/Plangothic"
cyan=$(tput setaf 6)
reset=$(tput sgr0)

if [ -d "$dir/.git" ]; then
    read -p " ${cyan}$dir${reset} 已存在，是否覆蓋該目錄? [Y/n] " answer
    if [[ -z "$answer" || "${answer,,}" =~ ^(y|yes)$ ]]; then
        git -C "$dir" reset --hard
        cd "$dir" && makepkg -sif && cd || exit 1
    else
        exit 1
    fi
else
    git clone "$url" "$dir"
    cd "$dir" && makepkg -sif && cd || exit 1
fi
