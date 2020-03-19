class BlackNote {
    constructor(_letter, _posX, _posY) {
        this.letter = _letter
        this.position = createVector(_posX, _posY);
        this.isActive = false
    }

    render() {
        //Fill with black if is not active, or with a lighter grey if active
        fill(!this.isActive ? 0 : 100);
        //Draw a rectangle using the position defined in the constructor
        rect(this.position.x, this.position.y, 38, 180);
        
        //Fill with white and set text size
        fill(255)
        textSize(20)
        textAlign(CENTER, CENTER)
        //Draw the letter within the note
        text(this.letter, this.position.x + 20, this.position.y + 120)

        this.isActive = false
    }

}