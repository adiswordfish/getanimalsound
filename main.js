
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2KTqX_ZNw/model.json', modelReady)
    // console.log("test")
    // console.log(classifier)
}

function modelReady(){
    classifier.classify(gotResults);
}
// dog = 0
// cat = 0
function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        document.getElementById("result_label").innerHTML = 'I can hear -'+ " " + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy -'+ " " + (results[0].confidence*100).toFixed(2)+"%";
        console.log(results[0].label)

        img = document.getElementById("img")

        if(results[0].label == "Meowing"){
            img.src = "cat-.jpg"
        }
        if(results[0].label == "Barking"){
            img.src = "322868_1100-800x825.jpg"
        }
        if(results[0].label == "Background Noise"){
            img.src = "oreja.png"
        }
    }
}



