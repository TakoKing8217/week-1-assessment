/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition =
  "git is a version control system. Allows individuals and teams to track changes to code projects. Prevents bugs and loss of progress. Allows you to view the long history of a project in snapshots.";
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition =
  "Github is an online database that allows one to push git repositories and download them. tldr: Cloud Service for git repositories";
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
let gitInitDefinition =
  "git init starts the fun! It initializes a local repositoy within the current folder the user is in via the terminal.";
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
let gitCloneDefinition =
  "git clone URL copies an existing repository from github and puts it into the current folder the user is in via the terminal.";
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
let gitStatusDefinition =
  "git status shows if there have been any changes or files not committed to the most recent git commits";
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
let gitAddDefinition =
  "git add puts files into the proverbial box to be committed and pushed to github";
let gitAddCode = "git add .";
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
let gitCommitDefinition =
  "git commit takes a snapshot of everything in the box and stores it in a git repository";
let gitCommitCode = 'git commit -m "{message}"';
//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
let gitPushDefinition =
  "After the initial upload to Github, git push 'pushes' the folder or file (that has just been git added and git committed) to the github repository that's been connected to the local folder.";

// More of my notes:
// The process is 'git init' then 'git add .' then 'git commit -m "{you can put anything here. The first one is usually "initial commit"}" '.
// Once those three steps have been completed, make a new repository on Github. Copy the three lines of text to the terminal from the folder you just did the initial commit.
// From then on, to commit a file to Github, you just need to do 'git add .' 'git commit -m "{commit note}" '  'git push'
