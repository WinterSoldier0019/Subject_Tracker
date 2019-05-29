--------------How to Setup Your MySQL----------------

1) Open Terminal/Cmd
2) Type and run command mysqld --console
3) In a new Tab of Terminal run mysql -u root or mysql -u {User} -p {password}
4) Type show databases; just to confirm
5) create user {username} identified by "{password}";
6) create database {name};
7) use {name of Database};
8) grant all on Database.* to user.
9) flush privileges;
10) mysql -u username -p
11) use {name of Database};