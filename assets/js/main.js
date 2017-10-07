/*
- Global declarations
 */
var displaySection=document.getElementById("displaySectionID");
var galaxies=['Pinwheel','Cartwheel',"Ring Nebular","Virgo Stellar Stream","Canis-Majos Overdensity","StarBust","IC 1011","Sombrero","Own Nebular","Triangulum"];

/*
- UI class.
- Responsible for creating cards, list and adding data to them.
 */
var UI= function () {
    /*
    - Create a single dark materialize card with title,description and two action buttons
     */
     this.createCard=function(id,name,description)
     {
         var cardView=document.createElement('div');
         cardView.className="card blue-grey darken-1";

         var contentView=document.createElement('div');
         contentView.className="card-content white-text";

         var span=document.createElement('span');
         span.className="card-title";
         contentView.appendChild(span);

         contentView.appendChild(document.createTextNode(description));
         span.innerText=name;
         cardView.appendChild(contentView);

         var cardActionsView=document.createElement('div');
         cardActionsView.className="card-action";

         //create action button 2
         var actionButton1=document.createElement('a');
         actionButton1.appendChild(document.createTextNode("Show"));
         actionButton1.setAttribute("id","showID"+id.toString());

         //onclick event for actionbutton 1
         actionButton1.onclick=function()
         {
             alert(name);
         }

         //create second action button
         var actionButton2=document.createElement('a');
         actionButton2.appendChild(document.createTextNode("View"));
         actionButton2.setAttribute("id","viewID"+id.toString());

         //When button 2 is clicked
         actionButton2.onclick=function()
         {
             alert(description);
         }

         //Add action buttons to cardActionsview
         cardActionsView.appendChild(actionButton1);
         cardActionsView.appendChild(actionButton2);

         //Add cardActionsview with action buttons to cardview
         cardView.appendChild(cardActionsView);

         return cardView;
     }

    /*
    - Create ListView
    - Fill with data
     */
    this.createListView=function()
    {
        var listView=document.createElement('ul');
        listView.className="list";

        for(var i=0;i<galaxies.length;i++)
        {
            var listViewItem=document.createElement('li');
            listViewItem.appendChild(this.createCard(i,galaxies[i],"This is the Description for "+galaxies[i]));
            listView.appendChild(listViewItem);
        }
        return listView;
    }
    /*
     - Append ListView to displaySection
     */
    this.show=function(){
        displaySection.innerHTML="";
        displaySection.appendChild(this.createListView());
    }
    /*
     SORT DATA ASCENDING OR DESCENDING
     */
    this.sortData=function(asc)
    {
        if(asc)
        {
            galaxies.sort();
            this.show();
        }else
        {
            galaxies.reverse();
            this.show();
        }
    }
}
var ui=new UI();
function sortAsc(){ui.sortData(true)}
function sortDesc(){ui.sortData(false)}
ui.show();


