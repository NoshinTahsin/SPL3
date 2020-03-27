function CreateEpicCard(){ 
 
    function CreateEpicCard(epicCard) {
           return `
            
           <div class="epic-card" id='draggableSpan' draggable='true'>
               <div class="epic-card-info">
                   <p class="epic-title">${epicCard.title}</p>
                   <p class="epic-author">Created By: ${epicCard.author}</p>
                   <p class="epic-date">Create Date: ${epicCard.date}</p>

               </div>

           </div>
           
           `;
       }

       return {
           
        CreateEpicCard
       }
   }

   
   /*<div class="remove-story-action">
   <button class="remove-story-btn 
   rm-button-${epicCard.id}" 
   data-id="${epicCard.id}">
   RemoveEpic</button>
</div>*/
