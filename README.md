# itis-6177-finalproject
  # Text To Speech API 

## Introduction:
Developed a web application that can interface with the Microsoft Azure Text to Speech API service using NodeJS express.

Using TEXT TO SPEECH API I have created two end points that converts Text to Speech and Speech to Text.

**1.  Text to Speech:** Text to Speech API converts the provided text into speech.The API converts text into audio formats.
  
**Testing through UI:**

**Step 1:**Please visit the website [http://157.245.129.85:3000/](http://157.245.129.85:3000/) which redirects to Home page of the application.

![](https://lh4.googleusercontent.com/z809MK8wTPJLc0qIuoJ9aGkV29xyEne94ekzjw6bvXLls4XUfudLal43LgKVJJqdVZInx5Q9BnDwSbSIXxVQLRxwxvlUk6aNtKz3s77V4bFBtZv2R9pzIuiutY8enGXAYD6YVXwEo6rVEAyW7g)

**Step 2:**
 Please enter any input text which needs to be converted into the audio format.
#### Sample Input:
               I'm excited to try text to speech.
![](https://lh5.googleusercontent.com/MB66GRkseXMo3KpKqtryX2gM17mDxyOhyQz8sP3P9NzT36RiWj_N3yJU6Gfe25lSEVO_uU1jBrlYTfvxO-Mn0Mx_JwApnNofaGDmbvkhyiFh6afKSuqywAE09Qghp7d_lYxOquXlZis0M2BYTA)

**Step 3:**
After entering the Text press the submit button to download the audio file.

![](https://lh4.googleusercontent.com/JccZrfn5XOfv8U9t3TWJQ57BiHsHWX3GzOnXe9T38yAjVIaY6Ckrw9e2YzXOQGxI6bJs-WJFxQ8cjo_1NPHu3TdwwqeFPAI55lS_Q29IZLWG4lbCbjFC2EzJQJfAB6gWmxAnry4_qQWVOI8HsA)

As shown in the above screenshot testaudio.wav file got downloaded.

**2.  Speech To Text:**
    Now go to the end point [http://157.245.129.85:3000/speechtotext](http://157.245.129.85:3000/speechtotext) which displays the JSON output of the text which is converted from the generated audio file(testaudio.wav).

  
  

![](https://lh6.googleusercontent.com/jlhtxfojzUfM6NNCxAy772B1I-EmobbtsPD423EGu7tB0Q-b5oOvHL9fTGXLxtoaGUA1iOEOM2ch16O6YEHxielgEXf9-T3U9i9h2Zez36fE3XHD6eXtlLFFe_NfTbPh-SIXl7EqhoEVj0LhHA)

As shown in the above screenshot speech got converted to text.
**Testing through PostMan:
Text to Speech:**

1.  Go to [http://157.245.129.85:3000/out](http://157.245.129.85:3000/out)
   
2) Select POST request and select x-www-form-urlencoded under body.

3) Provide KEY as “audio” and VALUE as “I'm excited to try text to speech.”

4) Click send to preview and play the audio file.

![](https://lh4.googleusercontent.com/Qeha-iQGSG1H_EepxA4LXoAnNWQfm2GyWhEnwLJFoV1BWItb7O-9X3lcBbyhiJcfONrVkkc-ICX-o9HUpQ9I6xFqxAf0x_I0Jtl8-y9yX71GubkB9_VI41uHraF01Zr6P5r4avCeI6Tm-0Mavw)

5) We can also download the file by clicking the send and download as shown in the figure.  

![](https://lh5.googleusercontent.com/yjVYJOVU0xTt87v4mtCV7FQ5n2HiMU45tgOCADrTnrsH9Eyx6GAh_-bi6O7eM3sg0sf8aLg9EjBJzMUtX3ESXk79OOQI_f61yjlm5ktCOCcbzrHgTpz3miKLSp2elqYFzmw9jQUjEhDiszmLoA)

  

![](https://lh5.googleusercontent.com/2ZsnloTTS5E_1d87-84C1FTZrjKJpOkCg0i12ePMyeEiPcAEwstZeQXc6k_6Xtp4fun5eIeZvNjczshDS5RiqeyiPgPzChR00ocopWM1WijQN1Wn-PxGouNMl-xrJ_52ADPfYoxeEsS8Geq4lw)

  
  
  

![](https://lh6.googleusercontent.com/vvf07VIBaZaanI6Be3Zo37ttknl2NRH7fUCjVa4dJ5DqD0Qd9Oz36iBygzrGnBWG_z9rN-PlrAQYhvLBmhqbP2RJpj6Rg2S0vukXcZ6qrgAuEzNGCI24YK_IutjY_1bimNwypIkz8XVSmsBpiQ)

Now the file got downloaded in the system.

  

**Speech To Text:**

Go to the end point [http://157.245.129.85:3000/speechtotext](http://157.245.129.85:3000/speechtotext) and select GET which displays the JSON output of the text which is converted from the generated audio file(testaudio.wav).

![](https://lh6.googleusercontent.com/hDokQfodmUsNhgAsnhRjYNLTorQO6Whg_3ZJnac03aVD7U1xe1ci7j9p447YkZH08TLexu6jmd47hUtNNO5DFWAkgbnSX55X5m6iO1DM4BIBlpLPyVfwHg7TVMOtArxo0-qSH1DXF5xewmWNFg)

  

**Tools Languages and Frameworks used:**

NodeJs - The compiler of javascript
npm - nodejs package manager
Express js - Running web server and API framework
MicroSoft AzureText to Speech - To convert users text to speech
dotenv - loads environment variables from a .env file into the process
Digitalocean - Deploying the project

###  References: [https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech/](https://azure.microsoft.com/en-us/services/cognitive-services/text-to-speech/)
