let defaultBackground, defaultText;

window.onload = function() {
  const imageDiv = document.getElementById("image");
  defaultBackground = imageDiv.style.backgroundImage;
  defaultText = imageDiv.textContent;

 
  const containers = document.querySelectorAll('.image-container');

  containers.forEach(container => {

    container.addEventListener('mouseover', () => {
      console.log('Mouseover on:', container.querySelector('img').alt);
      upDate(container.querySelector('img'));
      showCaption(container);
    });


    container.addEventListener('mouseout', () => {
      console.log('Mouseout on:', container.querySelector('img').alt);
      hideCaption(container);
      undoUpdate();
    });

  
    container.addEventListener('focus', () => {
      console.log('Focus on:', container.querySelector('img').alt);
      upDate(container.querySelector('img'));
      showCaption(container);
    });


    container.addEventListener('blur', () => {
      console.log('Blur on:', container.querySelector('img').alt);
      hideCaption(container);
      undoUpdate();
    });
  });
};

function upDate(previewPic) {
  const imageDiv = document.getElementById("image");
  if (!imageDiv) {
    console.error("Div with id 'image' not found");
    return;
  }
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
  imageDiv.textContent = previewPic.alt;
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
