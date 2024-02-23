# Prop-Drilling


- Before we begin, how do you think one should manage state :

    - Keep everything in the top level component.
    - Keep everything as low as possible. [At a Low Common Ancestor of child that need a state.]

- we need to push it down as much as possible.

  Note : `Main purpose of getting away from prop drilling is, making code look clean. Not to avoid rerender.`
  
  Alternate : `Context-API.`
