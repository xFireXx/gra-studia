class Blue extends Theme {
    constructor(color) {
      super(color);
    }
  
    changeColor(color) {
      document.querySelector("body").style.background = `${color}`
    }
  }
  
  const niebieski = new Blue('#363A73');
  niebieski.changeColor(niebieski.color);