import LinkedList from "./LinkedList.js";
/**
 * The responsibility of this class if to create a HashMap
 */

export default class HashMap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.buckets = new Array(this.capacity)
      .fill(null)
      .map(() => new LinkedList()); // creates the buckets array and fills it with an empty linked list.
  }

  /**
   * hash(key) function takes a key and produces a hash code with it.
   */

  hash(key) {
    let hashCode = 0; // initializes hashcode
    const primeNumber = 31; // prime number used to reduce collisions.
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i); //making the hash code.
      index = hashCode % this.buckets.length;
    }
    return index;
  }

  /**
   * set(key, value) If a key already exists, then the old value is overwritten, or updated.
   */

  set(key, value) {
    //Check capacity. If currentCapacity = .75 then we expand.
    let currentCapacity = this.findCurrentCapacity() / this.buckets.length;

    if (currentCapacity >= this.loadFactor) {
      // expand the buckets capacity and then reload all of the buckets.
      this.capacity *= 2; // double it.
      const oldBuckets = this.buckets; // copy of oldBuckets
      this.buckets = new Array(this.capacity)
        .fill(null)
        .map(() => new LinkedList());

      // rehash all existing entries
      for (const oldBucket of oldBuckets) {
        let entries = oldBucket.entries();
        for (let entry of entries) {
          const [oldKey, oldValue] = entry;
          const newBucketIndex = this.hash(oldKey);
          this.buckets[newBucketIndex].append(oldKey, oldValue);
        }
      }
    }
    // Find the bucket index and append the key-value pair
    const bucketIndex = this.hash(key);
    const bucket = this.buckets[bucketIndex];
    bucket.append(key, value);
    console.log("value:", value, "inserted at bucket#: ", bucketIndex);
  }

  /**
   * get(key)
   */
  get(key) {
    const bucketIndex = this.hash(key);
    const bucket = this.buckets[bucketIndex];
    return bucket.find(key);
  }

  /**
   * has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
   */
  has(key) {
    const bucketIndex = this.hash(key);
    const bucket = this.buckets[bucketIndex];
    if (bucket.find(key)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * remove(key) takes a key as an argument. If the given key is in the hash map it removes the entry with that key and returns true. If the key isnt in the hash map, it returns false.
   */
  remove(key) {
    const bucketIndex = this.hash(key);
    const bucket = this.buckets[bucketIndex];
    if (bucket.find(key)) {
      bucket.pop(key);
      return true;
    } else {
      return false;
    }
  }

  /**
   * length()
   * returns the number of stored keys in the hash map.
   */
  length() {
    let count = 0;
    // iterate through each space in the buckets array. Then iterate through the nodes in each linked list and increment count.
    for (let i = 0; i < this.buckets.length; i++) {
      count = count + this.buckets[i].countNodes();
    }
    return count;
  }

  /**
   * clear() removes all entries in the hash map
   */
  clear() {
    this.buckets = new Array(this.capacity)
      .fill(null)
      .map(() => new LinkedList());
  }

  /**
   * returns an array containing all the keys.
   */
  keys() {
    let keys = [];
    for (let i = 0; i < this.buckets.length; i++) {
      let linkedKeys = this.buckets[i].getKeys();
      linkedKeys.forEach((key) => {
        keys.push(key);
      });
    }
    return keys;
  }

  /**
   * returns an array containing all the values.
   */
  values() {
    let values = [];
    for (let i = 0; i < this.buckets.length; i++) {
      let linkedKeys = this.buckets[i].getValues();
      linkedKeys.forEach((value) => {
        values.push(value);
      });
    }
    return values;
  }

  /**
   * Returns an array that contains each key, value pair.
   * Example: [[firstKey, firstValue], [secondKey, secondValue]]
   */
  entries() {
    let entries = [];
    for (let i = 0; i < this.buckets.length; i++) {
      let linkedKeys = this.buckets[i].getKeys(); // Call the getKeys method of LinkedList
      let linkedValues = this.buckets[i].getValues(); // Call the getValues method of LinkedList
      for (let j = 0; j < linkedKeys.length; j++) {
        entries.push({ key: linkedKeys[j], value: linkedValues[j] });
      }
    }
    return entries;
  }

  findCurrentCapacity() {
    let bucketCount = 0;
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i].head !== null) bucketCount++;
    }
    return bucketCount;
  }
}
