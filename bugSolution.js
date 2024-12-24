function foo(a, b) {
  // Explicit type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Return NaN to indicate invalid input
  }
  if (a === null || b === null) {
    return null; // Handle null values
  }

  return a + b; // Perform addition only if both arguments are numbers
}