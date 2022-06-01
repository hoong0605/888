var inputElement,sliderElement,btnElement,colorPicker
var randomValue=0

function setup() {
 createCanvas(windowWidth, windowHeight);
 background(0);
 inputElement =createInput("Hello")//產生一個文字輸入方塊
 inputElement.position(50,10)//決定文字方塊放置的位置
 sliderElement= createSlider(10,50,20,0.01)//最小值，最大值，預設值，間距
 sliderElement.position(50,30)//決定滑竿位置
 btnElement =createButton("抖起來吧孩子")
 btnElement.position(50,50)
 btnElement.mousePressed(goCrazy)
 colorPicker = createColorPicker('#ed225d');//括號內的值，為預設值
 colorPicker.position(250,10)
 radioElement=createRadio()
  radioElement.option("一般")
  radioElement.option("旋轉(rotate)")
  radioElement.option("大小(scale)")
 radioElement.position(250,50)
 radioElement.style("background-color",'white')//設定為CSS格式

}

function goCrazy(){
  if(randomValue>0){
  randomValue=0//靜止不動
 }
 else
 {
  randomValue=10//抖動的距離為+-10
 }
}

function draw() {
 background(0)
 var txts = inputElement.value();
 if(txts=="pizza"){
  txts="🍕"
 }
 if(txts=="哭阿"){
  txts="😢"
 }
 if(txts=="牛逼"){
  txts="🐮🍺"
 }
 var textHeight=sliderElement.value()
 textSize(sliderElement.value())
 var textLength=textWidth(txts)+100
 var mode = radioElement.value()
 for(var y=0;y<height;y=y+textHeight+20){
 push()
    if(int(y/(textHeight+20))%2==0){
     fill(colorPicker.value())//偶數行充滿顏色
     translate(-50,0)//使得偶數行的X軸移動50
    }
    else{
     fill(255)
    }
  for(var x=0;x<width;x=x+textLength)
 { push()
  translate(x+random(-randomValue,randomValue),y+random(-randomValue,randomValue))
   if (mode=="旋轉(rotate)"){
   //rotate(PI/4)
   rotate(sin(frameCount/20+y/2))
  }else if (mode=="大小(scale)"){
   scale(sin(frameCount/20+y/10))
  }
  text(txts,0,0) //顯示文字在座標上
   pop()
  }
  pop()
 }
}