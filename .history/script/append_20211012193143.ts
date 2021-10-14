

export function getUUID(){
    return Math.random()
             .toString(16)
             .slice(8 * -1)
             .toLowerCase();
 }

 export function obj2xml(list:Array<object>){
      list.forEach((item:any)=>{

      })
 }
export function addXmlWithActivity(xmlFilePath:string,activityFilePath:string,packageInfo:string){
    let name = getUUID()
    let scaleTypeList=['center', 'centerCrop', 'centerInside', 'fitCenter', 'fitEnd', 'fitStart', 'fitXY', 'matrix']
    let eleTypeList=['ImageView','TextView','LinearLayout']
    let imgList=[]
    let eleTarget = {
        id:1,
        width:100,
        height:100,
    }
    let eleList = []
    let eleStr = ''
    let randomElementLength =  Math.floor((Math.random()*50)+1)
   for(let i =0;i<randomElementLength;i++){
       let target = {
           type:'TextView',
           width:Math.floor((Math.random()*250)+1),
           height:Math.floor((Math.random()*250)+1),
           marginTop:Math.floor((Math.random()*250)+1),
           marginBottom:Math.floor((Math.random()*250)+1),
           marginStart:Math.floor((Math.random()*250)+1),
           marginRight:Math.floor((Math.random()*250)+1),
           id:`A${i}`,
           text: Math.random().toString(36).substr(2),
           textColor:'#' + Math.floor( Math.random() * 0xffffff ).toString(16)
       };
       console.log(target)
       eleList.push(target)
   }
   console.log(eleList)
   eleList.forEach((item:any)=>{
    eleStr+=`
    <${item.type}
    android:layout_width="${item.width}dp"
    android:layout_height="${item.height}dp"
    android:layout_centerInParent="true"
    android:text="${item.text}"
    android:layout_marginTop="${item.marginTop}dp"
    android:layout_marginBottom="${item.marginBottom}dp"
    android:layout_marginRight="${item.marginRight}dp"
    android:layout_marginStart="${item.marginStart}dp"
    android:textColor="#FFFFFFFF"
    android:textSize="20sp" />
    `
   })
       //3. fs.writeFile  写入文件（会覆盖之前的内容）（文件不存在就创建）  utf8参数可以省略  
window.fs.writeFile(xmlFilePath+'/aa'+name+'bc.xml',`<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools">

    <androidx.drawerlayout.widget.DrawerLayout
        android:id="@+id/drawLayout"
        android:layout_width="match_parent"
        android:layout_height="match_parent">

       ${eleStr}
    </androidx.drawerlayout.widget.DrawerLayout>


</layout>`,'utf8',function(error){
    if(error){
        console.log(error);
        return false;
    }

    console.log('写入成功');
})
        //3. fs.writeFile  写入文件（会覆盖之前的内容）（文件不存在就创建）  utf8参数可以省略  
window.fs.writeFile(activityFilePath+'/F'+name+'F.java',`package ${packageInfo}.ui;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import ${packageInfo}.R;

class F${name}FActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.aa${name}bc);
    }
}`,'utf8',function(error){
    if(error){
        console.log(error);
        return false;
    }
    console.log('写入成功');
})
}