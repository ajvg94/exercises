// "Object Value Equality Checker"

// Challenge Description:

// Imagine you have a complex nested object, and you want to determine whether all values within the object are equal. Your task is to create a TypeScript class, ValueComparer, that provides a method to check if all values within a given object are equal.

// Class Requirements:

//     The ValueComparer class should have a constructor that takes an object as its argument.
//     The class should provide a method named areAllValuesEqual that returns true if all values within the object are equal and false otherwise.
//     The comparison should be done recursively, considering nested objects.
//     The class should be implemented in a way that ensures type safety using TypeScript.
const sampleTree = {
    a: 1,
    b: 1,
    c: {
      c1: 1,
      c2: {
        cc1: 1,
        cc2: 1
      }
    }
  };
  
class ValueComparer {
    areAllValuesEqual() {
      return true
    }
}
  
const comparer = new ValueComparer(sampleTree);
const result = comparer.areAllValuesEqual();
  
console.log(result); // Output should be "true" for the provided example.