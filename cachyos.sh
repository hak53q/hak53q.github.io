#!/bin/bash
touch $HOME/cachyos-repo-bash/
cd $HOME/cachyos-repo-bash/
curl -o cachyos-repo.html https://mirror.cachyos.org/repo/x86_64/cachyos/
curl -o cachyos-repo-v3.html https://mirror.cachyos.org/repo/x86_64_v3/cachyos-v3/
curl -o cachyos-repo-core-v3.html https://mirror.cachyos.org/repo/x86_64_v3/cachyos-core-v3/
curl -o cachyos-repo-extra-v3.html https://mirror.cachyos.org/repo/x86_64_v3/cachyos-extra-v3/
curl -o cachyos-repo-v4.html https://mirror.cachyos.org/repo/x86_64_v4/cachyos-v3/
curl -o cachyos-repo-core-v4.html https://mirror.cachyos.org/repo/x86_64_v4/cachyos-core-v4/
curl -o cachyos-repo-extra-v4.html https://mirror.cachyos.org/repo/x86_64_v4/cachyos-extra-v4/

if [ "$1" = "vx" ]; then 
    pkg=$(grep -o "$2\.*\.pkg\.tar\.zst" cachyos-repo.html | head -n 1)
    curl -O $pkg
    sudo pacman -U $pkg
fi

if [ "$1" = "v3core" ]; then 
    pkg=$(grep -o "$2\.*\.pkg\.tar\.zst" cachyos-repo-core-v3.html | head -n 1)
    curl -O $pkg
    sudo pacman -U $pkg
fi

if [ "$1" = "v3extra" ]; then 
    pkg=$(grep -o "$2\.*\.pkg\.tar\.zst" cachyos-repo-extra-v3.html | head -n 1)
    curl -O $pkg
    sudo pacman -U $pkg
fi

if [ "$1" = "v3" ]; then 
    pkg=$(grep -o "$2\.*\.pkg\.tar\.zst" cachyos-repo-v3.html | head -n 1)
    curl -O $pkg
    sudo pacman -U $pkg
fi

if [ "$1" = "v4core" ]; then 
    pkg=$(grep -o "$2\.*\.pkg\.tar\.zst" cachyos-repo-core-v4.html | head -n 1)
    curl -O $pkg
    sudo pacman -U $pkg
fi

if [ "$1" = "v4extra" ]; then 
    pkg=$(grep -o "$2\.*\.pkg\.tar\.zst" cachyos-repo-extra-v4.html | head -n 1)
    curl -O $pkg
    sudo pacman -U $pkg
fi

if [ "$1" = "v4" ]; then 
    pkg=$(grep -o "$2\.*\.pkg\.tar\.zst" cachyos-repo-v4.html | head -n 1)
    curl -O $pkg
    sudo pacman -U $pkg
fi

cd $HOME