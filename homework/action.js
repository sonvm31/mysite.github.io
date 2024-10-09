// Function to update the display when an image is hovered over
function upDate(previewPic) {
    // Log to check if the event is triggering
    console.log("Event triggered: ", previewPic);

    // Log the alt and source of the previewPic
    console.log("Alt text: ", previewPic.alt);
    console.log("Source: ", previewPic.src);

    // Change the text of the element with id 'image'
    document.getElementById('image1').innerText = previewPic.alt;

    // Change the background image of the element with id 'image'
    document.getElementById('image1').style.backgroundImage = `url('${previewPic.src}')`;
}

// Function to reset the display to original state
function undo() {
    // Reset the background image
    document.getElementById('image1').style.backgroundImage = "url('')";

    // Reset the text of the div with id 'image'
    document.getElementById('image1').innerText = "Hover over an image below to display here.";
}