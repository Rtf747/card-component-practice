# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![Screenshot 2021-12-27 at 13-56-59 Card Component](https://user-images.githubusercontent.com/10404257/147499937-8d54465e-b927-4380-9052-8a286884973b.png)

### Links

- Solution URL: [My solution](https://github.com/Rtf747/card-component-practice/tree/response)
- Live Site URL: [live site URL here](https://rtf747.github.io/card-component-practice/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

When using the mobile version of this website from the Google Chrome browser, I noticed that it exhibited strange behavior. When I made a click or touch on the screen, the text was selected as you can see in the following screenshot:

![photo_2021-12-23_12-48-28](https://user-images.githubusercontent.com/10404257/147500655-ad5c7d6c-9ac0-4081-8320-046e25de9aaf.jpg)

After doing some research, I realized that this behavior could be managed by modifying the Touch To Search feature in Chrome for Android.

There are several methods to achieve the task, but I preferred to use the following:

```html
<div className='main-container' tabindex='-1'>
```

Adding the tabindex attribute as indicated in this article https://developers.google.com/web/updates/2015/10/tap-to-search I was able to obtain the expected behavior.

### Useful resources

- [w3schools](https://www.w3schools.com/howto/howto_css_image_overlay.asp) - I found it very useful as it helped me to give a hover effect to the main image of this challenge with pure css.

## Author

- Frontend Mentor - [@Rtf747](https://www.frontendmentor.io/profile/Rtf747)
