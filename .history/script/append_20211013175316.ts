

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
export function addXmlWithActivity(xmlFilePath:string,activityFilePath:string,packageInfo:string,festPath:string){
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
           marginEnd:Math.floor((Math.random()*250)+1),
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
      android:id="@+id/${item.id}"
      android:layout_width="${item.width}dp"
      android:layout_height="${item.height}dp"
      android:layout_centerInParent="true"
      android:text="${item.text}"
      android:layout_marginTop="${item.marginTop}dp"
      android:layout_marginBottom="${item.marginBottom}dp"
      android:layout_marginEnd="${item.marginEnd}dp"
      android:layout_marginStart="${item.marginStart}dp"
      android:textColor="${item.textColor}"/>
    `
   })
       //3. fs.writeFile  写入文件（会覆盖之前的内容）（文件不存在就创建）  utf8参数可以省略  
window.fs.writeFile(xmlFilePath+'/ac_'+name+'_layout.xml',`<?xml version="1.0" encoding="utf-8"?>
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
window.fs.writeFile(activityFilePath+'/LayoutX'+name+'Activity.java',`package ${packageInfo}.ui;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import ${packageInfo}.R;

class LayoutX${name}Activity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.ac_${name}_layout);
    }
}`,'utf8',function(error){
    if(error){
        console.log(error);
        return false;
    }
    console.log('写入成功');
})
console.log(festPath + '/AndroidManifest.xml')
        window.fs.readFile(festPath + '/AndroidManifest.xml', 'utf-8', (err: any, data: any) => {
            // if (type && type === "back") {
            //     data = data.replace(/assets_(.*)_img_/g, "")
            //     window.fs.writeFile(festPath + '/AndroidManifest' , data, 'utf8', (err: any) => {
            //         if (err) throw err;
            //         console.log('修改成功');
            //     });
            // } else {
                console.log(89)

              console.log(data)
              console.log(data.match(/\/\>(.*?)\<activity/gm));
              console.log('---')
                data = data.replace(/\/>(.*?)<activity/gm, `
                \/\>a<activity
            android:name=".ui.LayoutX${name}Activity"
            android:exported="true" />\<activity
                `)

                console.log(data)
                window.fs.writeFile(festPath + '/AndroidManifest.xml', data, 'utf8', (err: any) => {
                    if (err) throw err;
                    console.log('修改成功');
                    return 
                });
            // }

            // console.log(data.match(/assets_(.*)_img_/g))
        })

 

}