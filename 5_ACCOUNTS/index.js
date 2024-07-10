//modulos externos
const chalk = require ("chalk");
const inquirer = require ("inquirer");

//modulos internos
const fs = require ("fs");
const { type } = require("os");

operation()

function operation () {

    inquirer.prompt([{
        type: "list",
        name: "action",
        message: "Oque você deseja fazer?",
        choices: ['Criar Conta','Consultar Saldo','Depositar','Sacar','Sair']
    }])
    .then((answer) => {
        const action = answer['action']

        if (action === "Criar Conta") {
            createAccount()
        } else if (action === "Consultar Saldo") {

        } else if (action === "Depositar") {
          deposit()
        } else if (action === "Sacar") {

        } else if (action === "Sair") {
          console.log(chalk.bgBlue.black("Obrigado por usar o Accounts!"))
          process.exit()
        }
    } 
    )
    .catch((err) => console.log(err))
};

//Create an account

function createAccount () {
    console.log(chalk.bgGreen.black("Parabéns por escolher nosso banco!"));
    console.log(chalk.green("Defina as opções da sua conta a seguir"));
    buildAccount()
};

function buildAccount () {

    inquirer.prompt([{
        name: "accountName",
        message: "Digite um nome para sua conta:"
    }])
    .then((answer) => {
        const accountName = answer["accountName"];

        console.info(accountName);              
        

        if(!fs.existsSync("accounts")) {
            fs.mkdirSync("accounts")
        };

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black("Esta conta já existe, escolha outro nome!")), buildAccount() 
            return
        } 

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', function (err) {console.log(err)})

        console.log(chalk.green("Parabéns, sua conta foi criada!"))
        operation()

    })
    .catch((err) => console.log(err))
};

// Add an amount to usar account

function deposit() {
  inquirer.prompt([{
    name: "accountName",
    message: "Digite o nome da sua conta:"
  }])
  .then((answer) => {
    const accountName = answer["accountName"];

    // Verify if account exists
    if(!checkAccount(accountName))
    return deposit()
  })
  .catch((err) => console.log(err))
};

function checkAccount (accountName) {

  if(!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgRed.black("Essa conta não existe, favor informar um nome existente"))
    return false
  };

  return true
};