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

const tuntuni_participants = 
[
   // Shafqat   
   new Participant('শাফকাত জামান','Shafqat Zaman'),
   // Imam   
   new Participant('সৈয়দ শাফি ইমাম','Syed Shafii Imam'),
   // Rudoshi
   new Participant('রোদসী মহিমা', 'Rudosi Mohima'),
   // Rehan
   new Participant('আরেবুল হক রেহান','Areebul Haque Rehan'),   
   // Neel
   new Participant('রুদ্র নীল রাফায়েল','Rudhro Neel Raphael'),   
   // Samreen 
   new Participant('সামরীন চৌধুরী', 'Samreen Chowdhury'),
   // Zaayd
   new Participant('জেইড ফারুক', 'Zaayd Faruque'),
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

function drawClass(itemName, className, arrOfParticipants)
{
   // Get the container selector
   let containerDiv = document.querySelector('.container');   
   
   // Item Info
   let itemInfoDiv = document.createElement('div');
   itemInfoDiv.className = 'itemInfo';      
   // Item Name
   let itemNameElement = document.createElement('h1');
   itemNameElement.textContent = itemName;
   itemInfoDiv.append(itemNameElement);   
   // Class Name
   let classNameElement = document.createElement('h2')
   classNameElement.textContent = className;
   itemInfoDiv.append(classNameElement);
   // Participants
   let participantListDiv = drawParticipants(arrOfParticipants);

   containerDiv.append(itemInfoDiv);
   containerDiv.append(participantListDiv);
}

drawClass('Rhyme: Tatir Bari Banger Basha (ছড়াঃ তাঁতির বাড়ি ব্যাঙের বাসা)','Class: Tuntuni (শ্রেণীঃ টুনটুনি)',tuntuni_participants);
