# Kataskopeia

## The Chrome Extenions that *safely* spies on you

## Purpose

If I was an evil person and I got you to download my Chrome extension, exactly how much information could I discover and how much damage could I do? This question could be answered by a Google search, but the answers that I found weren't enough to satisfy my curiosity. I want to know exactly what APIs are being used, what the data looks like, and I want to be able to test some of the limits that threat actors might be using to create malicious Chrome extensions.

Kataskopeia (the Greek word for "espionage") is made as an experiment to explore the threat landscape of Chrome extensions and demonstrate the potential security concerns when downloading them.

## How It Works

The following is a high level overview of how the extension works:
* Allow user to toggle which data they want the extension to show.
* Use a [Chrome API](https://developer.chrome.com/docs/extensions/reference/) to collect the data.
* Display the data in JSON format at the bottom of the Chrome extension popup.
* No data will be collected/stored by Kataskopeia.


## Tool Usage

In the screenshot below, you can see the user interface that is used to select the information
to be shown about the user's system.

![Picture showing the UI of the Kataskopeia](./photos/1.png)

Upon clicking the "Show" button corresponding with the "Show Storage Information" label, the
user's information is displayed in JSON format at the bottom of the extension.

![Picture showing the censored output of one the user's storage capacity as displayed by the extension](./photos/1.png)




## Installation Steps

1. Clone the repository
```
git clone https://github.com/ally-petitt/Kataskopeia.git
```
2. Load in the chrome extension following these steps from [the Chrome documentation](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked)
> To load an unpacked extension in developer mode:
>
>    Go to the Extensions page by entering chrome://extensions in a new tab. (By design chrome:// URLs are not linkable.)
>        Alternatively, click on the Extensions menu puzzle button and select Manage Extensions at the bottom of the menu.
>        Or, click the Chrome menu, hover over More Tools, then select Extensions.
>
>    Enable Developer Mode by clicking the toggle switch next to Developer mode.
>
>    Click the Load unpacked button and select the extension directory.
>    Extensions page (chrome://extensions)
>
>Ta-da! The extension has been successfully installed. Because no extension icons were included in the manifest, a generic icon will be created for the extension.

3. Optionally pin the extension to your Chrome (or chromium-based) toolbar and enjoy!


## Current Support

This extension currently displays information about
* CPU model, architecture, and usage
* Storage capacity, ID, partition location, and type
* Total memory and available capacity
* Number of displays, screen resolution, and metadata related to display
* Tabs open, favicon and website URI in each tab, tab state, and related metadata
* Synced devices
* Information on recently closed tabs

While this is a start, these information gathering features are not enough to fully showcase 
the information that can be collected through chrome extensions. Additionally, information
gathering is not the only way that chrome extensions can be used maliciously. For instance,
they can be used to manipulate the DOM on the page and carry out phishing attacks or, as [Matthew Bryant](https://github.com/mandatoryprogrammer/)
has shown in his Cursed [Chrome Extension](https://github.com/mandatoryprogrammer/CursedChrome), they can be used to turn a victim's browser 
into a fully-functional HTTP proxy and perofrm a man-in-the-browser (MiTB) attack.


With that in mind, I would like to expand on the current capability of Kataskopeia to help
bring more attention to these security issues.

### Future Additions

Moving foward, this is a list of features that are in the works:

* Desktop Capture
* Key logging
* Login State
* Sessions
* Cookies
* Web navigation
* Search History 
* Get OAuth2 Access tokens with Identity API

