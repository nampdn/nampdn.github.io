---
id: generating-ssh-key
title: Generating SSH Key
sidebar_label: Generating SSH Key
---

Being a software engineer, whether you are a beginner or expert in the development world, you have to generate ssh key over the time.

## tldr;

Your time is limited, just copy it!

```bash
# Generating public/private rsa key pair.
ssh-keygen -t rsa -b 4096 -C "me@example.com"

# Start the ssh-agent in the background.
eval "$(ssh-agent -s)"

# Add your SSH private key to the ssh-agent
ssh-add ~/.ssh/id_rsa

# Display public key
cat ~/.ssh/id_rsa.pub
```

## What is SSH key?

From wiki:

> SSH keys can serve as a means of identifying yourself to an SSH server using public-key cryptography and challenge-response authentication. The major advantage of key-based authentication is that in contrast to password authentication it is not prone to brute-force attacks and you do not expose valid credentials, if the server has been compromised.

## Why SSH key?

- **Secure**: It's [**estimated about 2000 CPU-year**](https://security.stackexchange.com/a/33242) to bruce-force a `private key` from a known `public key`
- **Authenticate**: When pushing to a git remote, if you use `https://host.com` instead of `git@host.com`, you have to entering credentials over and over.

## How to automate it?

I have written an automated script hosted on [IPFS network](https://ipfs.io) and mapped it with my site domain at [https://nampdn.com/new-ssh.sh](https://nampdn.com/new-ssh.sh), you can click on the link to preview or download the code.

One line script will help you do all the rest:

[Generate SSH Key Script](/new-ssh.sh)

```bash
curl -Lso- nampdn.com/new-ssh.sh | bash
```

I have provide more feature to this script, it's better than copy and paste each line to your terminal because:

- You're time is more value than you think!
- Automate above scripts with the copy command.
- Open Github New Page for you to paste the newly generated key.
- It's short and memorable.
