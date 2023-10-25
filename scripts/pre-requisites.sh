#!/bin/bash

requiredPackages=("gh" "git")

for pkg in "${requiredPackages[@]}"; do
    if ! command -v "$pkg" &>/dev/null; then
        echo "$pkg is not installed"
        exit 1
    fi
done

# All required packages are installed
echo "All required packages are installed"
exit 0