class Participant 
{
   constructor(bengali_name, english_name)
   {  
      console.log(bengali_name, english_name);

      this.english_name = english_name;
      this.bengali_name = bengali_name;
      
      let first_name = english_name.split(' ')[0].toLowerCase();
      console.log(first_name);
      this.image_file = `./assets/kakatua/${first_name}_12x9.jpg`;
      console.log(this.image_file);
   }
}

const kakatua_participants = 
[
   // Saadan
   new Participant('সাদান রনি', 'Sadan Roni'),
   // Radiya
   new Participant('তাইরাত রাদিয়া', 'Tairaat Radiya'),
   // Ayana
   new Participant('আয়ানা রহিম', 'Ayana Rahim'),
   // Sunniva
   new Participant('সুনিভা হাবিব','Sunniva Habib'),   
   // Adreesh
   new Participant('অদ্রীশ সিংহরায়','Adreesh Sinharay'),   
   // Rayaan 
   new Participant('রায়ান আলী', 'Rayaan Ali'),
   // Totini
   new Participant('তটিনী তনু', 'Totini Tonu'),
   // Srijon
   new Participant('সৃজন পাল', 'Srijon Pal'),
]

function drawParticipants(arrOfParticipants)
{
   participantListDiv = document.querySelector('.participant_list');

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
}

drawParticipants(kakatua_participants);

