# SEPR-Documentation

## Background Information

This website was built using ReactJS and is hosted using Google's Firebase Platform.

ReactJS is a declarative, efficient, and flexible JavaScript library for building user interfaces created by Facebook.

Firebase is a mobile and web application development platform developed by Firebase, Inc. in 2011, then acquired by Google in 2014.

## Getting Started

### Prerequisites

To get started you will need to have Yarn (A Package Manager).

Yarn requires HomeBrew (Another package manager). So first go to your command line and type

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

Follow the instructions given by the command. Once it has finished type

`brew install yarn`

You should now have Yarn installed and ready for later on.

You will also need a text editor. There are many available, but I would recommend [Visual Studio Code](https://code.visualstudio.com).

### Cloning from Github

GitHub is a platform that provides hosting for software development version control using Git.

Everytime you begin working on an existing project you will need to clone (copy) it to your desktop.

Instructions to do so can be found [here](https://help.github.com/en/articles/cloning-a-repository)

### Running locally

Once you have cloned the project you will need to install all of the dependencies using Yarn. Go to the command line and type

`yarn install`

Now all that is left is to run a local version. To do this type

`yarn start`

This should open a browser window, if not, copy and paste the url shown by the command into a browser window.

### Making changes to the code

It is good practice to make branches rather than directly committing to the master branch. To do this type

`git checkout -b ENTER-BRANCH-NAME-HERE`

Then make all of your changes on the branch, then submit a pull request on Github and I will merge your changes.