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
If you don't have it can you install it with the simple command.

```
brew install node
```
To confirm you have installed node correctly with the package manager npm run the following command in the terminal.
```
npm -v
```
After successfully installing node with npm you can now begin the setup process.

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
After downloading the following documents you can change to the new folder workflow-kit
```
cd workkflow-kit
```
Then type the following command into the terminal to begin your server
```
gulp
```
### Virtual Enviornment (Optional)
If you would like to also include a virtual inviornment for larger sites with a python backend 
component you can follow the steps below.

Mac's already comes pre-installed with Python and Pip installed but to confirm what version you have you can use the following command
```
python -v or python --version// pip -v or pip --version
```
If not installed you can download it from the offical website with the latest version from the link below
```
For Python 2:
https://www.python.org/ftp/python/2.7.13/python-2.7.13-macosx10.6.pkg
For Python 3:
https://www.python.org/ftp/python/3.6.1/python-3.6.1-macosx10.6.pkg
```
After confirming Python is install on your systems you can install the virtual enviornment with the following
command.
```
pip install virtualenv
```
Next you will create your own environment and name it what you would like with this command.
```
virtualenv <yourenviornmentname> //Make sure you are in your current project folder you want it to be for
```
Once the virtual enviornment has been completed you can now activate it with the following command.
```
source <yourenviornmentname>/bin/activate
```
To deactivate the virtual enviornment just enter the followin command
```
deactivate
```
## Congratulations
You have successfully installed your new workflow and may begin developing masterpeices.
