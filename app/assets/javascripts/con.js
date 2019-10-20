'use strict';
{

    //const choiceee = document.getElementById('choiceee');
    const choices  = {};
    const EXCHANGE = {active: false ,coordinate: false};
    const piececolors =  ['red','blue','yellow','green' ];
    const color_panel = document.getElementById('color_panel');
    const CHOICE = {top: false ,bottom: false, right: false ,left: false};

    //リセットボタンを押せる状態(reset.jsで使用)
    var reset_btn = true;
    var reset_false = EXCHANGE['coordinate'] = false;

    const trouble = document.getElementById('trouble');
    var trouble_count = 0;
    function troubleText(){
        trouble_count += 1
        trouble.textContent = `手数 ${trouble_count}`;
    }
    //方角に応じて動けるマスにclass（next_position）を足す
    function nextPosition(){
        Object.values(CHOICE).forEach(function(value){
            if(value !== false){
            $(document).ready(function(){
              $(document.getElementById('choice_'+value)).toggleClass('next_position');
            });
            }
        });
    }
    function choiceAllFalse(){
      Object.keys(CHOICE).forEach(function(key){ CHOICE[key] = false; });
    }

    var next_p = nextPosition();
    var chioce_AF =choiceAllFalse();

    for(let h = 1; h <= 16; h++){
        for(let w = 1; w <= 16; w++){
            choices['choice_'+h+'_'+w] = document.getElementById('choice_'+h+'_'+w);

            choices['choice_'+h+'_'+w].addEventListener('click',()=>{
                //同じマスをクリックした時
                if('choice_'+h+'_'+w === EXCHANGE['coordinate']){
                    choices[EXCHANGE['coordinate']].classList.remove('opacity');
                    EXCHANGE['coordinate'] = false;
                    reset_btn = true;
                    nextPosition();
                    choiceAllFalse();
                //赤マスがない場合（将来：コマがない）＋ ２手目の場合
              }else if( choices['choice_'+h+'_'+w].classList.contains('next_position') === true){
                    nextPosition();
                    choiceAllFalse();
                    choices['choice_'+h+'_'+w].classList.add('robots',EXCHANGE['color']);
                    choices[EXCHANGE['coordinate']].classList.remove('opacity','robots',EXCHANGE['color']);
                    EXCHANGE['coordinate'] = false;
                    //手数表示
                    reset_btn = true;
                    troubleText();
                    //コマがある場合 ＋ １手目の場合
                }else if(choices['choice_'+h+'_'+w].classList.contains('robots') === true && EXCHANGE['coordinate'] === false){
                    reset_btn = false;
                    choices['choice_'+h+'_'+w].classList.add('opacity');
                    EXCHANGE['coordinate'] = 'choice_'+h+'_'+w
                    //クリックした色を確認してその色を取得する。
                    piececolors.forEach(function(color){
                        if(choices['choice_'+h+'_'+w].classList.contains(color)){
                            EXCHANGE['color'] = color;
                        }
                    });

                    //上
                    for(let i=h-1; i>=1;i--){
                      if(h===1 || document.getElementById('square_bottom_'+h+'_'+w).classList.contains('top') === true ){
                        break
                      }else if(document.getElementById('square_bottom_'+i+'_'+w).classList.contains('bottom') === true ||
                               document.getElementById('choice_'+i+'_'+w).classList.contains('robots') === true){
                          if(i===(h-1)){break}
                          CHOICE.top = (i+1)+'_'+w;
                          break
                      }else if(document.getElementById('square_bottom_'+i+'_'+w).classList.contains('top') === true ||
                              i===1 || ( (w===8||w===9) && i===10 )){
                          CHOICE.top = i+'_'+w;
                          break
                      }
                    }
                    //下
                    for(let i=h+1; i<=16;i++){
                      if(h===16 || document.getElementById('square_bottom_'+h+'_'+w).classList.contains('bottom') === true){
                        break
                      }else if(document.getElementById('square_bottom_'+i+'_'+w).classList.contains('top') === true ||
                               document.getElementById('choice_'+i+'_'+w).classList.contains('robots') === true){
                          if(i===(h+1)){break}
                          CHOICE.bottom = (i-1)+'_'+w;
                          break
                      }else if(document.getElementById('square_bottom_'+i+'_'+w).classList.contains('bottom') === true ||
                               i===16 || ( (w===8||w===9) && i===7 )){
                          CHOICE.bottom = i+'_'+w;
                          break
                        }
                    }
                    //左
                    for(let i=w-1; i>=1;i--){
                      if(w===1 || document.getElementById('square_bottom_'+h+'_'+w).classList.contains('left') === true){
                          break
                      }else if(document.getElementById('square_bottom_'+h+'_'+i).classList.contains('right') === true ||
                               document.getElementById('choice_'+h+'_'+i).classList.contains('robots') === true){
                          if(i===(w-1)){break}
                          CHOICE.left = h+'_'+(i+1);
                          break
                      }else if(document.getElementById('square_bottom_'+h+'_'+i).classList.contains('left') === true ||
                               i===1 || ( (h===8||h===9) && i===10 )){
                          CHOICE.left = h+'_'+i;
                          break
                      }
                    }
                    //右
                    for(let i=w+1; i<=16;i++){
                      if(w===16 || document.getElementById('square_bottom_'+h+'_'+w).classList.contains('right') === true){
                          break
                      }else if(document.getElementById('square_bottom_'+h+'_'+i).classList.contains('left') === true ||
                               document.getElementById('choice_'+h+'_'+i).classList.contains('robots') === true){
                          if(i===(w+1)){break}
                          CHOICE.right = h+'_'+(i-1);
                          break
                      }else if(document.getElementById('square_bottom_'+h+'_'+i).classList.contains('right') === true ||
                               i===16 || ( (h===8||h===9) && i===7 )){
                          CHOICE.right = h+'_'+i;
                          break
                      }
                    }
                    nextPosition();
                    //確認用完成時削除
                    //document.getElementById('choiceee').textContent = CHOICE.top+'|'+CHOICE.bottom+'|'+CHOICE.left+'|'+CHOICE.right;
                }
            });
        }
    }

    

}
