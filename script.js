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
   // Totini
   new Participant('তটিনী তনু', 'Totini Tonu'),   
]


function drawParticipants(arrOfParticipants)
{
   let participantListDiv = document.createElement('div')
   participantListDiv.className = 'participant_list';

   let participantListHeaderText = document.createElement('h3');
   participantListHeaderText.textContent = 'Performer (নৃত্য শিল্পী)';
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
   // Item Name (English)
   let itemNameElement = document.createElement('h1');
   itemNameElement.textContent = itemNameEnglish;
   itemInfoDiv.append(itemNameElement);   
   // Item Name (Bengali)
   let classNameElement = document.createElement('h2')
   classNameElement.textContent = itemNameBengali;
   itemInfoDiv.append(classNameElement);
   // Participants
   let participantListDiv = drawParticipants(arrOfParticipants);
   // Special Thanks
   let name1 = 'Gargi Chattopadhyaya (গার্গী চট্টোপাধ্যায়)';
   let name2 = 'Video Editing: Rajat Shuvro (রজত শুভ্র)';
   let name3 = 'Videography: Tanni Chakraborty (তন্বী চক্রবর্তী)';
   let names = [name1, name3, name2];
   let specialThanksDiv = drawSpecialThanks("Special Thanks (বিশেষ ধন্যবাদ)", names);

   containerDiv.append(itemInfoDiv);
   containerDiv.append(participantListDiv);
   containerDiv.append(specialThanksDiv);
}

drawClass("Individual Dance",'(একক নাচ)', natok_participants);
