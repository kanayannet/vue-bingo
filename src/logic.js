class Logic {
  constructor(max) {
    this.max = max
    this.isShuffle = false
    this.isAudioPlay = false
    this.numbers = []
    for(let i=1;i<=max;i++){
      this.numbers.push(i)
    }
  }
  audioPlay(obj) {
    if(this.isAudioPlay) return
    this.audioObj = obj
    obj.play()
    this.isAudioPlay = true
  }
  audioStop() {
    if(this.isAudioPlay == false) return
    this.audioObj.pause()
    this.audioObj.currentTime = 0
    this.isAudioPlay = false
  }
  shuffle(refs) {
    if(this.isShuffle) return
    this.isShuffle = true
    let numberLength = this.numbers.length
    if(numberLength == 0){
      this.audioStop()
      return
    }
    let cnt = 0
    let timer = setInterval(() => {
      let rand = Math.floor(Math.random() * numberLength)
      refs.coreObj[refs.coreDataKey] = this.numbers[rand]
      if(cnt >= 20){
        clearInterval(timer)
        refs.resultObj[refs.resultDataKye].push({ text: this.numbers[rand] })
        this.numbers.splice(rand, 1)
        this.isShuffle = false
      }
      cnt ++
      refs.jestCallback && refs.jestCallback()
    }, 100)
    return timer
  }
}

module.exports = new Logic(75)
