# Design Patterns in Node.js
This is a simple implementation to almost all design patterns in Node.js. In this repo we've to parts, the first part include the general design patterns used in all programming languages and the second one contain patterns that used specifically in Node.js.

If you found any problems to learn the main idea of a specific pattern, you can get help using this insightful [`playlist`](https://www.youtube.com/playlist?list=PLlsmxlJgn1HJpa28yHzkBmUY-Ty71ZUGc)

Enjoy Learning 😊

# Design Patterns
Patterns are divided into three-main types:
1. Creational Patterns.
2. Structural Patterns.
3. Behavioral Patterns.

In this repo, I've covered almost all of them. Take a deep breath, let's dive in . . .

## 1. Creational Design Patterns
These design patterns are all about class instantiation. This pattern can be further divided into class-creation patterns and object-creational patterns. While class-creation patterns use inheritance effectively in the instantiation process, object-creation patterns use delegation effectively to get the job done.

### a. Singleton Pattern
The Singleton pattern ensures that a class has only one instance and provides a global point of access to it.

The Key Components of Singleton Pattern:
  - **Private Constructor**: The class should have a private constructor to prevent external instantiation of the class.
  - **Private Instance**: The class should have a private static instance of itself.
  - **Static Method for Instance Retrieval**: The class should provide a static method that returns the instance of the class. This method should create the instance if it doesn't exist or return the existing instance.

### b. Factory Pattern
The Factory Pattern is a creational design pattern that **provides an interface for creating objects in a super class, but allows subclasses to alter the type of objects that will be created**.

It is used to create objects without specifying the exact class of object that will be created.

The Key Components of Factory Pattern:
  - **Product Interface or Abstract Class**: Defines the interface for the objects that the factory will create.
  - **Concrete Products**: Classes that implement the Product interface and represent the objects to be created.
  - **Factory Interface or Abstract Class**: Declares the method for creating the products. This method should return an object of the Product interface.
  - **Concrete Factories**: Classes that implement the Factory interface and create specific types of products.
> **Note:**
> If we separate each type of car on separated class, this called the **Abstract Factory Pattern**. 
> 
>  In Abstract Factory Pattern, a single factory class is responsible for creating objects of a certain type of cars. You would have a family of related factory classes, each responsible for creating a different type of product.

### c. Builder Pattern
The Builder Pattern provides **a way to construct a complex object step by step**. It separates the construction of a complex object from its representation, allowing the same construction process to create different representations. This pattern is particularly useful when an object needs to be constructed with numerous optional parameters or configurations, and you want to keep the construction process clear and flexible.

The Key Components of Builder Pattern:
  - **Director**: The director is responsible for orchestrating the construction process. It works with a builder to build the product step by step.
  - **Builder**: The builder interface declares the construction steps that must be implemented by the concrete builders. It usually has methods for building parts of the product.
  - **Concrete Builder**: A concrete builder implements the builder interface and provides specific implementations for constructing the product. It keeps track of the product being built.
  - **Product**: The product is the final complex object that is constructed step by step using the builder.

### d. Prototype Pattern
The Prototype pattern is a creational design pattern that **deals with the problem of creating objects**. Instead of creating objects from scratch, **the pattern suggests creating new objects by copying an existing object, known as the prototype**. This helps in avoiding the cost of creating a new instance of an object using the 'new' keyword, and allows for efficient object cloning.

The Key Components of Prototype Pattern:
  - **Prototype Interface/Abstract Class**: This is the interface or abstract class that declares the method `clone()`. All classes that implement this interface or extend this class will be able to use the clone method to create copies of objects.
  - **Concrete Prototype**: Classes that implement the `clone()` method. These classes act as prototypes that can be cloned to create new instances.
  - **Client**: The client is responsible for creating new objects by asking the prototype to clone itself. The client typically doesn't need to know the specific classes of objects it clones, as it works with the prototype interface.

### e. Object Pool Pattern
The Object Pool Pattern is a creational design pattern that **involves creating and maintaining a pool (or group) of reusable objects to improve performance and resource utilization**. The main idea behind the Object Pool Pattern is **to avoid the overhead of creating and destroying objects repeatedly**, especially in scenarios where the cost of creating a new instance of an object is high.

The Key Components of Object Pool Pattern:
   - **Object Pool**: The pool itself is a collection of pre-initialized and reusable objects. These objects are created in advance and held in the pool until they are needed.
   - **Object Creation/Initialization**: The pool is responsible for creating and initializing objects when the pool is initially created or when more instances are needed.
   - **Object Reuse**: Instead of creating new objects, the Object Pool reuses existing ones. After an object is used, it is returned to the pool, allowing other parts of the program to reuse it without the overhead of creating a new instance.
   - **Object Validation**: Optionally, the Object Pool can implement a mechanism to validate whether an object is still valid before it is handed out for reuse. If an object is found to be invalid, it can be removed from the pool, and a new one can be created.
<hr>

## 2. Structural Design Patterns
These design patterns are all about Class and Object composition. Structural class-creation patterns use inheritance to compose interfaces. Structural object-patterns define ways to compose objects to obtain new functionality.

### a. Decorator Pattern
The Decorator pattern dynamically adds new functionality to objects without affecting other instances. In our example, you can add your specific topping to your pizza without using the pizza object itself. This achieves the open-closed principle successfully.

### b. Adapter Pattern
The Adapter Pattern **allows the interface of an existing class to be used as another interface**. It acts as a bridge between incompatible interfaces, enabling them to work together. 

**The main purpose of the Adapter Pattern is to make two incompatible interfaces compatible without modifying their source code**.

They Key Componenets of Adapter Pattern:
  - **Adaptee**: The Adaptee is the existing class or system that has an interface that is incompatible with what the client code expects. It represents the system or class that needs to be integrated into a new environment or used in conjunction with another system.
  - **Target**: The Target is the desired interface that the client code expects or wants to work with. It represents the interface that your client code is designed to use, and it may be different from the interface provided by the Adaptee.
  - **Adapter**: The Adapter is the class that bridges the gap between the Adaptee and the Target. It implements the Target interface but delegates the actual work to the Adaptee. It wraps the Adaptee and translates its interface to match the Target's interface, making the Adaptee compatible with the client code.

The Adapter pattern encapsulates the details of how the adaptation is done, providing a clean separation between the client code and the Adaptee.

### c. Composite Pattern
The Composite Pattern is a structural design pattern that **allows you to compose objects into tree structures to represent part-whole hierarchies**. 

It lets clients **treat individual objects and compositions of objects uniformly**. In other words, it enables you to create complex structures by combining simple objects and treating both the individual objects and their compositions uniformly.

They Key Componenets of Composite Pattern:
  - **Component**: Declares the interface for objects in the composition and implements default behavior for the interface.
  - **Leaf**: Represents individual objects in the composition that do not have children. Implements the operations declared by the Component interface.
  - **Composite**: Represents a composition of objects, including both leaves and composites. It implements the operations declared by the Component interface but also manages its children, delegating the work to them.

### d. Proxy Pattern
The Proxy pattern is a structural design pattern that **provides a surrogate or placeholder for another object to control access to it**.

It acts as an intermediary **allowing you to add an extra layer of control over the real object**.

This pattern is useful when you want to control access to an object, add some behavior before or after the actual operation, or delay the creation and initialization of the real object until it is actually needed.

There're some scenarios where the Proxy pattern can be beneficial:
  - **Virtual Proxy**: The Proxy can act as a placeholder for an expensive-to-instantiate object. It creates the real object only when it is required, optimizing resource usage.
  - **Protection Proxy**: The Proxy can control access to the real object by adding additional checks or restrictions. It acts as a guard, ensuring that only authorized clients can access the underlying object.
  - **Remote Proxy**: The Proxy can represent an object that is in a different address space, such as a remote server. It serves as a local representative for the remote object, providing a way to interact with it as if it were local.
In our code, we do a simple proxy that spin 3 seconds before enable the user to deal with the real subject.

The Key Componenets of Proxy Pattern:
  - **Subject Interface**: this is the common interface or abstract class shared by both the RealSubject and Proxy. It defines the operations that both the real object and the proxy must implement. This ensures that the proxy can be used wherever the real object is expected.
  - **RealSubject**: this is the real object that the proxy represents. It implements the Subject interface, providing the actual functionality that the client wants.
  - **Proxy**: the proxy acts as a surrogate or placeholder for the real object. It also implements the Subject interface, mirroring the methods of the real object. The proxy controls access to the real object and may add additional behavior before or after forwarding the request to the real object.
  - **Client**: the client is the entity that interacts with either the real object or the proxy. It treats both the real object and the proxy through the common Subject interface, making it unaware of whether it is working with the real object or its proxy.
  
### e. Facade Pattern
The Facade pattern is a structural design pattern that **provides a simplified interface to a set of interfaces in a subsystem**. It **hides the complexities** of the subsystem and presents a unified interface to the client. This pattern involves a single class, known as the facade, which interfaces with various components within the subsystem to simplify interactions for the client.

The Key Components of Facade Pattern:
  - **Facade**: This is the main interface that clients interact with. It simplifies and coordinates the interactions with the subsystem components. The facade delegates client requests to appropriate subsystem objects.

  - **Subsystem Classes**: These are the various components or classes within the subsystem. They perform the actual work requested by the client but are accessed through the facade to provide a unified and simplified interface.

### f. Bridge Pattern
The Bridge Pattern is a structural design pattern that **separates abstraction from implementation, allowing them to vary independently**. It aims to decouple an abstraction from its implementation so that both can evolve independently **without affecting each other**. This pattern involves an interface (abstraction) and a concrete class (implementation) that can exist independently and can be varied easily.

The Key Components of Bridge Pattern:
   - **Abstraction**: Defines the abstraction's interface. Contains a reference to the implementor.
   - **Refined Abstraction**: Extends the abstraction. Implements higher-level features using the implementor.
   - **Implementor**: Defines the interface for concrete implementations. Does not have to match the abstraction's interface.
   - **Concrete Implementor**: Implements the implementor interface. Provides specific implementations for the abstraction.

### g. Flyweight Pattern
The Flyweight pattern is a structural design pattern that **focuses on minimizing memory or storage usage and sharing as much as possible between similar objects**. It is particularly useful when dealing with a large number of similar objects to improve performance and reduce resource consumption.

The Key Components of Flyweight Pattern:
   - **Flyweight Interface/Class**: This defines the interface through which concrete flyweights (shared objects) can be managed. It usually includes methods that allow the client to interact with the flyweight objects.
   - **Concrete Flyweight**: Implements the Flyweight interface and represents the shared objects. These objects are typically stateless or have shared intrinsic state.
   - **Flyweight Factory**: This is responsible for managing and creating flyweight objects. It ensures that the flyweights are shared and reused, minimizing the creation of unnecessary objects.
   - **Client**: Utilizes flyweight objects, often by obtaining them from the flyweight factory. Clients are aware of the shared and unique states of the objects.

<hr>

## 3. Behavioral Design Patterns
These design patterns are all about Class's objects communication. Behavioral patterns are those patterns that are most specifically concerned with communication between objects.

### a. Observer Pattern
It involves a subject that maintains a list of its dependents, which called **observers** and notifies them of any state changes. To understand it well, assume that any youtube channel is the subject and all its subscribers are the observers, when the channel have any new video, it notifies all it's subscribers with its new video.

### b. Iterator Pattern
The Iterator pattern is a behavioral design pattern that **provides a way to sequentially access elements of a collection without exposing its underlying representation**. It allows you to traverse a collection of objects without exposing the details of the collection's implementation.
The main idea behind the Iterator pattern is to decouple the client code from the internal structure of the collection, making it easier to iterate over the elements of a collection in a consistent manner.

The Key Components of Iterator pattern:
  - **Iterator Interface/Class**: Defines an interface or class with methods like `next()`, `hasNext()`, and `current()`. These methods are used to iterate over the elements of the collection.
  - **Concrete Iterator**: Implements the Iterator interface and keeps track of the current position within the collection.
  - **Aggregate Interface/Class**: Defines an interface or class that declares methods for creating iterators. This is the interface that clients use to obtain iterators for a particular collection.
  - **Concrete Aggregate**: Implements the Aggregate interface and provides an implementation for creating iterators over its elements.

### c. Command Pattern
The Command Pattern is a behavioral design pattern that turns a request into a stand-alone object, containing all the information about the request. This object can be passed around and manipulated like any other object in the system. The primary goal of the Command Pattern is to **decouple the sender of a request from its receiver, allowing for greater flexibility in handling requests**.

The Key Components of Command Pattern:
- **Command Interface**:
  - Defines an interface with a method (e.g., `execute()`) that encapsulates the action to be performed.
- **Concrete Command**:
  - Implements the Command interface by providing the specific behavior associated with a particular command.
  - It holds a reference to the object that will be the receiver of the request.
- **Invoker**:
  - Asks the command to execute the request.
  - It doesn’t know anything about the command details but uses the command through the `execute()` method.
- **Receiver**:
  - Knows how to perform the operation associated with the command.
  - It is the actual target of the command.
- **Client**:
  - Creates the concrete command and associates it with the appropriate receiver.

### d. Visitor Pattern
The Visitor pattern is a behavioral design pattern that **allows defining a new operation without changing the classes of the elements on which it operates**. It is particularly useful when you have a complex structure of objects and you want to perform various operations on these objects without modifying their structure.

The Key Components of Visitor Pattern:
- **Visitor Interface/Abstract Class**:
  - This defines a set of methods, each representing a different type of operation that can be performed on the elements of the object structure.
- **Concrete Visitor**:
  - Implements the Visitor interface and provides the actual implementation for each operation defined in the Visitor interface.
- **Element Interface/Abstract Class**:
  - This declares an `accept()` method that takes a visitor as an argument.
  - This method is implemented by concrete elements to allow the visitor to access or operate on the element.
- **Concrete Element**:
  - Implements the Element interface and provides the `accept()` method implementation.
  - This method typically calls the corresponding visitor method, allowing the visitor to perform its operation on the element.
- **Object Structure**:
  - Represents a collection or structure of elements.
  - It provides an interface to iterate over its elements, and it may also provide a way for visitors to access the elements.

### e. State Pattern
The State pattern is a behavioral design pattern that **allows an object to alter its behavior when its internal state changes**. This pattern is particularly **useful when an object needs to change its behavior based on its internal state**, and these state transitions should be handled in a clean and flexible way.

The Key Components of State Pattern:
   - **Context**: The context is the object whose behavior changes based on its internal state. It maintains a reference to the current state object.
   - **State**: The state is an interface or abstract class that defines a set of methods that represent the various behaviors of the context. Concrete state classes implement these methods to provide specific behavior for each state.
   - **Concrete State**: Concrete state classes are implementations of the State interface, representing specific states in which the context can be. Each concrete state class provides its own implementation of the methods defined in the State interface.
   - **Client**: The client is responsible for creating the context object and setting its initial state. It interacts with the context, triggering state transitions.

### f. Template Method Pattern
The Template Method Pattern is a behavioral design pattern that simply **defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure**.

The Key Components of Template Method Pattern:
- **Abstract Class** (*Template*):
  - Defines the skeleton of the algorithm with a template method.
  - Contains abstract methods that represent steps of the algorithm.
  - May also include concrete methods that are common to all subclasses.
- **Concrete Classes**:
  - Implement the abstract methods defined in the abstract class.
  - Can override certain steps of the algorithm without changing its structure.

### g. Strategy Pattern
The Strategy Pattern is a behavioral design pattern that **defines a family of algorithms, encapsulates each algorithm, and makes them interchangeable**. It lets **the algorithm vary independently from the clients that use it**. This pattern is useful when you have a set of algorithms and want to make them interchangeable, allowing the client to choose the appropriate algorithm at runtime.

The Key Components of Strategy Pattern:
   - **Context**: The context class is responsible for maintaining a reference to the strategy object and can switch between different strategies dynamically. It delegates the execution of the algorithm to the strategy object.
   - **Strategy**: The strategy interface declares the common interface for all concrete strategies. Concrete strategy classes implement this interface and provide specific implementations of the algorithm.
   - **Concrete Strategies**: These are the actual algorithm implementations that adhere to the strategy interface. Different concrete strategy classes encapsulate different variations of the algorithm.

### h. Interpreter Pattern
The Interpreter pattern is a behavioral design pattern that **defines a grammar for the language and an interpreter that interprets sentences in the language**. It is used to design a language interpreter or compiler. This pattern involves defining a grammar for the language and providing an interpreter to interpret sentences in the language.

The Key Components of Interpreter Pattern:
- **AbstractExpression**:
  - Defines an interface for interpreting expressions.
  - Usually, there is one abstract expression for each rule in the grammar.
- **TerminalExpression**:
  - Implements the AbstractExpression interface for terminal symbols in the grammar.
  - Represents the leaf nodes of the syntax tree.
- **NonterminalExpression**:
  - Implements the AbstractExpression interface for non-terminal symbols in the grammar.
  - Represents the internal nodes of the syntax tree.
  - Usually, there is one non-terminal expression for each rule in the grammar.
- **Context**:
  - Contains information that the interpreter uses while interpreting expressions.
  - Provides an interface to set or retrieve the interpreter's state.
- **Client**:
  - Builds an abstract syntax tree representing the language grammar.
  - Invokes the interpreter to interpret the abstract syntax tree.

### i. Mediator Pattern
The Mediator pattern is a behavioral design pattern that **defines an object (the *mediator*) that centralizes communication between a set of objects (*colleagues*)**, thus promoting loose coupling and reducing the direct connections between the objects. Instead of objects communicating directly with each other, they communicate through the mediator, which facilitates the interaction and coordination between them. **This pattern is useful in scenarios where a system has a large number of interacting components, and managing the relationships between them becomes complex**.

The Key Components of Mediator Pattern:
   - **Mediator**: This is the central component that defines the interface for communication between colleagues. It encapsulates the logic for coordinating and managing interactions.
   - **Colleague**: These are the individual components that interact with each other through the mediator. Colleagues are not aware of each other they only communicate through the mediator.

### j. Null Object Pattern
The Null Object pattern is a design pattern that falls under the behavioral design patterns category. It is used to **provide an object as a surrogate for the lack of an object of a given type**. In other words, it *allows you to use an object that does nothing or has a default behavior when an actual object is expected*. This can help **avoid null references** and simplify code by removing the need for explicit null checks.

The Key Components of Null Object Pattern
- **Abstract Class or Interface**:
  - Defines the interface for the concrete classes (including the null object).
  - Specifies the methods that the concrete classes must implement.
- **Concrete Classes**:
  - Implements the abstract class or interface.
  - Provides the actual functionality for the specific case.
- **Null Object**:
  - A special implementation of the abstract class or interface.
  - Represents a "do nothing" or default behavior.
  - Helps avoid null references.
- **Client**:
  - The code that uses the objects, unaware of whether it is using a concrete object or a null object.

### k. Memento Pattern
The Memento pattern is a behavioral design pattern that **provides the ability to capture and externalize an object's internal state so that it can be restored to this state later**, without exposing its internal structure. This pattern is particularly **useful in situations where you need to implement undo mechanisms, versioning, or snapshots of an object's state**.

The Key Components of Memento Pattern:
   - **Originator (or Caretaker)**: This is the object whose state needs to be saved and restored. It has an internal state that can be modified, and it also has methods to save and restore its state.
   - **Memento**: This is an object that stores the state of the Originator. It is used to represent a specific snapshot of the Originator's state.
   - **Caretaker (or Client)**: This is an object that keeps track of the different states of the Originator. It can request the Originator to save its state into a Memento or restore its state from a Memento.

### l. Chain of Responsibility Pattern
The Chain of Responsibility pattern is a behavioral design pattern that **enables an object to pass a request along a chain of potential handlers**. The main idea behind this pattern is to **decouple senders and receivers**, allowing multiple objects to handle a request without the sender needing to know which object will ultimately process it.

The Key Components of Chain of Responsibility Pattern
- **Handler Interface (or Abstract Class)**:
  - Defines an interface or abstract class for handling requests.
  - Typically declares a method for handling the request.
- **Concrete Handlers**:
  - Implement the Handler interface.
  - Process requests they are responsible for.
  - Can either handle the request or pass it to the next handler in the chain.
- **Client**:
  - Initiates the request and sends it to the first handler in the chain.
  - Doesn't need to know the specific handler or how the request is processed.
- **Request**:
  - Represents the request being passed along the chain.
  - Contains the necessary information for handlers to process the request.
<hr>

# Node.js most Popular Patterns
In this part, I cover some of the most popular patterns that is used specifically with Node.js. If you're not interested with Node, you can skip this part. Otherwise, take a deep breath and let's play some tricks with Node.js . . .
## a. Module Pattern
The Module Pattern is a design pattern used in JavaScript **to create encapsulated and modular code**. It provides a way to structure and organize code by breaking it into smaller, reusable modules, helping to improve maintainability, readability, and scalability of your codebase.

The Key Components of Module Pattern:
   - **Encapsulation**: The Module Pattern encapsulates code within a closure, which is a function that defines private variables and functions. This helps in preventing the pollution of the global namespace, reducing the likelihood of naming conflicts.
   - **Private and Public Members**: Private members (variables and functions) are those that are only accessible within the module. They are declared within the closure. Public members are the ones that can be accessed from outside the module. These are usually returned as part of an object or interface.

## b. Middleware Pattern
Middleware is a software design pattern that **allows the separation of concerns in a system by inserting additional processing logic between components**. It is commonly used in web development, particularly in frameworks like Express.js for Node.js, to handle tasks such as request processing, authentication, logging, and more. **Middleware sits between the incoming request and the final response, allowing developers to modularize and organize code in a clean and reusable manner**.

The Key Components of Middleware Pattern:
  - **Middleware Functions**: These are the functions that implement specific tasks or behaviors in the middleware pattern. They receive the request and response objects and often have access to the next middleware function in the chain.
  - **Request Object (*req*)**: Represents the HTTP request received by the server. Middleware functions can inspect and modify this object as it passes through the chain.
  - **Response Object (*res*)**: Represents the HTTP response that will be sent back to the client. Middleware functions can modify or augment the response before it is sent.
  - **Next Function**: A function (usually named next) provided by the middleware system that passes control to the next middleware in the chain. If not called, the request may be halted at the current middleware.