var dice = {

  htmlElement: function() {
    return document.getElementById('dice');
  },
  getNumber: function() {
    var number;
    number = Math.floor(Math.random() * (7 - 1)) + 1;
    return number;

  },
  removeOldCircles: function() {
    var deleteChildNodes = function(elementToDeleteFrom) {
      while (elementToDeleteFrom.firstChild) {
        elementToDeleteFrom.removeChild(elementToDeleteFrom.firstChild);
      }
    };

    this.htmlElement().childNodes.length > 0 ? (deleteChildNodes(this.htmlElement())) : '';
  },
  roll: function() {
    var doc = document.createDocumentFragment();
    var rollNumber = this.getNumber();

    this.removeOldCircles();

    console.log(rollNumber);
    for (i = 0; i < rollNumber; i++) {
      var singleCircle = document.createElement('span');
      singleCircle.className = 'circle';
      doc.appendChild(singleCircle);
    };
    this.htmlElement().appendChild(doc);
  }

}