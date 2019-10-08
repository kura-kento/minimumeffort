'use strict';
{

    const choices  = {};
    const EXCHANGE = {active: false ,coordinate: false};
    const piececolors =  ['red','blue','yellow','green' ];

    const trouble = document.getElementById('trouble');
    let count = 0;
    function troubleText(){ count+=1
                            trouble.textContent = `手数 ${count}`;
                          }


    for(let i = 1; i <= 16; i++){
        for(let n = 1; n <= 16; n++){
            choices['choice_'+i+'_'+n] = document.getElementById('choice_'+i+'_'+n);

            choices['choice_'+i+'_'+n].addEventListener('click',()=>{
              //同じマスをクリックした時
              if(EXCHANGE['coordinate'] !== false && 'choice_'+i+'_'+n === EXCHANGE['coordinate']){
                  choices[EXCHANGE['coordinate']].classList.remove('opacity')
                  EXCHANGE['coordinate'] = false
              //赤マスがない場合（将来：コマがない）＋ ２手目の場合
              }else if(EXCHANGE['coordinate'] !== false && choices['choice_'+i+'_'+n].classList.contains('robots') !== true){
                    choices['choice_'+i+'_'+n].classList.add('robots',EXCHANGE['color'])
                    choices[EXCHANGE['coordinate']].classList.remove('opacity','robots',EXCHANGE['color'])
                    EXCHANGE['coordinate'] = false
                    //手数表示
                    troubleText()
                    //コマがある場合 ＋ １手目の場合
              }else if(choices['choice_'+i+'_'+n].classList.contains('robots') === true && EXCHANGE['coordinate'] === false){
                  choices['choice_'+i+'_'+n].classList.add('opacity')
                  EXCHANGE['coordinate'] = 'choice_'+i+'_'+n
                  //クリックした色を確認してその色を取得する。
                  piececolors.forEach(function(color){
                      if(choices['choice_'+i+'_'+n].classList.contains(color)){
                          EXCHANGE['color'] = color
                      }
                  });
              }

            });
        }
    }

}
