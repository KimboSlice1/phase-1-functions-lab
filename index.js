
function distanceFromHqInBlocks(pickUp) {
    if (pickUp >= 42) {
        return (pickUp - 42)
    }
    else {
        return (42 - pickUp)
    }
}

function distanceFromHqInFeet(blockNumber) {
    console.log(distanceFromHqInBlocks(blockNumber));
    return distanceFromHqInBlocks(blockNumber) * 264
}

function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        return (start - destination) * 264
    }
    else {
        return (destination - start) * 264}
    }

function calculatesFarePrice(startBlock, endBlock) {
    let distance = distanceTravelledInFeet(startBlock, endBlock)
    if (distance <= 400) {
        return 0
    } else if (distance <= 2000) {
        return (distance - 400) * .02
    } else if (distance <= 2500) {
        return 25
    } else {
        return "cannot travel that far";
    }
}
    


