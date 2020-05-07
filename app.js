
//for holding data
   var holder;

//drop down menu
function Meta() {
// Fetch the JSON data and console log it
d3.json("data/samples.json").then(function(sample)
    //console.log(sample)

    var dropdown = d3. select("dataset");
    console.log(dropdown)
 
};
  //names
  var nameID =sampledata.names;
  //print name
  console.log(nameID)

//var dropdown = d3. select(data);
   //console.log(dropdown)
   

   //loop
   nameID forEach(element => {
       dropdown.append("option").text(element).property("Value", element)
       
   });



function changes(){
    var ID = this.value;
    demobuild(ID);

    //handler
    dropdown.on("handler", changes)

}

function demobuild (Idname){
    var filterz = holder.metadata
    var filterz = filterz.filter(Element =>
        element.id == parseInt (Idname))
}
var metas = d3.select(sample);

//show one at a time
metas.html("");

Object.entries(filterz).forEach(function ([key, value]) {
    metas.append().text(`${key}: ${value}`);
  });


//charts
function charts(){
    d3.json("samples/"+sample).then((sample)=>{
    
        //bubble chart
        var trace1 = {
          x:sample['otu_ids'],
          y:sample['sample_values'],
          mode:'markers',
          type:'scatter',
          text:sample[`otu_labels`],
          marker:{
            color: sample['otu_ids'],
            opacity:0.5,
            size:sample['sample_values']
          }
        
        //bar chart
        //Use otu_ids as the labels for the bar chart.
        //Use otu_labels as the hovertext for the chart.

        
};
