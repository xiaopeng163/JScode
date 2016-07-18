var app = {};

app.countdown = function(settings) {
  var interval,
      counter = 0,
      startAt = 0,
      endAt = 0;

    if (settings === undefined) {
      console.log('please provide settings')
    }  else {
      if(settings.startAt === undefined || settings.endAt === undefined){
        console.log('start and end are required')
      }else {
        startAt = parseInt(settings.startAt,10)
        endAt = parseInt(settings.endAt, 10)

        if(!isNaN(startAt) && !isNaN(endAt)){
          counter = startAt

          interval = setInterval(
            function(){
              // is the counter at the end
              counter = counter - 1
              if (counter < endAt){
                console.log('finished')
                clearInterval(interval)
              } else{
                console.log(counter)
              }
            }, 1000
          )
        }

      }
    }
}
