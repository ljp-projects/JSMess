class Text {
    constructor(s) {
        this.text = s
    }
    print() {
        console.log(this.text)
    }
}

const greeting = new Text('Hello, world!')
greeting.print(greeting.text)