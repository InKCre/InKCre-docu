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
3. [Camera](./where/real-life/camera.md)
4. [Brain, Mind](./where/real-life/brain.md)

## What to Gather

You might say, just grab all things down, make sure the information is complete and correct. \
That's right, in the stage of gathering, we should foucs on **Complete and Correct** first.

But it's not a wise way for following operations such as pre-processing, reading ...

Grab everything without a point will slow you down, you need to filter and select.

## How to Gather

**CHANGE IT, unclear**

It's the question about the time, method of gathering, it also need to be specialized.

Every source has different method to gather, techniqually and physically. \
Such as we can use things like Memos/Flow to gather our thoughts, use RSSReader to gather information from RSS ...

Whatever the source is, they have a minium unit, we named it Item. (TODO, not a good name)

## Overall Abstraction

In the module of gathering information, its interface is important.

Gather Information are consist of these parts: \
Grab, Store, Present, Screen, Process

### Source

Implement how to gather of the specific source.

Source only need to output what its get using InformationPackage.

Source will has a function to check if there's new InformationPackage.

### DataStorage

Local Filesystem, WebDAV, HTTP ... whatever it is, allow the data act the same.

### InformationPackage

It's a flexiable concept.

### Filiter

Filiter the Information Packages.

### PreProcessor

### Collector

Combine source, storage, filiter, preProcesser together, and run automatically.
