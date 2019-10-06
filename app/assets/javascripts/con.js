'use strict';
{

      const RobotRed = document.getElementById('RobotRed');
      const RobotBlue = document.getElementById('RobotBlue');
      const RobotYellow = document.getElementById('RobotYellow');
      const RobotGreen = document.getElementById('RobotGreen');

      const choices = {};
      const EXCHANGE = {active: false ,color: 'null',coordinate: 'null'};
      const colors=['block__red','block__blue','block__yellow','block__green'];

    for(let i = 1; i <= 16; i++){
        for(let n = 1; n <= 16; n++){
            choices['choice_'+i+'_'+n] = document.getElementById('choice_'+i+'_'+n);

            choices['choice_'+i+'_'+n].addEventListener('click',()=>{
              //同じマスをクリックした時
              if(EXCHANGE['active']=== true && 'choice_'+i+'_'+n === EXCHANGE['coordinate']){
                choices[EXCHANGE['coordinate']].classList.remove('opacity')
                EXCHANGE['active']= false
                EXCHANGE['coordinate']= 'null'
                choices['choice_'+i+'_'+n].classList.add('masu')
              //赤マスがない場合（将来：コマがない）＋ ２手目の場合
              }else if(EXCHANGE['active']=== true){
                choices['choice_'+i+'_'+n].classList.add(EXCHANGE['color'])
                //将来的に消す
                if(EXCHANGE['coordinate']!== 'null'){
                  choices[EXCHANGE['coordinate']].classList.remove('opacity',EXCHANGE['color'])
                }
                choices['choice_'+i+'_'+n].classList.add('masu')
                EXCHANGE['active']= false
                EXCHANGE['coordinate']= 'null'

                //コマがある場合 ＋ １手目の場合
              }else if(choices['choice_'+i+'_'+n].classList.contains('masu') === true && EXCHANGE['active']=== false){
                  choices['choice_'+i+'_'+n].classList.add('opacity')
                  EXCHANGE['active']= true
                  EXCHANGE['coordinate'] = 'choice_'+i+'_'+n
                  choices['choice_'+i+'_'+n].classList.remove('masu')
                  //クリックした色を確認してその色を取得する。
                  colors.forEach(function(color){
                    if(choices['choice_'+i+'_'+n].classList.contains(color)){
                        EXCHANGE['color'] = color
                    }
                  });
              }

            });
        }
    }

    RobotRed.addEventListener('click',() =>{
      if(RobotRed.classList.contains('robots') === true){
        RobotRed.classList.remove('robots','red')
        EXCHANGE['color'] = 'block__red'
        EXCHANGE['active'] = true
      }

    });

    RobotBlue.addEventListener('click',() =>{
      if(RobotBlue.classList.contains('robots') === true){
        RobotBlue.classList.remove('robots','blue')
        EXCHANGE['color'] = 'block__blue'
        EXCHANGE['active'] = true
      }

    });

    RobotGreen.addEventListener('click',() =>{
      if(RobotGreen.classList.contains('robots') === true){
        RobotGreen.classList.remove('robots','green')
        EXCHANGE['color'] = 'block__green'
        EXCHANGE['active'] = true
      }

    });

    RobotYellow.addEventListener('click',() =>{
      if(RobotYellow.classList.contains('robots') === true){
        RobotYellow.classList.remove('robots','yellow')
        EXCHANGE['color'] = 'block__yellow'
        EXCHANGE['active'] = true
      }

    });



}
