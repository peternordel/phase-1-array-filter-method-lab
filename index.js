function findMatching(array, string) {
    //findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
    return array.filter(item => item.toUpperCase() === string.toUpperCase())
}

function fuzzyMatch(array, string) {
    //fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
    return array.filter(item => item.startsWith(string));
}

function matchName(array, string) {
    //matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.
    return array.filter(item => item.name.toUpperCase() === string.toUpperCase());
}

