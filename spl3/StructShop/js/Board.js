function Board() {
    
    const uitil = Utiliy();
    const store_var=Storage();   

    this.populateBoard = () => {
        const createEpicBtn = uitil.domQuery.getDomByClass('createEpicButton');
        addToBoardEvent(createEpicBtn);

    }
    
    const atb=AddToBoard();
    function addToBoardEvent(dom)
    {
        const len = dom.length;
        for (let e = 0; e < len; e++) {
            dom[e].addEventListener('click', (e) => {
                let {id} = e.target.dataset;
                id = parseInt(id);
                atb.AddToBoard();  
            });
        }
    }
    
    


}




