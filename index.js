const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) { //returns the original collection
      // depends if array or object 
      let newCollection
      
      if (collection instanceof Array) {  // if it's an array
          newCollection = collection.slice()
        } else {
          newCollection = Object.values(collection) 
        }// if it's an object
      for (const el of newCollection) {
        callback(el)
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = []
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }
      for (const el of collection) {
        newCollection.push(callback(el))
      }
      return newCollection
    },

    reduce: function(collection, callback, acc) { // what if there is no initial value
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }
      for (const el of collection) {
        acc = callback(acc, el, collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }
      for (const el of collection) {
        if (predicate(el)) {
          return el
        }
      }
    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }
      let filteredCollection = []
      for (const el of collection) {
        if (predicate(el)) {
          filteredCollection.push(el)
        }
      }
      return filteredCollection
    },

    size: function(collection) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }
      return collection.length
    },

    first: function(array, n) { //without n, it is the first. otherwise, the first n elements
      if (n) {
        return array.slice(0, n)
      } else {
        return array[0]
      }
    },

    last: function(array, n) {
      if (n) {
        return array.slice(array.length - n, array.length)
      } else {
        return array[array.length - 1]
      }
    },

    compact: function(array) {
      let newArray = []
      for (const el of array) {
        if (el) { //if it's true aka NOT FALSY
          newArray.push(el)
        }
      }
      return newArray
    },

    sortBy: function(collection, callback) {
      let newArray = [...collection] // run sort on this collection
      return newArray.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    flatten: function(array, shallow=false) {
      // let newArray = []
      // for (const el of array) {
      //   if (el instanceof Array) {
      //     newArray.push(el[0])
      //   } else
      //   newArray.push(el)
      // }
      // return newArray
      // for (const el of array) {
      //   if (el instanceof Array) {
      //     newArray.push 
      //   }
      // }
      // if (shallow) { // only flattened to a single level
      //   for (const el of array) {
      //     if (el instanceof Array) {
      //       // newArray.push(
      //         for (const arEl of el) {
      //           newArray.push(arEl)
      //         }
      //     } else {
      //       newArray.push(array.flat(Infinity))
      //     }
      //   }
      // }
      if (!shallow) {
        return array.flat(Infinity)
      } else {
        return array.flat()
      } //thanks ligmascript
    },

    uniq: function(array, isSorted=false, callback=false) { 
      if (callback) {
        const callbackValues = new Set() 
        const uniqueValues = new Set() 
        for (let el of array) {
          const modifiedValue = callback(el)
          if (!callbackValues.has(modifiedValue)) {
            callbackValues.add(modifiedValue)
            uniqueValues.add(el)
          }
        }
        return [...uniqueValues]
      } else {
        return [...new Set(array)]
      }
    }, // everything in set has to be unique anyway

    keys: function(object) {
      let objectKeys = []
      for (const el in object) { // for in is for OBJECTS
        objectKeys.push(el)
      }
      return objectKeys
    },

    values: function(object) {
      let objectValues = []
      for (const el in object) {
        objectValues.push(object[el])
      }
      return objectValues
    },

    functions: function(object) {
      let functionNames = []
      for (const el in object) {
        if (typeof object[el] === "function") { // typeof can be "object", "string", "function", etc
          functionNames.push(el)
        }
      }
      return functionNames.sort()

    },


  }
})()

fi.libraryMethod()
