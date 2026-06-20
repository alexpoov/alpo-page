
# Idea

> [Design Squiggle](https://thedesignsquiggle.com/about) analogy explains why it is so hard to start the project - but don't worry, we will approach it step-by-step.

I start by asking basic questions:

* **What?** A website for my projects - both academic and photos. 
* **Why?** Several reasons: 
    - wrap up everything I know about IT into a single *sandboxy* project. 
    - dive into the interconnections between all the little things about design and development  
    - build a small and independent digital world that I can feel safe to express myself.
* **For whom?** First - for me: it is my hobby to play with this site. Second - to people that might be interested in what I'm doing: my family, friends, and current or potential colleagues.

# UX 

I want to pay special attention not only to how my website will look like, but how people will use it. Therefore, let's unravel what's written above...

## User Persona / Jobs to be Done

Even when a customer buys wheels, trucks, bearings and a board, all they really want is to learn to make tricks. The formula of JTBD is:

> "When [Circumstance], I want to [job], so I can [need/outcome] without [pain point]."

Now, let's try to apply this formula to each of ~~two~~ three main types of users in my website that I anticipate:

1. **Playground**. First, I'm doing it for myself. I want to develop a technological project from 0 to a stable and continuous thing that I will enjoy maintaining. I want to learn new stuff: visual storytelling and javascript, internet security, maps. I wanna stop playing videogames and start playing coding, basically. 

    * "When `I got a creative project (photos, design, etc)`, I want to `present it with maximum customization options`, so I can `share it with others` without `relying on external solutions`.

    * "When `I got a technical project`, I want to `integrate it in my system`, so I can `practice it` without `doing sandbox exercises`.

2. **Personal brand**. For those who work with me - my colleagues, employers, students and maybe even employees, - clearly structured and useful materials should be the priority. Presentations, code examples, links and ability to contact me. Additionally, I also would like to share work-in-progress stuff under restricted access.

    * "When `reading learning materials`, they want to `read / look / interact with it`, so they can `learn something new` without `reading papers or completing courses`.

    * "When `learning about me as a professional`, they want to `skim over my projects`, so they can `build an understanding of who am I` without `searching or contacting`.

3. **Diary**. People who are interested in my posts, photos, thoughts and projects. I'm not an influencer unfortunately, but I like sharing my emotions and experiences - and I have some hobby that I enjoy for more than a decade already. Importantly, there should be an option to translate text: not everyone speaks english.

Note: blogging won't really work in the scope of the website. I have a telegram channel for this, leave the website for a project space.

## Conceptual Model

Another framework that I really liked during my UX studies. It represents every object as a noun, action as a verb, and attribute as an adjective. The goal is to make the interaction design coherent between objects of the same nature. You can find the version for the website on [this spreadsheet](https://docs.google.com/spreadsheets/d/1Clvayl9yoJMd_yLsLn0FDXXEwthiAq2WW0XDpeX0QBs/edit?usp=sharing).

# Feature prioritization / MGMT

The last step is to understand in which order to create stuff. Milestones:

1. About me - landing page to start replacing old url everywhere
    - [x] write a content
    - [x] create a design 
    - [x] air it! (a lot more than you actually think cuz here the coding begins...)

2. 1st post 
    * upload and edit workflow 
        - [ ] converting from `.md`/`.rmd`/`.ipynb` to `.html` on my website (either pandoc or quarto)
        - [ ] editable from the phone
        - [ ] a cute `/cute-url-tail` 
        - [ ] custom yml tags for date, materials and access restriction
        - [ ] custom style

3. Gallery (get rest of job)
    - [ ] photo as a post, album as a collection
    - [ ] cross-linking system with posts: wrap photos with storytelling (not any roll but trips and occasionally)
    - [ ] metadata: rolls, camera, locations, development features

4. More posts 
    - [ ] collections of posts: how to structurise them? 
    - [ ] indexing of posts: words, dates, tags, abstracts
    - [ ] a feed with filtering

# UI 

## Inspiration 

Usually after identifying key needs, a competitor analysis comes into play. Instead, I just create a [moodboard](https://www.figma.com/design/f0XvBmAqp7cTOJLadFKCFH/alpo---the-world?node-id=0-1) where I'll store everything visual that I like: mostly typography, but also paintings or photos. 

<!-- reference to collage / scrapbook / junk journaling
e.g. https://rukodelnieradosti.blogspot.com/2021/12/blog-post_10.html -->

## Sketches & warframes

Based on what I collected for inspiration, I started drawing some layouts that I would be happy to see on my page. They're stored at [this tab in Figma](https://www.figma.com/design/f0XvBmAqp7cTOJLadFKCFH/alpo---the-world?node-id=14-97). In general I'll try to practice potential changes and improvements here for the start.

# Basic Webpage

Based on the warframes, I've created an html layout of the page. 

**Adaptive design**: although ["mobile-first"](https://developer.mozilla.org/en-US/docs/Glossary/Mobile_First) approach fairly gains its momentum, an understanding how exactly web interface block structure should translate into the touchscreen layout was one of the most unintuitive thing for me. 

1. For the first step I just filled them with a semi-transparent colour and tried to align them as close to the warframes as possible - both in web and mobile looks. 
2. Once we've achieved the proper layout, we can fill the page with the main types of content: images and text (with proper fonts). A long time of polishing how wide columns and photos could be for all types of screens.
3. Then we add the rest of the content, such as buttons, navbar, etc, and make sure the it doesn't break the existing result.
4. As for the last stem, we set up all the info on the head of html: metatags, favicons, language info, etc. 

Woila, the first version of the website is ready!

## HTML first topics

* structure of html pages: div in div in div
* time to think about classes
* metatags, favicons, etc

## CSS essential flavouring

* layout: display, margin/padding, positioning
* fonts: paid and open source, import and @font-face
* photo: how to fill/scale, round corners, quality/size tradeoff
* several hyperlinks: navbar, svg icons, blank tab opening