Webcam.attach("#camera");
camera = document.getElementById("camera");
Webcam.set({
width:350,
height:300,
image_format : 'png',
png_quality :90})

camera=document.getElementById("camera");


function take_snapshot(){
    Webcam.snap(function(data_uri){});
    document.getElementById("result").innerHTML='<img id="captured_image" src="' +data_uri+'"/>'}
console.log('ml5version:',ml5version); 
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/model.json',modelLoaded);

function  modelLoaded(){
    console.log('Model Loaded!');
}

function check(){
    img=document.getElementById('selfie_image');
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence;
    }
}