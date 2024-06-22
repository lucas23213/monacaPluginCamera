// This is a JavaScript file
$(document).on("click", "#camera",function(){

navigator.camera.getPicture(onSuccess, Onfail , { quality: 50,
    destinationType: Camera.destinationType.FILE_URI,
    
    correctOrientation: true,
    saveToPhotoAlbum: true
    
    
    });

function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because:' + message);
}

});
