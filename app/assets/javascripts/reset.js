'use strict';
{

    const choices = {};
    const default_color = [];
    const default_position = [];
    const piececolors =  ['red','blue','yellow','green' ];

    //駒の初期値記録
    for(let h = 1; h <= 16; h++){
        for(let w = 1; w <= 16; w++){
            choices['choice_'+h+'_'+w] = document.getElementById('choice_'+h+'_'+w);

            if(choices['choice_'+h+'_'+w].classList.contains('robots') === true){
                piececolors.forEach(function(color){
                    if(choices['choice_'+h+'_'+w].classList.contains(color)){
                        default_color.push(color);
                        default_position.push('choice_'+h+'_'+w);
                    }
                });

            }
        }
      }

        document.getElementById('resetbtn').addEventListener('click',function(){
            if(reset_btn === true){
              //con.jsの定数を使用

                trouble_count = 0;
                trouble.textContent = `手数 ${trouble_count}`;
              //
                for(let h = 1; h <= 16; h++){
                    for(let w = 1; w <= 16; w++){

                        $(choices['choice_'+h+'_'+w]).removeClass();
                        choices['choice_'+h+'_'+w].classList.add('square-range');

                        default_position.forEach(function(position,i){
                            if(position === 'choice_'+h+'_'+w){
                                choices['choice_'+h+'_'+w].classList.add(default_color[i]);
                                choices['choice_'+h+'_'+w].classList.add('robots');
                            }
                        });

                    }
                }
                
            }

        });


    //document.getElementById('resetbtn').textContent =reset_btn;
}
