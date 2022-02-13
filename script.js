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

const ekushe_participants = 
[
   // Oyon
   new Participant('ইরফান অয়ন চৌধুরী', 'Irfan Oyon Chowdhury'),
   // Bornomala
   new Participant('বিনীতা বর্ণমালা', 'Bineeta Bornomala'),
   // Adreesh
   new Participant('অদ্রীশ সিংহরায়','Adreesh Sinharay'), 
   // Ayana
   new Participant('আয়ানা রহিম', 'Ayana Rahim'),
   // Oishika
   new Participant('ঐশিকা সরকার', 'Oishika Sarkar'),
   // Arshia
   new Participant('আরশিয়া হাসান', 'Arshia Hasan'),
   // Totini
   new Participant('তটিনী তনু', 'Totini Tonu'),
   // Sunniva
   new Participant('সুনিভা হাবিব','Sunniva Habib'),   
   // Radiya
   new Participant('তাইরাত রাদিয়া', 'Tairaat Radiya'),   
   // Srijon
   new Participant('সৃজন পাল', 'Srijon Pal'),   
   // Noureen
   new Participant('নওরীন চৌধুরী', 'Noureen Chowdhury'),
   // Nirajana
   new Participant('নীরাজনা ঘোষ', 'Nirajana Ghosh'),
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

function drawClass(itemNameEnglish, itemNameBengali, arrOfParticipants)
{
   // Get the container selector
   let containerDiv = document.querySelector('.container');   
   
   // Item Info
   let itemInfoDiv = document.createElement('div');
   itemInfoDiv.className = 'itemInfo';      
   // Item Name
   let itemNameElement = document.createElement('h1');
   itemNameElement.textContent = itemNameEnglish;
   itemInfoDiv.append(itemNameElement);   
   // Class Name
   let classNameElement = document.createElement('h2')
   classNameElement.textContent = itemNameBengali;
   itemInfoDiv.append(classNameElement);
   // Participants
   let participantListDiv = drawParticipants(arrOfParticipants);
   // Special Thanks
   let specialThanksDiv = document.createElement('div');
   specialThanksDiv.className = "specialThanks";
   let specialThanksHeader = document.createElement('h3');
   specialThanksHeader.textContent = "Special Thanks (বিশেষ ধন্যবাদ)"
   let specialThanksLine1 = document.createElement('h4');
   specialThanksLine1.textContent = "Chamok Hasan (চমক হাসান)"
   let specialThanksLine2 = document.createElement('h4');
   specialThanksLine2.textContent = "Carlton Jones (কার্লটন জোনস)"
   specialThanksDiv.append( specialThanksHeader);
   specialThanksDiv.append(specialThanksLine1);
   specialThanksDiv.append(specialThanksLine2);

   containerDiv.append(itemInfoDiv);
   containerDiv.append(participantListDiv);
   containerDiv.append(specialThanksDiv);
}

drawClass('Ekushey History and Chorus','(একুশে ইতিহাস এবং দলীয় সঙ্গীত)', ekushe_participants);
