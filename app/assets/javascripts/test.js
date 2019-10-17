'use strict';
{
    const choiceee = document.getElementById('choiceee');
    const choices  = {};
    const EXCHANGE = {active: false ,coordinate: false};
    const piececolors =  ['red','blue','yellow','green' ];
    const color_panel = document.getElementById('color_panel');
    const CHOICE = {top: false ,bottom: false, right: false ,left: false};

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
                    CHOICE.left=false;
                    CHOICE.top=false;
                    CHOICE.right=false;
                    CHOICE.bottom = false;
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

                  //上
                  for(let j=i-1; j>=1;j--){
                    if(i===1 || document.getElementById('square_bottom_'+i+'_'+n).classList.contains('top') === true ){
                      break
                    }else if(document.getElementById('square_bottom_'+j+'_'+n).classList.contains('top') === true){
                        CHOICE.top = j+'_'+n
                        break
                    }else if(document.getElementById('square_bottom_'+j+'_'+n).classList.contains('bottom') === true){
                        CHOICE.top = 'square_bottom_'+(j+1)+'_'+n
                      break
                    }else if(j===1 || ( (n===8||n===9) && j===10 ) ){
                      CHOICE.top = j+'_'+n
                      break
                    }
                  }
                  //下
                  for(let j=i+1; j<=16;j++){
                    if(i===16 || document.getElementById('square_bottom_'+i+'_'+n).classList.contains('bottom') === true){
                      break
                    }else if(document.getElementById('square_bottom_'+j+'_'+n).classList.contains('bottom') === true){
                        CHOICE.bottom = 'square_bottom_'+j+'_'+n
                        break
                    }else if(document.getElementById('square_bottom_'+j+'_'+n).classList.contains('top') === true){
                        CHOICE.bottom = 'square_bottom_'+(j-1)+'_'+n
                      break
                    }else if(j===16 || ( (n===8||n===9) && j===7 ) ){
                        CHOICE.bottom = j+'_'+n
                        break
                    }
                  }
                  //左
                  for(let j=n-1; j>=1;j--){
                    if(n===1 || document.getElementById('square_bottom_'+i+'_'+n).classList.contains('left') === true){
                      break
                    }else if(document.getElementById('square_bottom_'+i+'_'+j).classList.contains('left') === true){
                        CHOICE.left = i+'_'+j
                        break
                    }else if(document.getElementById('square_bottom_'+i+'_'+j).classList.contains('right') === true){
                        CHOICE.left = i+'_'+(j+1)
                      break
                    }else if(j===1 || ( (i===8||i===9) && j===10 )){
                        CHOICE.left = i+'_'+j
                        break
                    }
                  }
                  //右
                  for(let j=n+1; j<=16;j++){
                    if(n===16 || document.getElementById('square_bottom_'+i+'_'+n).classList.contains('right') === true){
                      break
                    }else if(document.getElementById('square_bottom_'+i+'_'+j).classList.contains('right') === true){
                        CHOICE.right = i+'_'+j
                        break
                    }else if(document.getElementById('square_bottom_'+i+'_'+j).classList.contains('left') === true){
                        CHOICE.right = i+'_'+(j-1)
                      break
                    }else if(j===16 || ( (i===8||i===9) && j===7 ) ){
                        CHOICE.right = i+'_'+j
                        break
                    }
                  }

              }

            });
        }
    }

}
