var words = "Bacon ipsum dolor amet meatloaf beef swine t-bone pastrami pancetta doner ribeye beef ribs meatball tail. Ham hock pancetta alcatra jowl ball tip shank. Cow ground round chuck, t-bone bresaola pastrami turkey hamburger beef pork belly short ribs. Bacon hamburger kielbasa alcatra salami boudin ball tip sausage kevin turkey sirloin meatloaf cow. Bacon ipsum dolor amet porchetta corned beef salami picanha ball tip, tri-tip tenderloin tail. Ribeye sausage fatback ball tip chicken ground round beef ribs frankfurter andouille short loin biltong t-bone swine. Short loin ham pork chop, chicken frankfurter beef ribs tail jerky shank tongue turducken pastrami. Andouille kevin ham hock boudin, venison strip steak brisket ham. Jerky brisket venison ground round fatback rump shoulder pork belly landjaeger tri-tip shank sirloin ham. Spare ribs t-bone venison landjaeger rump sirloin tail kielbasa prosciutto tri-tip beef ribs. Corned beef prosciutto jowl strip steak. Sirloin brisket jerky drumstick biltong tail venison sausage corned beef tenderloin salami pork chop. Ribeye turducken kevin, pork loin prosciutto cow spare ribs chicken andouille salami flank porchetta. Pancetta frankfurter short ribs filet mignon ball tip picanha ham hock ground round pork belly porchetta boudin sausage bresaola flank. Bacon brisket prosciutto biltong bresaola. Brisket shoulder pig venison t-bone turkey swine pastrami ball tip jerky. Short ribs frankfurter tri-tip, fatback tongue chuck bacon kielbasa. Pastrami jerky venison ball tip, tri-tip flank bacon beef prosciutto pork chop. Prosciutto boudin jerky hamburger pig bresaola landjaeger ham hock pork loin cupim frankfurter kevin ball tip.";


function timetoread(string) {
  var count = [];
  var text = string.split(' ');
  count.push(text);
  var time = (count.length / 60);
  return time;
}

console.log(timetoread(words));
