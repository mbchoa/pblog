---
title: My thoughts on a 4.5 year tenure at a startup, Part II
description: Job retrospective part 2
date: 2022-08-18T07:00:27.448Z
---
### 6. Documentation done well is a game changer.

Over the years, I've seesawed back and forth between loving and despising documentation. Experience from the last job made me appreciate documentation a whole lot more. My documentation tool of choice these days is Notion. I house my ["Second Brain"](https://www.swyx.io/tiago-forte-second-brain) and my daily work journal. Two engineers on the team were exceptional at writing pragmatic and well-written documentation. Our backend system (Django) was several years old. All the engineers who architected and built the application were long gone. There was definitely a certain level of mystery when it came to attempting to understand how the system worked. Any time something broke was an opportunity for these two engineers to roll up their sleeves and (I imagine) rigorously document the problem, outcome, and eventual solution. Processes that required us to manually modify data or generate assets (eg: bulk promo code generation) became documentation. Is documentation another form of band-aiding the problem? Perhaps, it really depends on the context. But, to me, good documentation is a really powerful tool to multiply our velocity by uncovering the contextual "fog" and getting straight to the heart of a subject.

### 7. Pay very close attention to pain points.

It's easy for me to get comfortable. I'm also generally a very agreeable person and probably *too* agreeable if I'm perfectly being honest with myself. My natural tendency is to avoid conflict. Ironically, however, I think I have a high threshold for pain, both physically and mentally. What I mean by this is is that I may continue using a coding pattern despite it being rather painful to work with for the simple fact that I've become comfortable with using the coding pattern. It's become the modus operandi.

A good specific example of this from my previous job was the usage of redux-sagas for our data fetching needs on the client-side. The library and tech was new to me when I joined the company, but it was the de facto accepted way of handling data fetching. ES6 generators? Sagas? These sounded awesome! It was a moderately difficult learning curve. There was definitely a bit of trial and error in the beginning to understand how to use the tool efficiently. Once it clicked and I got the hang of it, I was on autopilot, cruise control. It took a bit of shaking myself up to realize that it was actually a real PITA the write data fetching code with this tool. It also introduced a significant amount of bloat to our JavaScript bundles that were shipped to the clients. Every new feature introduced slowly increased the number of (kilo)bytes sent over the wire.

I'm still learning to pay close attention and identify the pain points in my workflow. I think this is an important skill to hone because I think it's what separates an average engineer from a great engineer. To know when to re-evaluate and make a decision to improve and **simplify** our work and make work be enjoyable instead of miserable.

### 8. Fail out loud.

### 9. Legacy code is not dogma.