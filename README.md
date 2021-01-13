<h1>Pattern App</h1>
<h2>Prerequisites</h2>
<a href="https://www.reactjs.org">React</a><br></br>
<h2>Overview</h2>
<p>
The goal of this application was to make a tool that would make patterns. The concept of patterns comes from the SVG attribute which is aptly called pattern. The app had a goal of also being interactive with the user in order for the user to choose from a variety of different boxes that had an SVG path inside of it. The pattern maker was a 2x2 set of tiles that would be replicated on the main pattern area. In addition to the patterns that the user can make, some more features were added to adjust the color palette of the tiles or the color of the background pattern area. In total, it is a fun and innovated way of making custom designs and patterns that incorporates React into it.
</p>
<h2>Getting started</h2>
<p>
Follow the instructions below:
</p>

```
$mkdir demo
$cd demo
$git clone // copy and paste the git repo //
```

<h2>Project Setup</h2>
<h3>Technologies and Techniques</h3>
<p>
In this project, the main technologies and techniques that made it work was React, SVG and the ability to drag and drop. 
</p>
<h3>File and Folders</h3>
<p>
This project made use of some important hooks within React to make it work properly. The main hook that helped out was the useContext hook. This allowed data from a central place needed for multiple components to be accessed as needed. This was applicable for the tile info and the colors used within the mosiac area.
</p>
<h4>Helper files</h4>
<p>
The colors and data files in the src folder were helpful in reducing the amount of code used in the components and also allowed a central location to update, modify, delete or get the data from the arrays. The data file had the information for the tiles. The main piece of information was the path which would eventually be used within the tiles. The colors file held the arrays that would be available to the user in the drop down lists. They consisted of an array of colors for the tiles and a list of colors for the background.
</p>
<h4>Components</h4>
<p>
The components were for the form, board, mosiac, pattern and tile. The form was the components that had the drop down lists for the colors. The board component was for the tiles to be selected by the user. The pattern component was the 2x2 tile area that would be used as the main replicator for the pattern. The mosiac component made the design made from the pattern component. The tile component was the individual list of tiles that came through in the array.
</p>
<h2>Conclusion</h2>
<p>
This was a fun project as it was creative and made use of the lessons recently learned. There are some areas for improvement, but this will do for now. I'm happy with the final outcome as it delivers on the base goal that was established at the beginning of the project.
</p>
