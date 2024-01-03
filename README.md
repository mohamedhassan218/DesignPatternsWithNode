# Design Patterns in Node.js
- This is a simple implementation to popular design patterns in Node.js
- You can find an amazing article which I used to type this code.
  - See the [**`article`**](https://medium.com/@techsuneel99/design-patterns-in-node-js-31211904903e).
- You can find an amazin repo which I used to learn more details about patterns with Node.js.
  - See the [**`repo`**]().
- In this repo we've to parts, the first part include the general design patterns used in all programming languages and the second one contain patterns that used specifically in Node.js. Enjoy Learning 😊

# Design Patterns
- Patterns divided to three-main types:

## 1. Creational Design Patterns
- These design patterns are all about class instantiation. This pattern can be further divided into class-creation patterns and object-creational patterns. While class-creation patterns use inheritance effectively in the instantiation process, object-creation patterns use delegation effectively to get the job done.
### Singleton Pattern
- The Singleton pattern ensures that a class has only one instance and provides a global point of access to it.
- The key point to this pattern is to make the constructor **private**, to prevent the direct instantiation and make a static method to handle this process.

### Factory Pattern
- The Factory pattern offers a way to create objects without specifying the exact class of object that will be created.
> **Note:**
> If we separate each type of car on separated class, this called the **Abstract Factory Pattern**. 
> 
>  In Abstract Factory Pattern, a single factory class is responsible for creating objects of a certain type of cars. You would have a family of related factory classes, each responsible for creating a different type of product.
<hr>

## 2. Structural Design Patterns
- These design patterns are all about Class and Object composition. Structural class-creation patterns use inheritance to compose interfaces. Structural object-patterns define ways to compose objects to obtain new functionality.

### Decorator Pattern
- The Decorator pattern dynamically adds new functionality to objects without affecting other instances. In our example, you can add your specific topping to your pizza without using the pizza object itself. This achieves the open-closed principle successfully.
<hr>

## Behavioral Design Patterns
- These design patterns are all about Class's objects communication. Behavioral patterns are those patterns that are most specifically concerned with communication between objects.

### Observer Pattern
- It involves a subject that maintains a list of its dependents, which called **observers** and notifies them of any state changes. To understand it well, assume that any youtube channel is the subject and all its subscribers are the observers, when the channel have any new video, it notifies all it's subscribers with its new video.
<hr>


# Node.js most popular patterns

## Module Pattern
- The module pattern is one of the most basic but fundamental patterns in Node.js. It allows you to organize your code into separate files or modules that **encapsulate** specific functionality.

## Middleware Pattern
- The Middleware pattern involves **a chain of functions that process a request sequentially**. Each function can modify the request or response before passing it to the next function in the chain.