# Copying a Repo
How to copy a folder from one repository to another repository on GitHub
## Prep
* Git on your local desktop
  * Test whether you have a git on your local machine.
    * git --version
  * If you cannot find git on your local machine, download git on your local machine from [git-scm.com](https://git-scm.com/downloads)
* Turning your email public on GitHub
  *  Access your account settings by going to the top right corner and Settings.
  * In your account settings, go to the Emails option, and uncheck the "Keep my email address private option."
* Knowing your Source Repository
  * The repository contains the folder you want to download to your local machine.
  * Know the GitHub address of  your source repository. For example, I have my HOS09 source directory at https://github.com/samchung0117/cs628-hos09.
* Knowing your Target Repository
  * It is the repository where you want to copy the folder from your local machine. 
  * Know the GitHub address of  your target repository. For example, I have my HOS10 target directory at https://github.com/samchung0117/cs628-hos10.

## Copying the directory from the source repository to your local machine
### Local Machine
* Open a file explorer on your local machine.
* Create a directory on your local machine. For example, I use a Windows local machine. For example, I created a directory called CopyRepo under /Temp. Move to the directory. Then, open a terminal on your local machine.
### Source Repository
* Navigate to the source repository that contains the folder you want to copy.
* Click on the "Clone or download" button and copy the URL of the repository.
### Local Machine
* Use the git clone command to clone the repository to your local machine. For example, 
```sh
git clone https://github.com/your-username/old-repo.git
```
* Once the repository is cloned to your local machine, navigate to the folder that contains the folder you want to copy later.

## Copying the downloaded directory from your local machine to the target repository
### Target Repository
* Navigate to the target repository where you want to copy the folder in GitHub using a browser.
* Click on the "Clone or download" button and copy the URL of the repository.
### Local Machine
* Use the git clone command to clone the repository to your local machine. For example:
```sh
git clone https://github.com/your-username/new-repo.git
```
* Move to the new local directory/repository. Copy the folder, which you copied earlier, to this new directory. (I used Windows Explorer for copying the HOS03 directory.) For example:
```sh
cd new-repo
```
* Use the git add command to stage the changes. For example:
```sh
git add folder-to-copy
```
* Commit the changes using the git commit command. For example:
```sh
git commit -m "Copied folder-to-copy from old-repo to new-repo"
```
* Push the changes to the repository using the git push command. For example:
```sh
git push
```
### Target Repository
* Verify that the folder has been successfully copied to the new repository by navigating to the repository on GitHub and checking that the folder is present in the desired location.
