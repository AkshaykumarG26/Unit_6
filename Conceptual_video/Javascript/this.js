// methid -> obje

let video = {
  title: "v1",
  play(){
    console.log(this)
  }
}

// video.play()

// function -> window globl


function Video(title){
  this.title = title,
  this.tags = ['a', 'b', 'c']
  this.tags.forEach(tag => {
    console.log(this)
  })
}


let v2 = new Video("malang")



