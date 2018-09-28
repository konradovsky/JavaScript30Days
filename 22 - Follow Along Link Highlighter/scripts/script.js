(function(){

    // Select all "a" tags from html and place in an array
    const triggers = document.querySelectorAll('a');

    // Add a new element in const highlight
    const highlight = document.createElement('span');
    
    // Add css class to the span element
    highlight.classList.add('highlight');

    // Add ready element to the document object model in body
    document.body.append(highlight);


    function highlightLink() {
        
        // Get the coordinates where the link take place 
        const linkCoords = this.getBoundingClientRect();

        // The cords object is taking needed properties for locating and applying styles.
        const cords = {
            width: linkCoords.width,
            height: linkCoords.height,
            top: linkCoords.top + window.scrollY,
            left: linkCoords.left + window.scrollX
        }
        
        // Applying the measures for width and height;
        highlight.style.width = `${cords.width}px`;
        highlight.style.height = `${cords.height}px`;

        // Transofming (move) the highlight (span with styles) to the right position
        highlight.style.transform = `translate(${cords.left}px,${cords.top}px)`;
      
    }

    // Iterate through "a" tags elemnt and triggers a function on hover
    triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));

})();