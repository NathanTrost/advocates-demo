  
  /** Simple util to validate and format a 10 digit number into a pretty phone number.
   * This does not validate number criteria outside of digit count.
  */
  export const formatPhoneNumber = (phoneNumber?: number):string => {
if(!phoneNumber) {
  return "(___) ___-____"
}

const phoneStr = String(phoneNumber);
const match = phoneStr.match(/^(\d{3})(\d{3})(\d{4})$/); 


if(match) {
return '(' + match[1] + ') ' + match[2] + '-' + match[3];
}
     return phoneStr;

  }
