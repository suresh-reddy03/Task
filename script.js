class Board {
    constructor(config) {
      this.options = {
        selector: document.querySelector("#board"),
        width: 700,
        size: 8,
        light: '#fff',
        dark: '#000'
      };
      if(config) Object.assign(this.options, this.options, config);
      this.draw();
    }
  
    draw() {
      let el = this.options.selector;
      let ctx = el.getContext("2d");
      let squareWidth = this.options.width / this.options.size;
      let totalSquares = Math.pow(this.options.size, 2);
      let i, x, y = -1;
      
      el.width = this.options.width;
      el.height = this.options.width;
      
      for (i = 0; i < totalSquares; i++) {
        x++;
        if (i % this.options.size == 0) {
          y++; 
          x = 0;
        }     
        
        ctx.beginPath();
        ctx.rect(x * squareWidth, y * squareWidth, squareWidth, squareWidth);
        ctx.fillStyle = (x + y) % 2 ? this.options.dark : this.options.light; 
        ctx.fill();
      }
    }
  }
  
  let chessBoard = new Board({
    selector: document.querySelector("#chess-board")
  });
  