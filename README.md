# HashMap

This is an assignment from The Odin Project

## Purpose:

---

To help me understand what a HashMap and what hashing is in general, I will create my own hashing function to easily store and retreive data with wicked-fast speed.

## About

---

What is hash code?

- Taking an input and generating a corresponding output.

- Hashing the same input should always return the same hash code.

- Hashing is a one way process.

Buckets: Storage for our elements. Nodes, with each node containing a linked list.

Collisions: When two elements generate the same exact hash code.

- When two different keys sit inside the same bucket, because they generate the same hash code.

Capacity: total number of buckets we currently have.

Load Factor: A number we assign our hash map that determines a good time to grow our buckets.
e.i. a load factor of 0.75 will make our buckets grow when they are 75% full.

Why do we use prime numbers?

- Multiplying by prime numbers will reduce the liklihood of hash codes being evenly devisible by the bucket length, which helps minimize occurance of collisions.

## Notes

---

We need to make sure (because we're using JavaScript) that our index doesn't exceed the bucket size. Therefore, we use this snippet of code to access a bucket with an index.
if (index < 0 || index >= buckets.length) {
throw new Error("Trying to access index out of bound");
}
