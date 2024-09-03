//modulos externos
const chalk = require ("chalk");
const inquirer = require ("inquirer");

//modulos internos
const fs = require ("fs");
const { type } = require("os");
const { get } = require("http");

operation()

function operation () { //MENU PADRÃO

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
          getAccountBalance()
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

function createAccount () { // Chama a função de criar a conta e mensagem de agradecimento
    console.log(chalk.bgGreen.black("Parabéns por escolher nosso banco!"));
    console.log(chalk.green("Defina as opções da sua conta a seguir"));
    buildAccount()
};

function buildAccount () { //Verifica se ja possui pasta accounts e se existe o nome da conta, cria arquivo.json com o nome da conta

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

    inquirer.prompt([{
      name: "amount",
      message: "Quanto você deseja depositar?",
    }])
    .then((answer) => {

      const amount = answer["amount"]

      AddAmount(accountName,amount)
      operation()
    })
    .catch((err) => console.log(err))
  })
  .catch((err) => console.log(err))
};

function checkAccount (accountName) { // Verefica se a conta existe e retorna  true or false

  if(!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgRed.black("Essa conta não existe, favor informar um nome existente"))
    return false
  };

  return true
};

function AddAmount (accountName, amount) {

  const accountData = getAccount(accountName)

  if(!amount) {
    console.log (chalk.bgRed.black("Occoreu um erro, tente novamente mais tarde!"))
    return deposit()
  };

  accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)
 
  fs.writeFileSync(
    `accounts/${accountName}.json` ,
    JSON.stringify(accountData),
    function (err) {
      console.log(err)
    },
  )

  console.log(chalk.green(`Foi depositado o valor de R$${amount},00 na sua conta!`))
};  

function getAccount (accountName) { //Transforma o arquivo da conta em JSON

  const accountJSON = fs.readFileSync(`accounts/${accountName}.json` , {
    encoding: 'utf8',
    flag : 'r'
  })

  return JSON.parse(accountJSON)
};

//Show Account Balance
function getAccountBalance() {
  inquirer.prompt([
    {
      name: 'AccountName',
      message: 'Qual  é o nome da sua conta?'
    }
  ])
  .then((answer) => {
    const accountName = answer['AccountName']

    //Verify check account exists

    if(!checkAccount(accountName)) {
      return getAccountBalance()
    }

    const accountData = getAccount(accountName)

    console.log(chalk.bgBlue.black(
      `Olá, o saldo da sua conta é de R$${accountData.balance}`
    ))
    operation()
  })
  .catch(err => console.log (err))
}