#!/bin/bash

url="https://github.com/hak53q/plangothic-pkgbuild"
dir="$HOME/plangothic-pkgbuild"
cyan=$(tput setaf 6)
reset=$(tput sgr0)

if [ -d "$dir/.git" ]; then
    read -p " ${cyan}$dir${reset} 已存在，是否覆蓋該目錄? [Y/n] " answer
    if [[ -z "$answer" || "${answer,,}" =~ ^(y|yes)$ ]]; then
        rm -rf $dir
        git clone "$url" "$dir"
        cd "$dir" && makepkg -sif && cd || exit 1
    else
        cd "$dir" && makepkg -sif && cd || exit 1
    fi
else
    git clone "$url" "$dir"
    cd "$dir" && makepkg -sif && cd || exit 1
fi

read -p " 安裝完畢，是否刪除 ${cyan}$dir${reset} ? [Y/n] " answer
    if [[ -z "$answer" || "${answer,,}" =~ ^(y|yes)$ ]]; then
        rm -rf "$dir" || exit 1
    fi

read -p " 安裝完畢，是否刪除 ${cyan}$0${reset} ? [Y/n] " answer
    if [[ -z "$answer" || "${answer,,}" =~ ^(y|yes)$ ]]; then
        rm -f "$0" || exit 1
    fi
