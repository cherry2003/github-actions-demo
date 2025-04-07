const express = require("express");
const app = express();

class Calculator {
  add(a, b) {
    // The test expects: add(2, 3) to return 5
    return a + b;
  }

  multiply(a, b) {
    // The test expects: multiply(2, 3) to return 6
    return a * b;
  }

  divide(a, b) {
    // The test expects: divide(6, 2) to return 3
    // The test expects: divide(5, 0) to return 'Cannot divide by zero'
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }
}

// Setup express routes
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// Only start server if this file is run directly
if (require.main === module) {
  app.listen(3000, () => console.log("Server running on port 3000"));
}

// Export both the app and Calculator class
module.exports = {
  app,
  Calculator,
};
