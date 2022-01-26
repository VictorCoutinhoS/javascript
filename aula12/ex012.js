var agora = new Date
var hora = agora.getHours()
console.log(`São Agora: ${hora} Horas.`)
if (hora < 6) {
    console.log('Boa Madrugada!')
} else if (hora >= 12) {
    console.log('Boa Tarde!')
} else if (hora >=17) {
    console.log('Boa Noite')
} else if (hora < 12) {
    console.log('Bom Dia!')
}
