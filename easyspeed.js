var EasySpeed = function(var positionObj, var destinationObj, unitpersec, mspersec) {
    this.x1 = positionObj.x;
    this.x2 = destinationObj.x;

    this.y1 = positionObj.y;
    this.y2 = destinationObj.y;

    this.distanceX = destinationObj.x - positionObj.x;
    this.distanceY = destinationObj.y - positionObj.y;

    this.distance = Math.sqrt(this.distanceX*this.distanceX + this.distanceY*this.distanceY);

    this.speed = Math.floor((this.distance/unitpersec)*mspersec);

    return this.speed;
}

// unitpersec / mspersec -> 10 / 1000 = 0.01
// pos.x += 0.01   pos.y += 0.01
// if x distance is 200 and y distance is 50
// pos.x += 0.01 and
// if(time % 4){
//   pos.y += 0.01
// } ratio compensation
