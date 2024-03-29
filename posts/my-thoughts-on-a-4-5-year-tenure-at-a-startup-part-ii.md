---
title: My thoughts on a 4.5 year tenure at a startup, Part II
description: Job retrospective part 2
date: 2022-08-18T07:00:27.448Z
---
### 6. Documentation done well is a game changer.

Over the years, I've seen a balance between loving and despising documentation. Experience from the last job made me appreciate documentation a whole lot more. My documentation tool of choice these days is Notion. I house my ["Second Brain"](https://www.swyx.io/tiago-forte-second-brain) and my daily work journal. Two engineers on the team were exceptional at writing pragmatic and well-written documentation. Our backend system (Django) was several years old. All the engineers who architected and built the application were long gone. There was a particular mystery when attempting to understand how the system worked. Any time something broke was an opportunity for these two engineers to roll up their sleeves and (I imagine) rigorously document the problem, outcome, and eventual solution. Processes that required us to modify data or generate assets (e.g., bulk promo code generation) became documentation. Is documentation another form of band-aiding the problem? Perhaps, it depends on the context. But, to me, good documentation is a potent tool to multiply our velocity by uncovering the contextual "fog" and getting straight to the heart of a subject.

### 7. Pay very close attention to pain points.

It's easy for me to get comfortable. I'm also generally very agreeable and probably *too* nice if I'm perfectly being honest with myself. My natural tendency is to avoid conflict. Ironically, however, I think I have a high threshold for pain, both physically and mentally.  I may continue using a coding pattern despite it being rather painful to work with because I've become comfortable with it. It's become the modus operandi.

A good specific example of this from my previous job was the usage of redux-sagas for our data fetching needs on the client side. The library and tech were new to me when I joined the company, but it was the de facto accepted way of handling data fetching. ES6 generators? Sagas? These sounded awesome! It was a moderately tricky learning curve. There was a bit of trial and error in the beginning, to understand how to use the tool efficiently. Once it clicked and I got the hang of it, I was on autopilot, cruise control. It took a bit of shaking myself up to realize that it was a real PITA to write data fetching code with this tool. It also introduced a significant amount of bloat to our JavaScript bundles shipped to the clients. Every new feature introduced slowly increased the number of (kilo)bytes sent over the wire.

I'm still learning to pay close attention and identify the pain points in my workflow. I think this is an important skill to hone because I think it's what separates an average engineer from a great engineer. To know when to re-evaluate and decide to improve and **simplify** our work and make work enjoyable instead of miserable.

### 8. Fail out loud.

T﻿his, I think, is always something I subconsciously avoid doing. I do not enjoy it when I can't figure things out. Often this manifested as long periods of radio silence from me. There's tons of leadership advice out there that would have me raising my hand and asking for help from my colleagues. This is another muscle that needs to be consistently trained.

### 9. Legacy code is not dogma.

Ideas, patterns, architectures, frankly everything about software is malleable. I'd say this point is a really important one to me because I need to regularly remind myself that what others have created before is not the be-all and end-all. The JavaScript ecosystem moves *fast.* I've come to accept this much for better or for worse. It's important for me to keep my ears close to the ground and listen for the currents and direction that the community moves towards.