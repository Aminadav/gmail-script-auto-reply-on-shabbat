function AutoReplyDuringShabbat(){
  var shouldReplayLabel=GmailApp.getUserLabelByName("on-shabbat-should-reply")  
  var repliedLabel=GmailApp.getUserLabelByName("on-shabbat-replied")
  var day=new Date().getDay()
  var hours=new Date().getHours()
  var threads=shouldReplayLabel.getThreads()
  for(var i=0;i<threads.length;i++){
    thread=threads[i]    
    date=thread.getLastMessageDate()    
    Logger.log("date=" +date)
    var day=date.getDay()
    var hours=date.getHours()
    if ( (day==5 && hours>12) || (day==6 && hours<16)) {
      Logger.log("Repliying")
      thread.reply("Hello. I have no access to email until Saturday night 20:00 (GMT+2).")
      thread.removeLabel(shouldReplayLabel)
      thread.addLabel(repliedLabel)
    }
  } 
}
