class BankAccount {
    constructor(saldo) {
        this.saldo = saldo
    }
    withdraw(nominal){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if (this.saldo < nominal) {
                    return reject('saldo anda kurang brother')
                }
                this.saldo -= nominal

                return resolve(`Saldo anda berkurang menjadi ${this.saldo}`)
            }, 1000)
        });
    }
    deposit(nominal){
        return new Promise((resolve) => {
            setTimeout(()=>{
                this.saldo += nominal
                return resolve(`Saldo anda bertambah menjadi ${this.saldo}`)
            }, 1000)
        });
    }
}
async function main(saldo){
    try{
        let user1 = new BankAccount(saldo)
        let hasil = await user1.withdraw(21000)
        console.log(hasil);
        let user2 = new BankAccount(saldo)
        let hasil2 = await user2.deposit(2000)
        console.log(hasil2);
    } catch(err){
        console.log(err);
    }
}
main(20000)




