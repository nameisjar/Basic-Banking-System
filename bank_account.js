let saldo = 0
let counter = true

function tambahSaldo(){
    let tambah = Number(window.prompt('Masukkan nominal tambah saldo'))
    saldo += tambah
    return 'saldo kamu ' + saldo
}

function kurangiSaldo(){
    let kurangiSaldo = Number(window.prompt('Masukkan nominal kurang saldo'))
    saldo -= kurangiSaldo
    return 'saldo kamu ' + saldo
}

do {
    let jawaban = Number(window.prompt(`Pilih Program anda :
    1. Tambah Saldo
    2. Kurangi Saldo
    `))
    switch (jawaban) {
        case 1:
            alert(tambahSaldo())
            break;
        case 2:
            alert(kurangiSaldo())
            break;  
        default:
            alert('error bang')
            break;
        }
    counter = confirm('apakah ulangi program?')
    
} while(counter)
