RobotColors.forEach(function(RobotColor){
  RobotColor.addEventListener('click',() =>{
    if(RobotColor.classList.contains('robots') === true){
      RobotColor.classList.remove('robots','yellow')
      EXCHANGE['color'] = 'block__yellow'
      EXCHANGE['active'] = true
    }

  });
});
