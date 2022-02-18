class Participant 
{
   constructor(bengali_name, english_name)
   {  
      console.log(bengali_name, english_name);

      this.english_name = english_name;
      this.bengali_name = bengali_name;
      
      let first_name = english_name.split(' ')[0].toLowerCase();
      console.log(first_name);
      this.image_file = `./assets/${first_name}_12x9.jpg`;
      console.log(this.image_file);
   }
}

const zoo_participants = 
[
   // Rounak
   new Participant('রৌনক মণ্ডল', 'Rounak Mandal'),
   // Oyon
   new Participant('ইরফান অয়ন চৌধুরী', 'Irfan Oyon Chowdhury'),
   // Oishika
   new Participant('ঐশিকা সরকার', 'Oishika Sarkar'),
   // Arfia
   new Participant('আরফিয়া আমরিন','Arfia Amreen'), 
   // Noureen
   new Participant('নওরীন চৌধুরী', 'Noureen Chowdhury'),
   // Yusra
   new Participant('ইউসরা জুনাইরাহ মাসুম', 'Yusra Zunairah Masum'),
   // Trinish
   new Participant('ত্রিণীশ চ্যাটার্জী', 'Trinish Chatterjee'),
   // Amelie
   new Participant('আমেলি রায়', 'Amélie Roy'),
   // Samina
   new Participant('সামিনা নাহার ডোসানি', 'Samina Naher Dossani'),
   // Raheel
   new Participant('রাহিল হাসান', 'Raheel Hasan'),
   // Agniv
   new Participant('অগ্নিব দাস', 'Agniv Das'),
]


function drawParticipants(arrOfParticipants)
{
   let participantListDiv = document.createElement('div')
   participantListDiv.className = 'participant_list';

   let participantListHeaderText = document.createElement('h3');
   participantListHeaderText.textContent = 'Participants (অংশগ্রহণকারী)';
   participantListDiv.append(participantListHeaderText);

   arrOfParticipants.forEach(element => {
      let participantDiv = document.createElement('div');
      participantDiv.className = 'participant';
      // Set the image
      let img = document.createElement('img')
      img.src = element.image_file;
      img.alt = element.english_name;
      // Set the English Name
      let divEnglishName = document.createElement('div');
      divEnglishName.className = 'nameEnglish'
      divEnglishName.textContent = element.english_name;
      // Set the Bengali Name
      let divBanglaName = document.createElement('div');
      divBanglaName.className = 'nameBangla'
      divBanglaName.textContent = element.bengali_name;

      participantDiv.append(img);
      participantDiv.append(divEnglishName);
      participantDiv.append(divBanglaName);

      participantListDiv.append(participantDiv);

   });

   return participantListDiv;
}

function drawClass(item1, item2, item3, item4, arrOfParticipants)
{
   // Get the container selector
   let containerDiv = document.querySelector('.container');   
   
   // Item Info
   let itemInfoDiv = document.createElement('div');
   itemInfoDiv.className = 'itemInfo';      
   
   // Item Name (English)
   let englishNameElem = document.createElement('h1');
   englishNameElem.textContent = item1;
   itemInfoDiv.append(englishNameElem);   
   // Item Name (Bengali)
   let bengaliNameElem = document.createElement('h2')
   bengaliNameElem.textContent = item2;
   itemInfoDiv.append(bengaliNameElem);

   // Class Name (English)
   let classNameEnglishElement = document.createElement('h3')
   classNameEnglishElement.textContent = item3;
   classNameEnglishElement.className = "classNameEnglish";
   itemInfoDiv.append(classNameEnglishElement);
   
   // Class Name (Bengali)
   let classNameBengaliElement = document.createElement('h3')
   classNameBengaliElement.textContent = item4;
   classNameBengaliElement.className = "classNameBengali";
   itemInfoDiv.append(classNameBengaliElement);

   
   // Participants
   let participantListDiv = drawParticipants(arrOfParticipants);
   
   containerDiv.append(itemInfoDiv);
   containerDiv.append(participantListDiv);
   containerDiv.append(specialThanksDiv);
}

drawClass("Digital Storyboard: A Ray of Hope - The Zoo's New Life",'(ডিজিটাল স্টোরিবোর্ডঃ আশার আলো - চিড়িয়াখানার নতুন জীবন)','Class: Kokil, Tia, Eagle', '(শ্রেণীঃ কোকিল, টিয়া, ঈগল)', zoo_participants);
