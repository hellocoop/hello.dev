#!/bin/bash

# Function to check for errors
check_error() {
  if [ -n "$1" ]; then
    echo "Error: $1"
    afplay /System/Library/Sounds/Funk.aiff
    exit 1
  fi
}

# Check if not in the main branch
prBranchName=$(git branch --show-current)
if [ "$prBranchName" = "main" ]; then
  check_error "Cannot start a review from main branch. Please switch to your development branch and try again."
fi

# Create PR
gh pr create --base main --title "$prBranchName" --body "" 2>&1
pr_create_status=$?
if [ $pr_create_status -ne 0 ]; then
  if [ "$(grep -q 'already exists' <<< "$pr_create_status"; echo $?)" -ne 0 ]; then
    check_error "Error creating PR"
  fi
fi

# Play success sound (Only works on MacOS)
afplay /System/Library/Sounds/Glass.aiff

# GitHub-Slack app sends a PR created Slack message to #content-updates channel
check_error

# Exit with success
exit 0
