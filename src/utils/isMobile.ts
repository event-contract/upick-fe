export default function checkIsMobile() {
  let user = navigator.userAgent;
  let isMobile = false;
  
  if( user.indexOf("iPhone") > -1 
      || user.indexOf("Android") > -1 
      || user.indexOf("iPad") > -1
      || user.indexOf("iPod") > -1
  ) {
    isMobile = true;   
  }
  return isMobile;
}