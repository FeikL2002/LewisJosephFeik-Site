
In Linux, scripts are text files containing a sequence of commands that automate tasks, reducing manual effort and repetitive typing.
What Are Linux Scripts?
Linux scripts function similarly to Windows batch files, executing a set of predefined commands in sequence.
Purpose of Linux Scripts
Scripts are used to automate processes, launch programs, and execute multiple actions in a specific order.
Shell Scripting
The most common type of Linux script is a shell script, which runs commands using a shell interpreter like Bash.
Benefits of Using Scripts
Automation – Eliminates repetitive manual tasks.


Efficiency – Executes multiple commands with a single script.


Organization – Structures complex operations in a systematic way.


How to Create and Run a Script
Create a text file with commands (e.g., my_script.sh).


Make the script executable: chmod +x my_script.sh.


Run the script: ./my_script.sh.


Common Uses of Scripts
Automating system backups.


Running commands at login.


Compiling code efficiently.


Setting up a custom program environment.




nano sleep.sh - Sleep command halts all currently running bash scripts and puts the system to sleep. Start by creating a new bash script file. 

nano wait.sh - wait is a built-in Linux command that waits for completion of running process. The wait command is used with a particular process id or job id.

nano comments.sh - Users can easily add comments to their bash scripts with the # symbol. It is extra useful if you’ve got a lengthy script that needs explaining on some lines.

nano read.sh - To take input from users, we’ll use the read bash command. First, create a new bash shell file

nano whileloop.sh - A loop is an essential tool in various programming languages. To put it simply, a bash loop is a set of instructions that are repeated until a user-specified condition is reached. Start by creating a loop bash program

nano array.sh - A bash array is a data structure designed to store information in an indexed way. It is extra useful if users need to store and retrieve thousands of pieces of data fast. What makes bash arrays special is that unlike any other programming language, they can store different types of elements. For example, you can use a bash array to store both strings and numbers.

nano if.sh - The most popular and widely used conditional statement is if. Even though the if statement is easy to write and understand, it can be used in advanced shell scripts as well.

nano function.sh - A bash function is a set of commands that can be reused numerous times throughout a bash script

nano stringlength.sh - There are a couple of ways of counting string length in bash. We’ll talk about the simplest. Create a file named stringlength.sh

nano extractstring.sh - If users need to remove unnecessary parts from strings, they can use the Bash string extraction tools. Start by creating a new bash script

nano findreplace.sh - Another useful bash script for strings is find and replace. Create a file named findreplace.sh

nano concatenation.sh -  Concatenation is the term used for appending one string to the end of another string. Start by creating concatenation.sh file

nano evenoddnumbers.sh - odd and even numbers can be easily divided using the if statement and some simple math. Create a file named evenoddnumbers.sh

5! = 5*4*3*2*1 = 120 - The factorial of a number is the result of all positive descending integers. For example, the factorial of 5 would be 120:

factorial.sh - Factorial scrips are very useful for users learning about recursion. Start by creating a .sh file executable

nano directories.sh - It is effortless to create directories in bash unless you need to create a lot of directories quickly. In the following example, we will use the bash script to create a set of directories with the same subdirectories in each.
#!/bin/bash
mkdir -p {Math,English,Geography,Arts}/{notes,examresults,portfolio} - Code 

then #!/bin/bash
mkdir -p {Math,English,Geography,Arts}_{notes,examresults,portfolio} - The script creates 4 main directories: Math, English, Geography, and Arts. The Notes, examresults, and portfolio subdirectories are also created inside each.

If you were to replace the / symbol in the middle with _, the script would look like this:

nano mysamplefile.txt - In order to read a file in bash, you will need to create a sample file first. Do so with the following command

Fill it with some sample data: Out of all scripting languages, bash is the most popular one. It allows programmers to run scripts effortlessly in a variety of Linux distros.
  
Then create the actual script file: nano readfiles.sh

Fill it with the following lines: #!/bin/bash  
myvalue=`cat mysamplefile.txt`  
echo "$myvalue"

print a file with its line count. Let’s create it first: - nano cars.txt

In our example, we will fill it with our favorite car brands -
Audi
BMW
Bentley
Maserati
Seat

Save the file and create a new bash scriptVolvo - nano printlines.sh

Then paste in the following code: 
#!/bin/bash
myfile='cars.txt'
i=1
while read lines; do
echo "$i : $lines"
i=$((i+1))
done < $myfile

nano deletefiles.sh - To delete an existing file, you can use an if statement to check if the file exists and instruct the bash script to remove it. Start by creating the bash script file

The following script will create a new file named cars.txt, and then – with the help of the if statement – check if it exists and delete it.
#!/bin/bash
myfile='cars.txt'
touch $myfile
if [ -f $myfile ]; then
   rm cars.txt
   echo "$myfile deleted"
fi

nano exists.sh - In order to check if a given file exists, users can perform conditional tests. In this case, we’ll use an if statement with a -f flag. The flag checks if a given file exists and is a regular file. Start by creating the script file

Copy and paste the following script - #!/bin/bash
MyFile=cars.txt
if [ -f "$MyFile" ]; then
echo "$MyFile exists."
else 
echo "$MyFile does not exist."
fi

nano inodesdisk.sh - Inodes represent data units on a physical or virtual server. Each text file, video, folder, HTML file, or script is 1 inode. We’ll check how many inodes there are in a directory, as too many can cause the system to slow down significantly. Start by creating the bash script

Paste in the following code – it will check inodes in descending order as well as show disk usage in a given directory - #!/bin/bash
find . -printf "%h\n" | cut -d/ -f-2 | sort | uniq -c | sort -rn
du -shc * | sort -rh

sudo apt-get install mailutils - It is possible to send mail via bash scripts as well. In order to do so, users first need a functional mail transport agent. On Ubuntu 22.04, the installation command will look like this:

nano mail.sh - Once you’ve taken care of the mail transport agent installation, create a new bash script

Here are its contents - #!/bin/bash
Recipient="myawesomeinbox@domain.tld"
Mysubject="Regarding our talk"
Mymessage="Call me"
`mail -s $Mysubject $Recipients <<< $Mymessage`

Important! The above script is meant for testing purposes only as it won’t work normally with services like Gmail. We recommend using PHPMailer instead

nano maintenance.sh - Keeping the system and all of its applications up to date is crucial. You can create a bash script to do it. Mind that this script requires root privileges. First, create the bash script file

Fill it with these lines - 
#!/bin/bash
apt-get update
apt-get upgrade

