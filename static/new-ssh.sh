#!/bin/bash

# How to use:
# curl -Lso- nampdn.com/new-ssh.sh | bash


read -p "Enter your email (This is local only): "  email

# Generating public/private rsa key pair.
ssh-keygen -t rsa -b 4096 -C $email

# Start the ssh-agent in the background.
eval "$(ssh-agent -s)"

# Add your SSH private key to the ssh-agent
ssh-add ~/.ssh/id_rsa

# Display public key
cat ~/.ssh/id_rsa.pub

cat ~/.ssh/id_rsa.pub | pbcopy

echo "Newly generated SSH Key copied to clipboard, you can paste it in your Github SSH Keys section!"

URL="https://github.com/settings/ssh/new"

if which xdg-open > /dev/null
then
  xdg-open $URL
elif which gnome-open > /dev/null
then
  gnome-open $URL
elif which open > /dev/null
  open $URL
fi