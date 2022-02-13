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

const natok_participants = 
[
   // Rounak
   new Participant('রৌনক মণ্ডল', 'Rounak Mandal'),
   // Arfia
   new Participant('আরফিয়া আমরিন','Arfia Amreen'), 
   // Tasneem
   new Participant('তাসনিম হক','Tasneem Haque'), 
   // Yusra
   new Participant('ইউসরা জুনাইরাহ মাসুম', 'Yusra Zunairah Masum'),
   // Arshia
   new Participant('আরশিয়া হাসান', 'Arshia Hasan')
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

function drawSpecialThanks(headerText, names)
{
   let specialThanksDiv = document.createElement('div');
   specialThanksDiv.className = "specialThanks";

   let headerElem = document.createElement('h3');
   headerElem.textContent = headerText;
   specialThanksDiv.append(headerElem);

   names.forEach(element => {
      let elem = document.createElement('h4');   
      elem.textContent = element;
      specialThanksDiv.append(elem)
   });
   
   return specialThanksDiv;
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
   let name1 = 'Acting: Nazia Ahmed (অভিনয়ঃ নাজিয়া আহমেদ)';
   let name2 = 'Script Writer: Upal Mahbub Omi (চিত্রনাট্য লেখকঃ উপাল মাহবুব অমি)';
   let name3 = 'Video Editing: Rajat Shuvro (ভিডিও এডিটিংঃ রজত শুভ্র)';
   let name4 = 'Miscellaneous: Noureen Chowdhury (অনুশাঙ্গিকঃ নওরীন চৌধুরী)';
   let names = [name1, name2, name3, name4];
   let specialThanksDiv = drawSpecialThanks("Special Thanks (বিশেষ ধন্যবাদ)", names);

   containerDiv.append(itemInfoDiv);
   containerDiv.append(participantListDiv);
   containerDiv.append(specialThanksDiv);
}

drawClass("Bengali Drama: 'Ashar Alo'",'(বাংলা নাটকঃ আশার আলো)', natok_participants);
