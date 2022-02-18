class Participant 
{
   constructor(character_name, bengali_name, english_name)
   {  
      console.log(bengali_name, english_name);
       
      this.character_name = character_name;
      this.english_name = english_name;
      this.bengali_name = bengali_name;
      
      let first_name = english_name.split(' ')[0].toLowerCase();
      console.log(first_name);
      this.image_file = `./assets/${first_name}_12x9.jpg`;
      console.log(this.image_file);
   }
}

const group_dance_participants = 
[
   // Tania
   new Participant('Falguni (ফাল্গুনি)', 'শাহরীন বিনতে সালাম', 'Shahrin Binte Salam'),
   // Nabil
   new Participant('Boltu (বল্টু)', 'সাবের নাবিল','Saber Nabil'), 
   // Tanni
   new Participant('Chader Buri (চাঁদের বুড়ী)', 'তন্বী চক্রবর্তী','Tanni Chakraborty'), 
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
      // Character
      let divCharacterName = document.createElement('div');
      divCharacterName.className = 'characterName'
      divCharacterName.textContent = element.character_name;
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

      participantDiv.append(divCharacterName);
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
   let name1 = 'Lyrics and Composition: Eshita Islam (ঈশিতা ইসলাম)';
   let name2 = 'Audio Mixing and Keyboard: Samik Banerjee (সামিক ব্যানার্জি)';
   let name3 = 'Vocals: Eshita Islam, Saber Nabil (ঈশিতা ইসলাম, সাবের নাবিল)';      
   let name4 = 'Video Recording: Saleha Eva (সালেহা ইভা)';
   let names = [name1, name2, name3, name4];
   let specialThanksDiv = drawSpecialThanks("Special Thanks (বিশেষ ধন্যবাদ)", names);

   containerDiv.append(itemInfoDiv);
   containerDiv.append(participantListDiv);
   containerDiv.append(specialThanksDiv);
}

drawClass("Puppet Presentation",'(পুতুলের পরিবেশনা)', group_dance_participants);
