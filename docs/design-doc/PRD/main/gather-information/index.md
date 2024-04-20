# Gather Information

Gather Information is one of the main features, playing the INPUT role of the whole system.\
Gather Information is defined as the step of gathering, downloading, converting any outside-of-system information and data into the system.

> What this module are going to do is **automatically** gather all information **in one place**.

## Where to Gather

There is a big difference since the Internet emerged,
In the past, we can only gather information from real world -- newspaper, word of mouth, travel ... \
But nowadays, you can gather information without the limitation of time and space, which is why information explotion like this.

So, information/data are everywhere, and they can be represented in various ways.

**First**, we need to figure out all the places having information (that valuable to us, need to be gathered).

### From the Virtual Life

The virtual life is reffering to the world/life that the world people built as the mirror of the real world. 

1. [From Native App](./where/virtual-life/native-app.md)
2. [From Web](./where/virtual-life/web.md)
3. [From RSS](./where/virtual-life/rss.md)
4. [From Email](./where/virtual-life/email.md)
5. [From SMS](./where/virtual-life/sms.md)

### From the Real Life

1. [Paper Data](./where/real-life/paper-data.md)
2. [Word of Mouth](./where/real-life/word-of-mouth.md)
3. [Vision](./where/real-life/camera.md)
4. [Brain, Mind](./where/real-life/brain.md)

## What to Gather

You might say, just grab all things down, make sure the information is complete and correct. \
That's right, in the stage of gathering, we should foucs on **Complete and Correct** first.

But it's not a wise way for following operations such as pre-processing, reading ...

Grab everything without a point will slow you down, filter and select are necessary.

## How to Gather

It's a question about when and the implementation of gathering.

Different sources of information has different implementations, techniqually and physically. \
No

## Abstraction

In the module of gathering information, its interface is important.

Gather Information are consist of these parts: \
Grab, Store, Present, Screen, Process

### Source

Abstract the real information source.

Output what it got is the only main feature it has.. \
Source will has a feature to get (**new**) InformationPackage.

### DataStorage

It's your free to store your data at the place you like.

Local Filesystem, WebDAV, HTTP ... whatever it is, DataStorage \
will make sure they act the same.

Besides, DataStorage makes a one-to-many map from data to storage. \
Which means you can store a picture in multiple places, for robustness.

Anyway, it abstracts the data (characters, video, audio ...), implement the CRUD and even more about data.

### InformationPackage

As the definition, information is the processed, contextualized, meaningful data. \
But why a package, to pack information together, pack what information?

Considering the next step —— Process Information, we should combine related data together \
so as to provide a context for processing information.

Where can we have an InformationPackage? \
Typically, from the Source since it's the entrance of information. \
But you are allowed to build one by yourself.

### Information

Then, what is the element in InformationPackage? \
Of course is the information:

### Filiter

Filiter the Information Packages.

### PreProcessor

### Collector

Combine source, storage, filiter, preProcesser together, and run automatically.
