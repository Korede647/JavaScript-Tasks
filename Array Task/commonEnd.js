



function commonEnd(a, b){
    if((a[0] == b[0] || a[a.length -1] == b[b.length -1]) && (a.length >= 1 && b.length >= 1)){
      return true;
    }
    return false;
  }