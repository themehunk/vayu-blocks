let counter = 0;
/**
 * Import WordPress Internals
 */
export default function getUniqueId( uniqueID, clientId, isUniqueID, isUniqueBlock ) {
    
    let smallID = '_' + clientId.substr( 2, 9 );
    if ( ! uniqueID ) {
        //new block
        if ( ! isUniqueID( smallID ) ) {
            smallID = generateUniqueId(smallID);
        }
        return smallID;
    } else if ( ! isUniqueID( uniqueID ) ) {
        // This checks if we are just switching views, client ID the same means we don't need to update.
        if ( ! isUniqueBlock( uniqueID, clientId ) ) {
            return smallID
        }
    }
    //normal block loading 
    return uniqueID;
}

function generateUniqueId(smallID) {
  counter += 1;
  return `${smallID}${counter}`;
}
