
var s8=['Win By Runs'],s9=['Win By Runs'],s10=['Win By Runs'],s11=['Win By Runs'],s12=['Win By Runs'],s13=['Win By Runs'],s14=['Win By Runs'],s15=['Win By Runs'],s16=['Win By Runs'];
var s8data=[],s9data=[],s10data=[],s11data=[],s12data=[],s13data=[],s14data=[],s15data=[],s16data=[];

function parseData() {


  Papa.parse("../data/matches.csv", {
      download: true,
      complete: function(results) {
  		console.log("Finished:", results.data);
      createArray(results.data);
      createGraph(results.data, s8);

  	}
  });
}

function createArray(data)
{  s8=['Win By Runs'],s9=['Win By Runs'],s10=['Win By Runs'],s11=['Win By Runs'],s12=['Win By Runs'],s13=['Win By Runs'],s14=['Win By Runs'],s15=['Win By Runs'],s16=['Win By Runs'];

   for(var i=1; i< data.length-1; i++)
    { var win = data[i][4] + " vs " + data[i][5] + "..  Win = " + data[i][10] ;
     if(parseInt(data[i][1]) == 2008)
        {s8.push(parseInt(data[i][11]));
         s8data.push(win);
         }
        else if(parseInt(data[i][1]) == 2009)
            {s9.push(parseInt(data[i][11]));
             s9data.push(win);
             }
             else if(parseInt(data[i][1]) == 2010)
                 {s10.push(parseInt(data[i][11]));
                  s10data.push(win);
                  }
                  else if(parseInt(data[i][1]) == 2011)
                      {s11.push(parseInt(data[i][11]));
                       s11data.push(win);
                       }
                       else if(parseInt(data[i][1]) == 2012)
                           {s12.push(parseInt(data[i][11]));
                            s12data.push(win);
                            }
                            else if(parseInt(data[i][1]) == 2013)
                                {s13.push(parseInt(data[i][11]));
                                 s13data.push(win);
                                 }
                                 else if(parseInt(data[i][1]) == 2014)
                                     {s14.push(parseInt(data[i][11]));
                                      s14data.push(win);
                                      }
                                      else if(parseInt(data[i][1]) == 2015)
                                          {s15.push(parseInt(data[i][11]));
                                           s15data.push(win);
                                           }
                                           else if(parseInt(data[i][1]) == 2016)
                                               {s16.push(parseInt(data[i][11]));
                                                s16data.push(win);
                                                }
    }
}




new Vue({
 el: '#btn1',
 methods: {
   graph()
   {
   parseData();}
 }

});
