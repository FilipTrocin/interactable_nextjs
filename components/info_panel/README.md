# Info Panel 
This directory contains the content for the 'info panel' available at the top of each article.

## Structure
This section describes the files and directories present within the directory 


- `icons` directory
  - Contains graphical icons used within the info panel 


- `*.js` files
  - whose name must be the same as the corresponding article in the [articles](../articles) directory.
  - must be in the following format:
  ```json
  export const testimonials =
      [
          {
           icon: "../info_panel/icons/<ICON NAME>.svg",
           title: "<TITLE>",
           desc: "<DESCRIPTION>"
          }, 
        
        ...
      ]
  ```