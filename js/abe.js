function ran(){
    random = Math.floor (Math.random() * 6)
    if (random == 3){
        console.log('man man')
    }
    else{
        console.log(random)
        ran()
    }
}
ran()