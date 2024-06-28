<br/>
<div align="center">

<h3 align="center">WuwaTools-ReactTS</h3>
<p align="center">
React/Vite TypeScript Project
<br/>
<br/>
<a href="https://wuwatools.web.app/">View Live Project</a>
</p>
</div>

## About The Project

![WuwaTools Screenshot](https://i.imgur.com/RKjr6kx.png)

This project was an excuse to learn the basics of TypeScript, naturally I end up spending more time wrangling with unrelated stuff, in this case being Drag & Drop.

Spent about 4 days bouncing between library to library. Eventually I settled with just using the regular Drag API which worked completely fine except for two issues; it didn't have animations and worst of all it had no sorting _(Can't easily re-arrange order within same row)_. This was a problem considering the use case being a tier list creator tool -- as I was about to throw myself at the mystical unknown topic of bounding boxes and whatnot I got a notification from github concerning DnD kit. Turns out [the guy](https://github.com/clauderic) has been rebuilding it from the ground-up to make it more accessible and released alpha packages and a showcase guide. [(Link to comment)](https://github.com/clauderic/dnd-kit/issues/1188#issuecomment-2161876989)

In short it's baller and it took 10-20 minutes to implement.

So anyways with that out of the way I'm not too certain if or what tool I want to do next. There's only so much effort I'm willing to put in for a study project which I'll probably never share with anyone. The major problem here is that Wuthering Waves does not have a public API so I have to write my own JSON file for data, this inherently means a whole bunch of data entry by looking at wikis or in-game info _(Without mentioning maintaining all of it between updates)_. Bit of a nightmare, so unless I develop a newfound passion for the game this project will see little updates.

### Built With

- [React 18.2.66](https://react.dev/)
- [Vite SWC](https://vitejs.dev/)
- [TypeScript 5.2.2](https://www.typescriptlang.org/)
- [TanStack Router](https://tanstack.com/router/latest)
- [@dnd-kit/react](https://next.dndkit.com/overview)
- [FontAwesome](https://fontawesome.com/)
- [html-to-image](https://github.com/bubkoo/html-to-image)
- [downloadjs](https://github.com/rndme/download)

### AES Keys for version 1.1 (From https://github.com/RealNath/wuwa-aes-archive)

- 0x43C51CC2369B9DD195EDCF426C78E30E99D7514DC14E8C03A831E128A3941010
- 0x52B3F2003A28C3145C98866BEECC3F884051140E03CC42946A89DB126AD55E9C

## Usage

- Go to https://wuwatools.web.app/
- Do stuff

## Contact

MGSimard - g.marcgs@gmail.com

Project Link: [https://github.com/MGSimard/WuwaTools](https://github.com/MGSimard/WuwaTools)

## Acknowledgments

- [Clauderic - (dnd kit)](https://github.com/clauderic)
