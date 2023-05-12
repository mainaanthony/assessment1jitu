

const givenAngleDegree = 170;

switch(true){
case(givenAngleDegree===180):console.log("Straight Angle")
break; 
case((givenAngleDegree>90) && (givenAngleDegree<180 )): console.log("Obtuse Angle")
break;
case(givenAngleDegree === 90): console.log("Right Angle")
break;
case((givenAngleDegree>0) && (givenAngleDegree<90) ): console.log("Acute Angle")
break;
default:
break;    




}


// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.