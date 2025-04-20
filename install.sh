url=https://github.com/hak53q/Plangothic
dir=~/Plangothic
cyan=$(tput setaf 6)
reset=$(tput sgr0)

if [ -d "Plangothic/.git" ]; then
    read -p " ${cyan}$dir${reset} 已存在，是否覆蓋該目錄? [Y/n] " answer
	if [[ -z "$answer" || "${answer,,}" =~ ^(y|yes)$ ]]; then
	    git -C $dir reset --hard
	    cd ~/Plangothic/ && makepkg -si && cd
	else
	    exit 1
	fi
else
    git clone $url
    cd ~/Plangothic/ && makepkg -si && cd
fi
