import HashMap from "./hashMap.js";

// Create a new HashMap instance
let hashMap = new HashMap();

// Test set method
console.log("=== Testing set method ===");
hashMap.set("key1", "value1"); // Insert key1 with value1
hashMap.set("key2", "value2"); // Insert key2 with value2
hashMap.set("key3", "value3"); // Insert key3 with value3
console.log("Set method completed");

// Test get method
console.log("=== Testing get method ===");
console.log("Get key1:", hashMap.get("key1")); // Should print 'value1'
console.log("Get key2:", hashMap.get("key2")); // Should print 'value2'
console.log("Get key3:", hashMap.get("key3")); // Should print 'value3'
console.log("Get key4 (non-existent):", hashMap.get("key4")); // Should print null

// Test has method
console.log("=== Testing has method ===");
console.log("Has key1:", hashMap.has("key1")); // Should print true
console.log("Has key2:", hashMap.has("key2")); // Should print true
console.log("Has key4 (non-existent):", hashMap.has("key4")); // Should print false

// Test remove method
console.log("=== Testing remove method ===");
console.log("Remove key1:", hashMap.remove("key1")); // Should print true
console.log("Remove key1 again:", hashMap.remove("key1")); // Should print false (already removed)
console.log("Get key1 after removal:", hashMap.get("key1")); // Should print null

// Test length method
console.log("=== Testing length method ===");
console.log("Current length:", hashMap.length()); // Should print 2 (key2 and key3)

// Test clear method
console.log("=== Testing clear method ===");
hashMap.clear();
console.log("Length after clear:", hashMap.length()); // Should print 0
console.log("Get key2 after clear:", hashMap.get("key2")); // Should print null

// Re-insert some keys for further testing
hashMap.set("key1", "value1");
hashMap.set("key2", "value2");
hashMap.set("key3", "value3");
hashMap.set("key4", "value4");

// Test keys method
console.log("=== Testing keys method ===");
console.log("Keys:", hashMap.keys()); // Should print ['key1', 'key2', 'key3', 'key4']

// Test values method
console.log("=== Testing values method ===");
console.log("Values:", hashMap.values()); // Should print ['value1', 'value2', 'value3', 'value4']

// Test entries method
console.log("=== Testing entries method ===");
console.log("Entries:", hashMap.entries()); // Should print [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3'], ['key4', 'value4']]
