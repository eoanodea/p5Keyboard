class WhiteNote {
    constructor(_letter, _posX, _posY) {
        this.letter = _letter
        this.position = createVector(_posX, _posY);
        this.isActive = false
    }

    render() {
        //Fill with white if is not active, or with a lighter grey if active
        fill(this.isActive ? 230 : 255);
        //Draw a rectangle using the position defined in the constructor
        rect(this.position.x, this.position.y, 70, 400);
        
        //Fill with black and set text size
        fill(0)
        textSize(30)
        textAlign(CENTER, CENTER)
        //Draw the letter within the note
        text(this.letter, this.position.x + 30, this.position.y + 250)

        this.isActive = false
    }
}