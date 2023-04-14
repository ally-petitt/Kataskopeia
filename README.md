# Kataskopeia

## The Chrome Extenions that *safely* spies on you

## Purpose

If I was an evil person and I got you to download my Chrome extension, exactly how much information could I discover and how much damage could I do? This question could be answered by a Google search, but the answers that I found weren't enough to satisfy my curiosity. I want to know exactly what APIs are being used, what the data looks like, and I want to be able to test some of the limits that threat actors might be using to create malicious Chrome extensions.

Kataskopeia (the Greek word for "espionage") is made as an experiment to explore the threat landscape of Chrome extensions and demonstrate the potential security concerns when downloading them.

## To Be Added

This is the general idea of the Chrome extension:
* Allow user to toggle which data they want to allow to be collected on them.
* Store the data in a file on their **local** machine (no command and control center) so they can view it on their own.
* Allow them to set a file/directory to store data in within `options.html`.
