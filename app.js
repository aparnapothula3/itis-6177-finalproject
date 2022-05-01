require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const ms = require('mediaserver');
const fs = require('fs')


app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get('/audio',function(req,res){
    ms.pipe(req, res, './testaudio.wav');
  });

app.post("/out",(req,res)=>{

    // Create the speech synthesizer.
    (function() {

        "use strict";
    
        var sdk = require("microsoft-cognitiveservices-speech-sdk");
        var readline = require("readline");
    
        //var key = "d6761468257a4a3aa580d4114407be62";
        var region = "eastus";
        var audioFile = "testaudio.wav";
    
        const speechConfig = sdk.SpeechConfig.fromSubscription(process.env.KEY, region);
        const audioConfig = sdk.AudioConfig.fromAudioFileOutput(audioFile);
    
        // The language of the voice that speaks.
        speechConfig.speechSynthesisVoiceName = "en-US-JennyNeural"; 
    
        // Create the speech synthesizer.
        var synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
        var input = req.body.audio
          // Start the synthesizer and wait for a result.
          synthesizer.speakTextAsync(input,
              function (result) {
            if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
              console.log("synthesis finished.");
            } else {
              console.error("Speech synthesis canceled, " + result.errorDetails +
                  "\nDid you set the speech resource key and region values?");
            }
            synthesizer.close();
            synthesizer = null;
          },
              function (err) {
            console.trace("err - " + err);
            synthesizer.close();
            synthesizer = null;
          });
          res.json("Text got converted to speech:Please navigate to /audio")
        
    
    }());
})

app.get("/speechtotext",(req,res)=>{
    const sdk = require("microsoft-cognitiveservices-speech-sdk");
   // var key = "d6761468257a4a3aa580d4114407be62";
        var region = "eastus";
    const speechConfig = sdk.SpeechConfig.fromSubscription(process.env.KEY, region);
    speechConfig.speechRecognitionLanguage = "en-US";
    (function () {
let audioConfig = sdk.AudioConfig.fromWavFileInput(fs.readFileSync("testaudio.wav"));
        let speechRecognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);
    
        speechRecognizer.recognizeOnceAsync(result => {
            switch (result.reason) {
                case sdk.ResultReason.RecognizedSpeech:
                    console.log(`RECOGNIZED: Text=${result.text}`);
                    res.send(`RECOGNIZED: Text=${result.text}`)
                   // res.json(result.text)
                    break;
                case sdk.ResultReason.NoMatch:
                    console.log("NOMATCH: Speech could not be recognized.");
                    break;
                case sdk.ResultReason.Canceled:
                    const cancellation = sdk.CancellationDetails.fromResult(result);
                    console.log(`CANCELED: Reason=${cancellation.reason}`);
    
                    if (cancellation.reason == sdk.CancellationReason.Error) {
                        console.log(`CANCELED: ErrorCode=${cancellation.ErrorCode}`);
                        console.log(`CANCELED: ErrorDetails=${cancellation.errorDetails}`);
                        console.log("CANCELED: Did you set the speech resource key and region values?");
                    }
                    break;
                
            }
            
        
            speechRecognizer.close();

            
        });
    }())


})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
