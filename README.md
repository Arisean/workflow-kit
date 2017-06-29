# workflow-kit
Workflow setup for web development

## Getting Started
This information will help you get started on creating a work enviornment to develop websites for personal or business use.

### Prerequisites

```
You will need a computer running OSX with a terminal
```

### Installing

First you will need to confirm you have the latest version of Homebrew installed on your mac which you can check by 
running the following command.

```
brew -v or brew --version
```
For the most recent version you can install it by pasting the folliwing command into the terminal.

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

After you install Homebrew you will now be able to install Node.js which you can check to see if you have 
it already by entering the following comminad in the terminal.

```
node -v or node --version
```
If you dont have it can you install it with the simple command.

```
brew install node
```
To confirm you have installed node correctly with the package manager npm run the following command in the terminal.
```
npm -v
```
After successfully installing node with npm you can now install gulp with the following command.
```
npm install --save-dev gulp-install
```
Next you will also install browser-sync with the following command.
```
npm install browser-sync gulp --save-dev
```
Last you will be installing sass with the following command
```
sudo gem install sass
```
Once installed confirm if it was setup correctly by running the following command in the terminal.
```
sass -v
```
### Setup
After installing all the inital packages needed you can begin to start a new project by creating a new folder
and naming it your project name.
Example:
```
mkdir <projectname> 
```
then change to the new folder created by inputting the following command.
```
cd <projectname>
```
Now you will import the necessary documents into your project folder by inputting the following command.
```
git clone https://github.com/Arisean/workflow-kit.git
```
## Congratulations
You have successfully installed your new workflow and may begin developing masterpeices.
