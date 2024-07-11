![Am i responsive?](https://lh3.googleusercontent.com/pw/AP1GczNPvGJ-bhJl8-8Zizq9N8AcvVNmHODLdHRghr6RAz2sJ0cwnRnc35RVJ8pbDcidT6KGfdOUF-QTviDFHyGmcm6MfD3PsM8JaPBVGcC7opWMnWQ7WyM=w2400)

# Northern Lights Odyssey


![Test results from lighthouse](https://lh3.googleusercontent.com/pw/AP1GczOJtJzgG26nmyhrAzoczZyp5Q7GUvXCH_ZjF4RX8lXlqBfeZujWxp5JucYxpffDuW3el-PSU2oerKlnBMhahn4Hg_XGd-CC4FOjGuT5ZHekWQXHA1c=w2400)


Begin your journey in the frozen tundras of northern Sweden.


## About the project

This is the second iteration of my html project. The original was scrapped after a late night conversation with
a friend of mine.

This websites purpose is to evoke a want for adventure, and empower those who already seek adventure. The website
seeks to be a place where one can find all the resources they would need when traveling to the largest city in northern
Sweden, Luleå. It gives both options for outdoors and indoors activities, and provides tips on what to bring if you are
seeking adventure.

### Features

- Side navigation that is both easy to find and out of the way
- Animated interactions while howering over images
- Direct links to several resources and activities hidden with CSS
- An almost purely CSS slider, with automatic sliding!
- A help page for those seeking to travel to Luleå
- Maps that showcase popular skiing locations
- A checklist for scooter entustiast, focused on safety while out in the wild


### Features to be implemented
I unfortunately didn't have time to figure out all of the features i wanted to have.
- Clickable links in the slider.*
- Hover features for the events page images.*
- Weather and temperature being showed and updated live.
- More information in the "While in Sweden" page.


## Testing
- Ran through both the CSS validator and HTML validators
      [CSS VALIDATOR](https://jigsaw.w3.org/css-validator/) [HTML VALIDATOR](https://validator.w3.org)
- Lighthouse score all in the greens.
- Tested features and layout on mobile and mobile emulator.

### Bugs
- Encountered a bug where slider was offset to the left side of the screen, despite all CSS rules pointing towards the middle.
      - Reworked rules several times to fix this issue
- While trying to add overlay to the images in events, the overlay kept being offset towards the top of the page, and was way bigger than
  it should have been. I tried every method i could find, used several different AI's to check the code to see if i was missing something,
  but was eventually forced to scrap the overlay due to time.
- Had an issue where the h2 element at the top of index.html was being considered LCP, contributing to 5200ms delay in rendering. For whatever
  reason, removing the h2 helped, but removing the CSS rules targeting it did not.
      - Redid the CSS for the h2 element to optimize performance. To combat the remaining rendering delay, i compressed the images on the site.

### Unsolved bugs
- The footer text in the events page is smaller than it should be. I believe that it is most likely caused by the CSS rules targeting the body,
  as these rules where necessary for the slider, but caused a lot of other issues while trying to add other styles to the page.
- While not a bug, the image background of the "while in sweden" page stretches when revealing the details element content. I tried several different
  alternatives, but didn't find one that was satisfactory. Due to this being mostly an issue on mobile dimensions, i ended up changing the text color
  to something more readable when the image stretches.


### Deployment

This site was deployed using Github pages. Follow the steps below to deploy:
- In the Github repository, navigate to the settings tab.
- From the source section drop down, select the master branch.
- Once the master branch has been selected, the page provided the link to the deployed website.
Live link to website [here](https://saintcill.github.io/project-website-2/)


## Credits

### Content
- Side nav and overlay design by [Greatstack](https://www.youtube.com/watch?v=lBfshkPlMW8&t=2018s)

### Media

- Menu icon from pixel perfect
- Close menu icon by ariefstudio
- Museum image on home page from visit luleå
- Snowmobile image on home page from luleå travel
- Sled image on home page from heyhusky.com
- Skiing image on home page from visit luleå
- Clarion spa image on home page from Strawberry.se
- Event photos sourced from the respective events site
- "While in sweden" photos from national geographic
- Packing background image by lindsey shorter
- Shopping background image from hotels.com
- Banner image from minddig 
