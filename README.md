# Kataskopeia

## The Chrome Extenions that *safely* spies on you

## Purpose

If I was an evil person and I got you to download my Chrome extension, exactly how much information could I discover and how much damage could I do? This question could be answered by a Google search, but the answers that I found weren't enough to satisfy my curiosity. I want to know exactly what APIs are being used, what the data looks like, and I want to be able to test some of the limits that threat actors might be using to create malicious Chrome extensions.

Kataskopeia (the Greek word for "espionage") is made as an experiment to explore the threat landscape of Chrome extensions and demonstrate the potential security concerns when downloading them.

## How It Works

This is the general idea of the Chrome extension:
* Allow user to toggle which data they want the extension to show.
* Display the data in JSON format in a window at the bottom of the Chrome extension popup.
* Absolutely no data will be collected/stored by Kataskopeia.


Note that some data collection features of the APIs were left out. If you would like to learn
more about the Chrome APIs and the information that they can collect, reference the 
official documentation (here)[https://developer.chrome.com/docs/extensions/reference/].

## Installation Steps

1. Clone the repository
```
git clone https://github.com/ally-petitt/Kataskopeia.git
```
2. Navigate to `chrome://extensions` in your chrome (or similar) browser.
3. Enable developer mode and select "Load Unpacked".
4. Load in the `Kataskopeia` folder.
5. Enable the extension if it's not already and enjoy!
