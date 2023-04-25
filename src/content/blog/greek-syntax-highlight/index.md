---
title: 'A New Reading Experience for Ancient Greek'
description: 'In which I apply programming language ergonomics to&nbsp;a&nbsp;dead&nbsp;tongue'
pubDate: '2023-03-22'
---

If you’re like me and you’re learning Ancient Greek, you’ve probably had an experience like this: 

You read and re-read a big, chunky sentence from your textbook — maybe it’s one of those convoluted quotes from Herodotus (hi Athenaze, still love you). You try to look for the verbs, but it’s hard because you haven’t yet memorized the aorist nominative neuter plural participle, *you wicked child*. You see a word in ον but you’re not sure if that’s a 3<sup>rd</sup> person plural imperfect, an accusative masculine singular substantive or an nominative neuter singular participle. After learning about the 3<sup>rd</sup> declension, the faith you had in your own language skills has fallen off a cliff. It certainly doesn’t help that your textbook is in *freaking Italian*. A few minutes later, you give up.

Fret no longer. Over the past month, I have been working on new kind of reading experience for AG. Today, I am happy to share it with you. I call it **Dactyl** ©. You can give it a try over [here](/read/herodotus/historiae/11).

## The science of syntax highlighting 
First and foremost, Dactyl brings syntax highlighting to Ancient Greek. This is a well-established feature of coding environments, but was lacking from the AG community until now. For programmers, syntax highlighting makes the structure of the program much more obvious, which [drastically improves the speed of comprehension](https://ppig.org/files/2015-PPIG-26th-Sarkar1.pdf). Likewise, syntax highlighting for AG makes explicit the structure of each sentence. The verb and its arguments are all easily spotted. This is especially important when you’re attacking a language where word order is almost completely free — seamlessly switching from SOV to OVS, to SVO, and so on. Crucially, this is done in a non-intrusive way — you’re still reading Greek, not staring at an abstract grammar tree.

According to the [input hypothesis](https://en.wikipedia.org/wiki/Input_hypothesis), language acquisition only happens at the subconscious level, through the ingestion of large amounts of *comprehensible* input. As such, Dactyl is designed to get out of your way and let you enjoy the Greek text by itself. 

## How to use Dactyl effectively
Only when you run against a wall — when you can no longer *comprehend* the input — does Dactyl step in. 

First, you can hover on any word to see its *dependencies*. If that word is a noun, its dependencies will include any article and adjectives that belong to it. If it’s a verb, it will include all its arguments (subject, direct object and indirect object).

Second, if you click on any one word, you will see a small popup with a short definition, its grammatical characteristics (case, gender, tense, etc.) and its base form (its *lemma*).

I must stress that these features should be used with moderation. If your goal is to improve your language proficiency, you should aim for texts that match your current reading skills. Remember that language is acquired at a subconscious level, and [trying to solve a sentence like it’s a jigsaw puzzle won’t do you much good](https://www.youtube.com/watch?v=IIAdHEwiAy8).


## The nuts and bolts
To generate accurate syntax-highlighted AG, one needs carefully annotated data -- so-called *treebanks*. You can find these treebanks [here](https://perseusdl.github.io/treebank_data/) and [here](https://perseids-publications.github.io/gorman-trees/). I only wrote a few hundred lines of Python to convert those treebanks into HTML.

## Next steps
Stay tuned for updates! Here are some future pathways I'd like to explore if there's enough interest:
* More texts! More languages! Latin comes to mind, but there are treebanks available for a great many languages.
* Automatic annotation for *any* text, using NLP libraries like CLTK and SpaCy.
* More themes and customizations.
* And much more!
