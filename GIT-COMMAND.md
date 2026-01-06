# 🚀 Comprehensive Git Command Guide

## Table of Contents
1. [Git Basics & Setup](#git-basics--setup)
2. [Normal Development Workflow](#normal-development-workflow)
3. [Authentication & Remote Setup](#authentication--remote-setup)
4. [Branching & Merging](#branching--merging)
5. [Common Scenarios & Solutions](#common-scenarios--solutions)
6. [Visual Workflow Diagrams](#visual-workflow-diagrams)
7. [Emergency Commands](#emergency-commands)
8. [Best Practices](#best-practices)

---

## Git Basics & Setup

### Initial Configuration
```bash
# 🎯 FIRST-TIME GIT SETUP
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global init.defaultBranch main
git config --global credential.helper store

# Check configuration
git config --list
```

### Repository Initialization
```bash
# 🆕 CREATE NEW REPOSITORY
git init                    # Initialize new Git repository
git init project-name       # Initialize in new directory

# 📥 CLONE EXISTING REPOSITORY
git clone https://github.com/username/repository.git
git clone git@github.com:username/repository.git  # SSH
```

---

## Normal Development Workflow

### 📋 Daily Git Workflow
```bash
# 1️⃣ CHECK STATUS
git status                  # See current changes
git log --oneline -5       # See recent commits

# 2️⃣ PULL LATEST CHANGES
git pull origin main       # Get updates from remote

# 3️⃣ MAKE CHANGES
# Edit your files...

# 4️⃣ STAGE CHANGES
git add .                  # Add all changes
git add file.js            # Add specific file
git add src/               # Add entire directory

# 5️⃣ COMMIT CHANGES
git commit -m "Add new feature: user authentication"

# 6️⃣ PUSH TO REMOTE
git push origin main       # Push to main branch
git push                   # After upstream is set
```

### 🔄 Workflow Visual Representation
```
📁 Working Directory ──► 📦 Staging Area ──► 🗃️ Local Repository ──► 🌐 Remote Repository
     (git add)              (git commit)           (git push)

   Modified Files      →    Staged Files    →   Committed Files   →   Synced Files
   ✏️ file.js               ✅ file.js           📝 commit abc123      🌐 GitHub/GitLab
   ❓ status: modified      ❓ status: staged    ❓ status: committed   ❓ status: synced
```

### 📊 Git Status States
```bash
# 🔍 UNDERSTANDING GIT STATUS OUTPUT
git status

# Possible file states:
# 🟢 Untracked    - New files not in Git
# 🟡 Modified     - Changed files not staged
# 🟦 Staged       - Files ready to commit
# ⚪ Committed    - Files in repository
# 🔴 Conflicted   - Merge conflicts need resolution
```

---

## Authentication & Remote Setup

### 🔐 GitHub Authentication
```bash
# METHOD 1: PERSONAL ACCESS TOKEN (Recommended)
# 1. Go to GitHub → Settings → Developer settings → Personal access tokens
# 2. Generate token with 'repo' scope
# 3. Use token as password when prompted

git push origin main
# Username: your-github-username
# Password: ghp_your_personal_access_token

# METHOD 2: GITHUB CLI
gh auth login              # Interactive authentication
git push origin main       # Works seamlessly after

# METHOD 3: SSH KEYS
ssh-keygen -t ed25519 -C "your.email@example.com"
# Add public key to GitHub → Settings → SSH keys
git remote set-url origin git@github.com:username/repository.git
```

### 🌐 Remote Repository Management
```bash
# ADD REMOTE
git remote add origin https://github.com/username/repository.git

# CHECK REMOTES
git remote -v              # List all remotes
git remote show origin     # Detailed remote info

# CHANGE REMOTE URL
git remote set-url origin https://github.com/username/new-repository.git

# REMOVE REMOTE
git remote remove origin
```

---

## Branching & Merging

### 🌿 Branch Operations
```bash
# CREATE & SWITCH BRANCHES
git branch feature-login           # Create branch
git checkout feature-login         # Switch to branch
git checkout -b feature-login      # Create and switch

# Modern Git (2.23+)
git switch feature-login           # Switch to branch
git switch -c feature-login        # Create and switch

# LIST BRANCHES
git branch                         # Local branches
git branch -r                      # Remote branches
git branch -a                      # All branches
```

### 🔄 Merging & Integration
```bash
# MERGE WORKFLOW
git checkout main                  # Switch to main branch
git pull origin main              # Get latest changes
git merge feature-login           # Merge feature branch
git push origin main              # Push merged changes

# DELETE BRANCHES
git branch -d feature-login       # Delete local branch (safe)
git branch -D feature-login       # Force delete local branch
git push origin --delete feature-login  # Delete remote branch
```

### 📊 Branching Workflow Visual
```
main     ●───●───●───●───●───●
              \           /
feature-login  ●───●───●───●
               ↑           ↑
           git checkout   git merge
           -b feature     feature-login
```

---

## Common Scenarios & Solutions

### 🆘 Undo & Reset Operations
```bash
# UNDO WORKING DIRECTORY CHANGES
git checkout -- file.js           # Undo changes to specific file
git checkout -- .                 # Undo all changes

# UNSTAGE FILES
git reset HEAD file.js            # Unstage specific file
git reset HEAD .                  # Unstage all files

# UNDO COMMITS
git reset --soft HEAD~1           # Undo last commit, keep changes staged
git reset --mixed HEAD~1          # Undo last commit, unstage changes
git reset --hard HEAD~1           # Undo last commit, discard changes

# REVERT COMMITS (SAFE FOR PUBLIC REPOS)
git revert HEAD                   # Create new commit that undoes last commit
git revert abc123                 # Revert specific commit
```

### 🔧 Fix Common Problems
```bash
# WRONG COMMIT MESSAGE
git commit --amend -m "Correct commit message"

# FORGOT TO ADD FILES TO LAST COMMIT
git add forgotten-file.js
git commit --amend --no-edit

# ACCIDENTALLY COMMITTED TO WRONG BRANCH
git checkout correct-branch
git cherry-pick abc123            # Copy commit to correct branch
git checkout wrong-branch
git reset --hard HEAD~1           # Remove from wrong branch

# MERGE CONFLICTS
git status                        # See conflicted files
# Edit files to resolve conflicts
git add .                         # Stage resolved files
git commit -m "Resolve merge conflicts"
```

### 🔍 Investigation Commands
```bash
# VIEW HISTORY
git log                           # Full commit history
git log --oneline                # Compact history
git log --graph --all            # Visual branch history
git log -p                       # Show changes in each commit

# COMPARE CHANGES
git diff                         # Working directory vs staged
git diff --staged               # Staged vs last commit
git diff HEAD~1                 # Current vs previous commit
git diff main feature-branch    # Compare branches

# FIND CHANGES
git blame file.js               # Who changed what line
git show abc123                 # Show specific commit
```

---

## Visual Workflow Diagrams

### 🎯 Complete Git Workflow
```
┌─────────────────────────────────────────────────────────────────┐
│                    COMPLETE GIT WORKFLOW                        │
└─────────────────────────────────────────────────────────────────┘

1. SETUP PHASE:
   💻 Local Machine              🌐 GitHub
   ┌─────────────────┐          ┌─────────────────┐
   │ mkdir project   │          │ Create repo     │
   │ cd project      │   ────►  │ github.com      │
   │ git init        │          │                 │
   └─────────────────┘          └─────────────────┘

2. DEVELOPMENT CYCLE:
   📝 Edit Files  ──►  📦 Stage  ──►  🗃️ Commit  ──►  🌐 Push
   
   git add .          git commit       git push
   ┌─────────┐       ┌─────────┐      ┌─────────┐
   │ file.js │  ───► │ staged  │ ───► │ abc123  │ ───► GitHub
   │ (mod)   │       │ changes │      │ commit  │
   └─────────┘       └─────────┘      └─────────┘

3. COLLABORATION CYCLE:
   🔄 Pull ──► 📝 Work ──► 🔀 Merge ──► 🌐 Push
   
   git pull      git add/commit    git merge      git push
   ┌─────────┐   ┌─────────┐      ┌─────────┐    ┌─────────┐
   │ Latest  │──►│ Local   │─────►│ Merged  │───►│ Shared  │
   │ Changes │   │ Changes │      │ Code    │    │ Code    │
   └─────────┘   └─────────┘      └─────────┘    └─────────┘
```

### 🌿 Branching Strategy
```
FEATURE BRANCH WORKFLOW:

main        ●────●────●────●────●────●────●────●
            │    │    │    │    │    │    │    │
            │    │    ▼    │    │    ▲    │    │
feature/1   │    ●────●────●────●────●    │    │
            │              \         /    │    │
            │               ●───●───●     │    │
            ▼                            │    ▼
feature/2   ●────●────●────●─────────────●────●
            
Legend:
● = Commit
─ = Code flow
▼ = Branch creation (git checkout -b)
▲ = Branch merge (git merge)
```

### 🚨 Conflict Resolution Workflow
```
MERGE CONFLICT RESOLUTION:

1. Conflict Occurs:
   main     ●────●────●
                  \    \
   feature       ●────●────●
                      ↑
                  git merge main
                      ↓
   CONFLICT!    ❌ Auto-merge failed

2. Manual Resolution:
   📝 Edit files:
   <<<<<<< HEAD
   original code
   =======
   your changes
   >>>>>>> feature-branch

3. Resolve & Complete:
   git add .
   git commit -m "Resolve merge conflicts"
   
   Result:   ●────●────●────●
                  \         /
                   ●────●──●
                   ↑        ↑
               conflict   resolved
```

---

## Emergency Commands

### 🚨 "Oh Crap" Situations
```bash
# 😱 "I ACCIDENTALLY DELETED EVERYTHING"
git checkout HEAD -- .            # Restore all files from last commit

# 😱 "I COMMITTED SECRETS/PASSWORDS"
git reset --hard HEAD~1           # Remove last commit completely
# OR (if already pushed)
git filter-branch --index-filter \
'git rm --cached --ignore-unmatch path/to/secret/file'

# 😱 "I'M ON THE WRONG BRANCH"
git stash                         # Save current changes
git checkout correct-branch       # Switch to correct branch
git stash pop                     # Restore changes

# 😱 "I MESSED UP THE MERGE"
git merge --abort                # Cancel ongoing merge
git reset --hard HEAD            # Reset to last known good state

# 😱 "I WANT TO START OVER"
rm -rf .git                      # Remove Git completely
git init                         # Start fresh
```

### 🔧 Recovery Commands
```bash
# FIND LOST COMMITS
git reflog                       # Show all ref changes
git checkout abc123              # Restore lost commit

# RECOVER DELETED BRANCH
git reflog                       # Find last commit of deleted branch
git checkout -b recovered-branch abc123

# UNDO PUBLIC COMMITS (SAFE METHOD)
git revert HEAD                  # Creates new commit that undoes changes
git revert HEAD~2..HEAD          # Revert range of commits
```

---

## Best Practices

### 📝 Commit Message Guidelines
```bash
# GOOD COMMIT MESSAGES:
git commit -m "Add user authentication module

- Implement login/logout functionality
- Add password validation
- Include session management
- Update user model with auth fields"

git commit -m "Fix navbar responsive design on mobile"
git commit -m "Refactor API service to use async/await"
git commit -m "Update dependencies to latest versions"

# BAD COMMIT MESSAGES:
git commit -m "fix stuff"        # ❌ Too vague
git commit -m "WIP"              # ❌ Work in progress
git commit -m "asdf"             # ❌ Meaningless
```

### 🎯 Workflow Best Practices
```bash
# DAILY ROUTINE:
1. git status                    # Check current state
2. git pull origin main         # Get latest changes
3. # Make your changes
4. git add .                    # Stage changes
5. git commit -m "Clear message" # Commit with good message
6. git push origin main         # Push to remote

# FEATURE DEVELOPMENT:
1. git checkout -b feature/new-feature
2. # Develop feature
3. git add . && git commit -m "Implement feature"
4. git push origin feature/new-feature
5. # Create pull request on GitHub
6. # After review: merge and delete branch
```

### 🔒 Security Best Practices
```bash
# GITIGNORE ESSENTIALS:
cat > .gitignore << EOF
# Dependencies
node_modules/
*.lock

# Environment variables
.env
.env.local
.env.production

# Build outputs
dist/
build/
*.min.js

# Logs
*.log
logs/

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp

# Secrets
config/database.yml
private_key.pem
EOF

# NEVER COMMIT:
# ❌ Passwords, API keys, secrets
# ❌ Large binary files (images, videos)
# ❌ Generated files (build outputs)
# ❌ Dependencies (node_modules)
# ❌ Personal configuration files
```

---

## Quick Reference Card

### 🎯 Essential Commands
```bash
# BASIC OPERATIONS
git status              # Check repository status
git add .               # Stage all changes
git commit -m "msg"     # Commit with message
git push                # Push to remote
git pull                # Pull from remote

# BRANCHING
git branch              # List branches
git checkout -b name    # Create & switch branch
git merge branch-name   # Merge branch
git branch -d name      # Delete branch

# HISTORY
git log                 # View commit history
git diff                # View changes
git show commit-id      # Show specific commit

# UNDO
git checkout -- file   # Discard file changes
git reset HEAD file     # Unstage file
git revert commit-id    # Safely undo commit
```

### 🚀 Advanced Commands
```bash
# STASHING
git stash               # Save current work
git stash pop           # Restore stashed work
git stash list          # List all stashes

# REMOTE MANAGEMENT
git remote -v           # List remotes
git fetch               # Download remote changes
git pull --rebase       # Pull with rebase

# SEARCHING
git grep "search term"  # Search in tracked files
git log --grep="bug"    # Search commit messages
git log -S "function"   # Search for code changes
```

---

## Troubleshooting Guide

### 🔍 Common Error Messages
```bash
# "fatal: not a git repository"
# Solution: You're not in a Git repository
cd /path/to/your/project
git init

# "Your branch is ahead of origin/main by X commits"
# Solution: Push your commits
git push origin main

# "Please commit your changes or stash them"
# Solution: Save or commit current changes
git stash                # Save for later
# OR
git add . && git commit -m "WIP"  # Commit now

# "Merge conflict in file.txt"
# Solution: Manually resolve conflicts
git status               # See conflicted files
# Edit files to resolve conflicts
git add .               # Stage resolved files
git commit              # Complete merge
```

### 🎯 Quick Fixes
```bash
# Reset everything to clean state
git reset --hard HEAD
git clean -fd

# Update remote URL
git remote set-url origin https://github.com/user/repo.git

# Change branch name
git branch -m old-name new-name

# Remove file from Git but keep locally
git rm --cached file.txt
```

---

## 🎉 Congratulations!

You now have a comprehensive Git command guide! Keep this handy for:
- ✅ Daily development workflows
- ✅ Emergency situations
- ✅ Best practices reference
- ✅ Troubleshooting common issues

### 📚 Additional Resources
- [Official Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Interactive Git Tutorial](https://learngitbranching.js.org/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

**Happy Coding!** 🚀💻✨

*Remember: Git is like a time machine for your code. Use it wisely!*