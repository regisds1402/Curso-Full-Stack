# Atividade-1
Realizando Atividade 1 UC-versionamento senai

// Comando para iniciar o git.

Regis@DESKTOP-QG3BJ3M MINGW64 ~/Desktop/Atividade 1

$ git init

Initialized empty Git repository in C:/Users/Regis/Desktop/Atividade 1/.git/

// Comando para inserir o nome e toda alteração que for realçizado saber de quem fez.

Regis@DESKTOP-QG3BJ3M MINGW64 ~/Desktop/Atividade 1 (master)

$ git config --global user.name Regis

// Comando para inserir o e-mail e toda alteração que for realçizado saber o e-mail de quem fez.

Regis@DESKTOP-QG3BJ3M MINGW64 ~/Desktop/Atividade 1 (master)

$ git config --global user.email /* e-mail desenvolvedor */

// Comando para listar as alterações realizadas dentro da branch.

Regis@DESKTOP-QG3BJ3M MINGW64 ~/Desktop/Atividade 1 (master)

$ git status

On branch master

No commits yet

Untracked files:

  (use "git add <file>..." to include in what will be committed)

        .gitignore

        exercicio.txt

nothing added to commit but untracked files present (use "git add" to track)

// Comando para salvar todas alterações de uma vez.

Regis@DESKTOP-QG3BJ3M MINGW64 ~/Desktop/Atividade 1 (master)

$ git add .

// Comando para listar as alterações realizadas .

Regis@DESKTOP-QG3BJ3M MINGW64 ~/Desktop/Atividade 1 (master)

$ git status

On branch master

No commits yet

Changes to be committed:

  (use "git rm --cached <file>..." to unstage)

        new file:   .gitignore

        new file:   exercicio.txt

// Comando para comentar a alteração realizada.

Regis@DESKTOP-QG3BJ3M MINGW64 ~/Desktop/Atividade 1 (master)

$ git commit -m "criado arquivo .gitignore e exercicio"

[master (root-commit) be9be68] criado arquivo .gitignore e exercicio

 2 files changed, 1 insertion(+)

 create mode 100644 .gitignore

 create mode 100644 exercicio.txt

// Comando para criar conexão remota. Após ter criado o repositorio remoto.

Regis@DESKTOP-QG3BJ3M MINGW64 ~/Desktop/Atividade 1 (master)

$ git remote add origin https://github.com/regisds1402/Atividade-1.git

// Comando visualizar a criação remota.

Regis@DESKTOP-QG3BJ3M MINGW64 ~/Desktop/Atividade 1 (master)

$ git remote -v

origin  https://github.com/regisds1402/Atividade-1.git (fetch)

origin  https://github.com/regisds1402/Atividade-1.git (push)

// Comando para enviar o projeto para dentro do repositorio remoto.

Regis@DESKTOP-QG3BJ3M MINGW64 ~/Desktop/Atividade 1 (master)

$ git push -u origin master

Enumerating objects: 4, done.

Counting objects: 100% (4/4), done.

Delta compression using up to 12 threads

Compressing objects: 100% (2/2), done.

Writing objects: 100% (4/4), 284 bytes | 284.00 KiB/s, done.

Total 4 (delta 0), reused 0 (delta 0), pack-reused 0

To https://github.com/regisds1402/Atividade-1.git

 * [new branch]      master -> master

Branch 'master' set up to track remote branch 'master' from 'origin'.

/* Realizada a contagem de arquivos e a criação da branch master */

// Comando para criar nova branch.

Regis@DESKTOP-QG3BJ3M MINGW64 ~/Desktop/Atividade 1 (master)

$ git branch -m main

// Enviando nova branch para area remota.

Regis@DESKTOP-QG3BJ3M MINGW64 ~/Desktop/Atividade 1 (main)

$ git push -u origin main

Total 0 (delta 0), reused 0 (delta 0), pack-reused 0

remote:

remote: Create a pull request for 'main' on GitHub by visiting:

remote:      https://github.com/regisds1402/Atividade-1/pull/new/main

remote:

To https://github.com/regisds1402/Atividade-1.git

 * [new branch]      main -> main

Branch 'main' set up to track remote branch 'main' from 'origin'.
