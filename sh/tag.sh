#! /usr/bin/env sh

read -p "Enter components name: " COMPONENTS
read -p "Enter a tag log message describing latest changes: " LOG_MSG

names="all"
msg="None<default tag message>"
[[ $COMPONENTS ]] && names=$COMPONENTS
[[ $LOG_MSG ]] && msg=$LOG_MSG
echo -e "\e[34mtagging components: \e[35m$names\e[0m\e[0m"
echo -e "\e[34mlog message: \e[35m$msg\e[0m\e[0m"

if [[ ! $COMPONENTS ]]; then
  bit tag --message "$LOG_MSG"
  exit 0
fi

bit tag "$COMPONENTS" --message "$LOG_MSG"
