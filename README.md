# Design Patterns in Node.js
- This is a simple implementation to popular design patterns in Node.js.
- In this repo we've to parts, the first part include the general design patterns used in all programming languages and the second one contain patterns that used specifically in Node.js. Enjoy Learning 😊

# Design Patterns
- Patterns divided to three-main types:

## 1. Creational Design Patterns
- These design patterns are all about class instantiation. This pattern can be further divided into class-creation patterns and object-creational patterns. While class-creation patterns use inheritance effectively in the instantiation process, object-creation patterns use delegation effectively to get the job done.

### a. Singleton Pattern
- The Singleton pattern ensures that a class has only one instance and provides a global point of access to it.
- Key Components of Singleton Pattern:
  - **Private Constructor**: The class should have a private constructor to prevent external instantiation of the class.
  - **Private Instance**: The class should have a private static instance of itself.
  - **Static Method for Instance Retrieval**: The class should provide a static method that returns the instance of the class. This method should create the instance if it doesn't exist or return the existing instance.

### b. Factory Pattern
- The Factory Pattern is a creational design pattern that **provides an interface for creating objects in a super class, but allows subclasses to alter the type of objects that will be created**.
- It is used to create objects without specifying the exact class of object that will be created.
- Key Components:
  - **Product Interface or Abstract Class**: Defines the interface for the objects that the factory will create.
  - **Concrete Products**: Classes that implement the Product interface and represent the objects to be created.
  - **Factory Interface or Abstract Class**: Declares the method for creating the products. This method should return an object of the Product interface.
  - **Concrete Factories**: Classes that implement the Factory interface and create specific types of products.
> **Note:**
> If we separate each type of car on separated class, this called the **Abstract Factory Pattern**. 
> 
>  In Abstract Factory Pattern, a single factory class is responsible for creating objects of a certain type of cars. You would have a family of related factory classes, each responsible for creating a different type of product.

### c. Builder Pattern
- The Builder Pattern provides **a way to construct a complex object step by step**. It separates the construction of a complex object from its representation, allowing the same construction process to create different representations. This pattern is particularly useful when an object needs to be constructed with numerous optional parameters or configurations, and you want to keep the construction process clear and flexible.
- The key components of the Builder Pattern:
  - **Director**: The director is responsible for orchestrating the construction process. It works with a builder to build the product step by step.
  - **Builder**: The builder interface declares the construction steps that must be implemented by the concrete builders. It usually has methods for building parts of the product.
  - **Concrete Builder**: A concrete builder implements the builder interface and provides specific implementations for constructing the product. It keeps track of the product being built.
  - **Product**: The product is the final complex object that is constructed step by step using the builder..
<hr>

## 2. Structural Design Patterns
- These design patterns are all about Class and Object composition. Structural class-creation patterns use inheritance to compose interfaces. Structural object-patterns define ways to compose objects to obtain new functionality.

### a. Decorator Pattern
- The Decorator pattern dynamically adds new functionality to objects without affecting other instances. In our example, you can add your specific topping to your pizza without using the pizza object itself. This achieves the open-closed principle successfully.

### b. Adapter Pattern
- The Adapter Pattern **allows the interface of an existing class to be used as another interface**. It acts as a bridge between incompatible interfaces, enabling them to work together. 
- **The main purpose of the Adapter Pattern is to make two incompatible interfaces compatible without modifying their source code**.
- They key componenets of the Adapter Pattern:
  - **Adaptee**:
    - The Adaptee is the existing class or system that has an interface that is incompatible with what the client code expects.
    - It represents the system or class that needs to be integrated into a new environment or used in conjunction with another system.
  - **Target**:
    - The Target is the desired interface that the client code expects or wants to work with.
    - It represents the interface that your client code is designed to use, and it may be different from the interface provided by the Adaptee.
  - **Adapter**:
    - The Adapter is the class that bridges the gap between the Adaptee and the Target. It implements the Target interface but delegates the actual work to the Adaptee.
    - It wraps the Adaptee and translates its interface to match the Target's interface, making the Adaptee compatible with the client code.
- The Adapter pattern encapsulates the details of how the adaptation is done, providing a clean separation between the client code and the Adaptee.

### c. Composite Pattern
- The Composite Pattern is a structural design pattern that **allows you to compose objects into tree structures to represent part-whole hierarchies**. 
- It lets clients **treat individual objects and compositions of objects uniformly**. In other words, it enables you to create complex structures by combining simple objects and treating both the individual objects and their compositions uniformly.
- They key componenets of the Composite Pattern:
  - **Component**: Declares the interface for objects in the composition and implements default behavior for the interface.
  - **Leaf**: Represents individual objects in the composition that do not have children. Implements the operations declared by the Component interface.
  - **Composite**: Represents a composition of objects, including both leaves and composites. It implements the operations declared by the Component interface but also manages its children, delegating the work to them.

### d. Proxy Pattern
- The Proxy pattern is a structural design pattern that **provides a surrogate or placeholder for another object to control access to it**.
- It acts as an intermediary **allowing you to add an extra layer of control over the real object**.
- This pattern is useful when you want to control access to an object, add some behavior before or after the actual operation, or delay the creation and initialization of the real object until it is actually needed.
- There're some scenarios where the Proxy pattern can be beneficial:
  - **Virtual Proxy**: The Proxy can act as a placeholder for an expensive-to-instantiate object. It creates the real object only when it is required, optimizing resource usage.
  - **Protection Proxy**: The Proxy can control access to the real object by adding additional checks or restrictions. It acts as a guard, ensuring that only authorized clients can access the underlying object.
  - **Remote Proxy**: The Proxy can represent an object that is in a different address space, such as a remote server. It serves as a local representative for the remote object, providing a way to interact with it as if it were local.
- In our code, we do a simple proxy that spin 3 seconds before enable the user to deal with the real subject.
- The key componenets are:
  - **Subject Interface**: this is the common interface or abstract class shared by both the RealSubject and Proxy. It defines the operations that both the real object and the proxy must implement. This ensures that the proxy can be used wherever the real object is expected.
  - **RealSubject**: this is the real object that the proxy represents. It implements the Subject interface, providing the actual functionality that the client wants.
  - **Proxy**: the proxy acts as a surrogate or placeholder for the real object. It also implements the Subject interface, mirroring the methods of the real object. The proxy controls access to the real object and may add additional behavior before or after forwarding the request to the real object.
  - **Client**: the client is the entity that interacts with either the real object or the proxy. It treats both the real object and the proxy through the common Subject interface, making it unaware of whether it is working with the real object or its proxy.
<hr>

## 3. Behavioral Design Patterns
- These design patterns are all about Class's objects communication. Behavioral patterns are those patterns that are most specifically concerned with communication between objects.

### a. Observer Pattern
- It involves a subject that maintains a list of its dependents, which called **observers** and notifies them of any state changes. To understand it well, assume that any youtube channel is the subject and all its subscribers are the observers, when the channel have any new video, it notifies all it's subscribers with its new video.

### b. Iterator Pattern
- The Iterator pattern is a behavioral design pattern that **provides a way to sequentially access elements of a collection without exposing its underlying representation**. It allows you to traverse a collection of objects without exposing the details of the collection's implementation.
- The main idea behind the Iterator pattern is to decouple the client code from the internal structure of the collection, making it easier to iterate over the elements of a collection in a consistent manner.
- Key components of the Iterator pattern:
  - **Iterator Interface/Class**: Defines an interface or class with methods like `next()`, `hasNext()`, and `current()`. These methods are used to iterate over the elements of the collection.
  - **Concrete Iterator**: Implements the Iterator interface and keeps track of the current position within the collection.
  - **Aggregate Interface/Class**: Defines an interface or class that declares methods for creating iterators. This is the interface that clients use to obtain iterators for a particular collection.
  - **Concrete Aggregate**: Implements the Aggregate interface and provides an implementation for creating iterators over its elements.
<hr>

# Node.js most popular patterns

## a. Module Pattern
- The module pattern is one of the most basic but fundamental patterns in Node.js. It allows you to organize your code into separate files or modules that **encapsulate** specific functionality.

## b. Middleware Pattern
- The Middleware pattern involves **a chain of functions that process a request sequentially**. Each function can modify the request or response before passing it to the next function in the chain.