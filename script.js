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

const group_dance_participants = 
[
   // Advika
   new Participant('আদ্ভিকা দাস', 'Advika Das'),
   // Noureen
   new Participant('নওরীন চৌধুরী','Noureen Chowdhury'), 
   // Oishika
   new Participant('ঐশিকা সরকার','Oishika Sarkar'), 
   // Raikishori
   new Participant('রাইকিশোরী দে', 'Raikishori De'),
   // Rishmitha
   new Participant('রিশমিতা সিত', 'Rishmitha Sit'),
   // Samriddhi
   new Participant('সমৃদ্ধি ভট্টাচার্য','Samriddhi Bhattacharjee'), 
   // Sarah
   new Participant('সারাহ ম্যাথু', 'Sarah Matthew'),
   // Tanishi
   new Participant('তানিশী দাশ', 'Tanishi Das')
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
   let name1 = 'Choreography: Gargi Chattopadhyaya (গার্গী চট্টোপাধ্যায়)';
   let name2 = 'Videography: Anar Mehta, Gargi Chattopadhyaya (আনার মেহতা, গার্গী চট্টোপাধ্যায়)';   
   let name3 = 'Students of Gargi Chattopadhyaya (গার্গী চট্টোপাধ্যায়ের ছাত্রীদের)';
   let names = [name1, name2, name3];
   let specialThanksDiv = drawSpecialThanks("Special Thanks (বিশেষ ধন্যবাদ)", names);

   containerDiv.append(itemInfoDiv);
   containerDiv.append(participantListDiv);
   containerDiv.append(specialThanksDiv);
}

drawClass("Group Dance",'(দলীয় নাচ)', group_dance_participants);
