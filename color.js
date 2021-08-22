var Links={
  setColor:function(color){
    // var alist=document.querySelectorAll('a');
    // var i=0;
    // while(i<alist.length){
    //   alist[i].style.color=color; //매개변수에 괄호 안씀
    //   i=i+1;
    // }
      $('a').css('color',color);
  }
}

var Body={
  setColor: function(color){
    // document.querySelector('body').style.color = color; //매개변수에 괄호 없음
    $('body').css('color',color);
  },
  setBackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor = color; //매개변수에 괄호 안쓴다
    $('body').css('backgroundColor',color);
  }
}

function nightDayHandler(self){
  var target =document.querySelector('body');
  if (self.value === 'night' ) {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('powderblue');

  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('blue');
    }
  }
