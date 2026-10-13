let defaultBackground, defaultText;

window.onload = function() {
  const imageDiv = document.getElementById("image");
  defaultBackground = imageDiv.style.backgroundImage;
  defaultText = imageDiv.textContent;
};

function upDate(previewPic) {
  console.log("upDate function called");
  console.log("Preview image alt:", previewPic.alt);
  console.log("Preview image src:", previewPic.src);

  const imageDiv = document.getElementById("image");
  if (!imageDiv) {
    console.error("Div with id 'image' not found");
    return;
  }

  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
  imageDiv.textContent = previewPic.alt;

  console.log("Updated div background-image to:", imageDiv.style.backgroundImage);
  console.log("Updated div textContent to:", imageDiv.textContent);
}

function showCaption(container) {
  const caption = container.querySelector('.caption');
  caption.style.opacity = '1';
}

function hideCaption(container) {
  const caption = container.querySelector('.caption');
  caption.style.opacity = '0';
}

function undoUpdate() {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = defaultBackground;
  imageDiv.textContent = defaultText;
}
