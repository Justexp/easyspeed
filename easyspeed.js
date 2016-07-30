var EasySpeed = function(var positionObj, var destinationObj, unitpersec, mspersec) {
    this.x1 = positionObj.x;
    this.x2 = destinationObj.x;

    this.y1 = positionObj.y;
    this.y2 = destinationObj.y;

    this.distanceX = destinationObj.x - positionObj.x;
    this.distanceY = destinationObj.y - positionObj.y;

    this.distance = Math.sqrt(distanceX*distanceX + distanceY*distanceY);

    this.speed = (distance/unitpersec)*mspersec;

    return speed;
}
