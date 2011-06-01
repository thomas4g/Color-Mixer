function mixColors(colors, transp) { //takes an a
  function getColorVals(color) {
    color = color.replace("rgb", "").replace("(", "").replace(")", "").replace("a","");
    return color.split(",");
}
  var sums = [0,0,0];
  var op = 0;
   for(i=0;i<colors.length;i++) {
    var vals = getColorVals(colors[i]);
    for(j=0;j<3;j++) {
        sums[j] = parseInt(vals[j],10) + sums[j]; 
    }
     if(transp === true) {
       if(vals.length < 4) {
        vals.push(1); 
       }
        op += parseInt(vals[3],10);
     }
  }
  var mixed = "rgb(";
  for(i=0;i<3;i++) {
   mixed += Math.round(sums[i] / colors.length);
    
    if(i<2) mixed += ",";
  }
  if(transp === true) {
   mixed = mixed.replace("rgb","rgba");
   mixed += "," + op/colors.length;
  }
  return mixed + ")";
}
