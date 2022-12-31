function calculateYears(startDate) { 
    var diff_ms = Date.now() - startDate.getTime();
    var totalYears = new Date(diff_ms); 
  
    return Math.abs(totalYears.getUTCFullYear() - 1970);
}
