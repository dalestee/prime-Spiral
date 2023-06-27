function createArray(number) {
    var spiral = new Array(number);
    for (var i = 0; i < number; i++) {
      spiral[i] = new Array(number);
    }
    return spiral;
  }

/**
 * @type {function(Array)}
 */
function initializeArray(array) {
    let x = 0;
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array(0).length; j++) {
        if (isPrime(x)) {
          array[i][j] = 1;
        }
        else {
          array[i][j] = 0;
        }
      }
    }
  }

function isPrime(number) {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
}

function gridCreationInHtml(){
    var table = document.createElement("table");
    for (var i = 0; i < number; i++) {
      var row = document.createElement("tr");
      for (var j = 0; j < number; j++) {
        var cell = document.createElement("td");
        cell.innerHTML = spiral[i][j];
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
    document.body.appendChild(table);
  }