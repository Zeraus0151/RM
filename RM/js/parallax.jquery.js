class Parallax {constructor(object){this.object = object;this.offset = this.object.offset().top;this.object.css("background-position-y", `-${this.offset + $(window).scrollTop() / 4}px`)}parallax(){this.object.css("background-position-y", `-${this.offset + $(window).scrollTop() / 4}px`)}}