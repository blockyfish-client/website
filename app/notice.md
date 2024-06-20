Greetings, Blockyfish users,
Thank you for using Blockyfish in these past 2 years. I am very grateful for your support. As most of you know, I have discontinued the project. This decision was not made lightly, and it comes after careful consideration of various factors.

The development of Blockyfish was merely a hobby for me. And now, I have reached a point where continuing the development is no longer feasible. I am unable to actively work on the development of Blockyfish, and as a result, the project has not seen significant progress in the past while.

# A short story

## Original v3 hack client

I first had the idea of creating a hack client for Deeeep.io back in 2021. This was when Deeeep.io v3 was still around. The process was simple: copy the bundle.js file, modify it, and use the Asset Swapper extension to swap in the new bundle.js file. Soon, I created a website (<https://hacked-deeeep.glitch.me>) in order to automate this file swapping process. This was possible because in Deeeep.io v3, Cross-Origin Resource Sharing (CORS) restrictions were not enforced. This meant that you could connect to the game servers and make requests to the API from any external website.

![v3 hack client](/farewell-notice/title.png)
![v3 hack client](/farewell-notice/game.png)

## Blockyfish

With the release of v4, Deeeep.io's frontend was rewritten. This time, it was no longer a single-page application, which meant that the old method of copying the source files, modifying them, and uploading them as a separate website was no longer possible. More over, Fede had implemented CORS restrictions on the API, which meant requests could not be made to the API from outside of the Deeeep.io domain.

Another notable change in v4 was that the game object was no longer exposed. So in order to expose the game object to a global scope, you had to redirect the resource files to a modified version. So because of this, the hack client v4 was made as a desktop application, built with [Electron.js](https://www.electronjs.org).

Initially, Loop, also known as CapThat or cantevenread, was the developer of Blockyfish and had come up with its name. Shortly after, I took over the development of the hack client and released the first version on August 1st of 2022.

In Blockyfish v3.0.0, which was released on December 24th of 2023, a new script injection method was added. This method was developed by Noam, also known as TheJ or nostopgmaming17. This injection method no longer required the source file to be swapped, which made the hack client much more robust against updates.

![Blockyfish](/farewell-notice/blockyfish.png)

# fsploit

With Noam's new injection method, the Electron app was no longer necessary. Instead, a simple Chrome extension would be able to achieve the same functionality. This meant that instead of having users download a standalone Chromium browser (that is essentially what an Electron app is), they could just install a Chrome extension or a Tampermonkey script. This, along with other factors, have led me to decide to discontinue Blockyfish.

The new solution, **fsploit**, can be easily updated and works every platform that supports Chrome extensions or userscripts. This meant that one codebase could be used on Windows, MacOS, Linux, and Android devices (sorry iOS and iPadOS users).

# What's next?

Though I will not be the main developer of fsploit, I will still support the project. Noam and I will likely help Mahdi, the developer of fsploit, maintain and improve the project. We will also ensure that the distributed code is not malicious (Mahdi's track record is not exactly the best).

On June 18th of 2024, Fede posted the following message:

> When the next update (Swampy Shores) is released, code will be added that will detect 3rd party clients and kick the users, and ban their in-game accounts if they are logged in. If you are using them, remember to stop before the update is released.

This, obviously, means that more work will have to be done in order to bypass this system. Despite this, I believe that fsploit will persist for the foreseeable future.

If you have read through this whole thing, yay, thank you for reading this! I hope you all have enjoyed using Blockyfish in these past 2 years. Make sure to check out fsploit 😁
