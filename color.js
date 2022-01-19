var link = {
  setcolor : function(color){
    var alist = document.querySelectorAll('a');
    var i=0;
    while(i<alist.length){
      alist[i].style.color= color;
        i=i+1;
    }
  }
}

var body= {
  bsetcolor : function (color){
    document.body.style.backgroundColor=color;
  },
  tsetcolor : function (color){
    document.body.style.color=color;
  }
}

function daynighthand(self){
  if(self.value==='night'){
    body.bsetcolor('black');
    body.tsetcolor('white');
    self.value='day';
    link.setcolor('powderblue');

  }
  else{
    body.bsetcolor('white');
    body.tsetcolor('black');
    self.value='night';
    link.setcolor('black');

  }
}
