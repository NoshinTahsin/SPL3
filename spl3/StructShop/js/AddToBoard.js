function AddToBoard(){
    function AddToBoard(){
        const store_var=Storage();
        const uitil = Utiliy();
        const EpicCard=CreateEpicCard();
        const EpicTemplate=EpicTitleTemplate();

        var epicTitle = window.prompt("Enter the epic title: ");
        console.log(epicTitle);

        let epictemp=store_var.storage.getData('epic-template');
        if(epictemp){
            const epic_temp=EpicTemplate.epicTitleTemplate();
            epictemp = [...epictemp, epic_temp[0]];
            store_var.storage.setData('epic-template', epictemp);
        }

        var id = parseInt(epictemp[0].id);
        
        epictemp[0].id=id+1;
        console.log(epictemp[0].id);
        epictemp[0].title=epicTitle;
        let date="";
        var d = new Date();
        date+=d.getDate();
        date+="/";
        date+=d.getMonth();
        date+="/";
        date+=d.getFullYear();
        epictemp[0].date=date;
        console.log(epictemp[0]);

         //new epic added to localstorage
        let epicList=store_var.storage.getData('epic-list');
        epicList = [...epicList, epictemp[0]];
        store_var.storage.setData('epic-list', epicList);

        let epic_card = '';
        const epiccardlist = uitil.domQuery.getDomByQuery('.epic-list');
    
        let rem_counter=0; //to set unique id for each remove button
        epicCart=store_var.storage.getData('epic-list');
        epicCart.forEach(pro => {
            rem_counter+=1;
            var id_to_update=pro.id;
            epic_card+=EpicCard.CreateEpicCard(pro);
        });

 
        uitil.domQuery.setDomInnerHTML(epiccardlist, epic_card);


        
    }

    return {AddToBoard};
}