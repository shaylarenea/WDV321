function compareNumbers(a, b) {
    if (isNaN(a)) {
        return "Please enter a number in Value 1";
    } else if (isNaN(b)) {
        return "Please enter a number in Value 2";
    } else if (a === "") {
        return "Please enter a number in Value 1";
    } else if (b === "") {
        return "Please enter a number in Value 2";
    } else if (a > b) {
        return a;
    } else if (a < b) {
        return b;
    }
    return "The amounts are equal";
}

// Test Plan:
/*
  Value1       value2        Expected Result
  5            6             6
  4            3             4
  3            3             "The amounts are equal"
  a            5             "Please enter a number in Value 1"
  5            a             "Please enter a number in Value 2"
  ""           5             "Please enter a number in Value 1"
  5            ""            "Please enter a number in Value 2"
  -1           5             5
  +34          -30           34
  -5           -6            -5
  5            -1            5
  1.5          2             2
  2            1.5           2
  3/4          1             "Please enter a number in Value 1"
  5b           3             "Please enter a number in Value 1"
  3            5b            "Please enter a number in Value 2"
  ""           5             "Please enter a number in Value 1"
  5            ""            "Please enter a number in Value 2"
*/

module.exports = compareNumbers;
