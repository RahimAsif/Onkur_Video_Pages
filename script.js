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

const jadoo_participants =
[
   // Bineeta
   new Participant('বিনীতা বর্ণমালা', 'Bineeta Bornomala'),   
   // Naqeeb
   new Participant('নাকীব কিশোর জুলফিকার', 'Naqeeb Kishore Julfiker'),
]

const maa_baba_ami_class = 
[
   // Prateem
   new Participant('শৌর্য প্রতিম দাস', 'Shourjo Prateem Das'),
   // Imam
   new Participant('সৈয়দ শাফি ইমাম','Syed Shafii Imam'), 
   // Priyo
   new Participant('সাত্ত্বিক রায় প্রিয়','Sattwik Roy Priyo'), 
   // Shoroth
   new Participant('শরৎ শুভ', 'Shawroth Shuvro'),
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

function drawClass(itemNameEnglish, itemNameBengali, arrOfParticipants, parentDiv)
{   
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
   let name1 = 'Intro Lyrics: Rajat Shuvro (রজত শুভ্র)';
   let name2 = 'Intro Singer: Ayana Rahim (আয়ানা রহিম)';
   let name3 = 'Voiceover: Totini Tonu (তটিনী তনু)';   
   let name4 = "Video Editing: Rajat Shuvro (রজত শুভ্র)"
   let names = [name1, name2, name3, name4];
   let specialThanksDiv = drawSpecialThanks("Special Thanks (বিশেষ ধন্যবাদ)", names);

   parentDiv.append(itemInfoDiv);
   parentDiv.append(participantListDiv);
   parentDiv.append(specialThanksDiv);
}

function drawMagic(itemNameEnglish, itemNameBengali, arrOfParticipants, parentDiv)
{   
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
   let name1 = 'Chamok Hasan (চমক হাসান)';
   let names = [name1];
   let specialThanksDiv = drawSpecialThanks("Special Thanks (বিশেষ ধন্যবাদ)", names);

   parentDiv.append(itemInfoDiv);
   parentDiv.append(participantListDiv);
   parentDiv.append(specialThanksDiv);
}

drawClass("Rhymes and songs (ছড়া এবং গান)",'Class: Maa Baba Ami (শ্রেণীঃ মা বাবা আমি)', maa_baba_ami_class, document.querySelector('.container-left'));
drawMagic("Magic Show",'(জাদু প্রদর্শন)', jadoo_participants, document.querySelector('.container-right'));
