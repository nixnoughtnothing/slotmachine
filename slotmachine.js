/*
* ミニゲーム スロットマシーン :　無名関数でまとめてます。  
*/
(function(){
    var timers,
        nums,
        stopCount;

    /*
    * onclick定義
    */
    document.getElementById('stop0').onclick = function(){
        stopSlot(0);
    }
    document.getElementById('stop1').onclick = function(){
        stopSlot(1);
    }
    document.getElementById('stop2').onclick = function(){
        stopSlot(2);
    }


    /*
    * 初期化メソッド
    */
    function startSlot()
    {
        timers    = [];
        nums      = [];
        stopCount = 0;

        runSlot(0);
        runSlot(1);
        runSlot(2);
    }


    /*
    * スロットを動かすメソッド 
    * @param Number n : slotnumber
    */
    function runSlot(n)
    {
        document.getElementById('num'+n).innerHTML = Math.floor(Math.random()*10);
        
        // setTimeout()メソッドは@param1 に記載したjsの命令（関数など）を 毎[@param2]秒後に呼び出す
        timers[n] = setTimeout(function()
        {
            runSlot(n);
        },50)
    }

    // スロットを初期化して、runSlotメソッドを動かす
    startSlot();


    /*
    * スロット停止
    */
    function stopSlot(n)
    {
        // if(nums[n] != undefined){
        if(typeof nums[n] !== 'undefined'){
            return;
        }

        clearTimeout(timers[n]);
        nums[n] = document.getElementById('num'+n).innerHTML;
        stopCount++;

        if(stopCount === 3){
            checkSlot();
        }
    }


    /*
    * スロットが揃ったかチェック
    */
    function checkSlot()
    {
        // alert("check");
        nums.sort();
        console.log(nums);

        if(nums[0] == nums[1] && nums[1] == nums[2]){
            alert('3つ揃った！excellent！！');
        }else if(nums[0] == nums[1] || nums[1] == nums[2]){
            alert('２つ揃った！ナイス！！');
        }else{
            alert('ダメだね');
        }

    }
})();