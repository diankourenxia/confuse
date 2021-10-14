// 引入fs文件处理模块
// import  fs  from 'fs';
// 现在我们要关心的是'icons'文件夹
// 我们不妨用变量表示这个文件夹名称，方便日后维护和管理
// const filePath = '/Users/yaohui/Downloads/HummerVpn/app/src/main/res/drawable';
// const filePath = '/Users/yaohui/Downloads/HummerVpn/app/src/main/res/layout';
// let type:'edit'|'back' ='edit'  // edit or back


export function getUUID(){
   return Math.random()
            .toString(16)
            .slice(8 * -1)
            .toLowerCase();
}



export function editFileName(type:'edit'|'back',filePath:string,extHeader?:string){
  
    window.fs.readdir(filePath, function (err:any, files:any) {

        files.forEach(function (filename:string) {
    
            const oldPath = filePath + '/' + filename;
            let newPath =""
            if(type&&type==="back"){
                newPath =filePath + '/' +filename.replace(/assets_(.*)_img_/g,"")
            }else{
                if(filename.match(/assets_(.*)_img_/g)){
                    newPath = oldPath
                }else{
                    newPath =filePath + '/' + extHeader+filename
                }
            }
            window.fs.rename(oldPath, newPath, function (err:any) {
                if (!err) {
                    console.log(`${oldPath}
                    替换为
                    ${newPath}`);
                }
            })
        });
    });
};

export function editFileContentAssetsName(type:'edit'|'back',filePath:string,extHeader?:string){
 

window.fs.readdir(filePath, function (err:any, files:any) {
    files.forEach(function (filename:string) {
        console.log(filePath+'/'+filename)
        window.fs.readFile(filePath+'/'+filename,'utf-8',(err:any,data:any)=>{
            if(type&&type==="back"){
                data=data.replace(/assets_(.*)_img_/g,"")
                window.fs.writeFile(filePath+'/'+filename, data, 'utf8', (err:any) => {
                    if (err) throw err;
                    console.log('修改成功');
                });
            }else{
                let target ="@drawable/"+ extHeader+"$1"+'"'
                data=data.replace(/\@drawable\/(.*?)\"/gm,target)
                console.log(data)
                window.fs.writeFile(filePath+'/'+filename, data, 'utf8', (err: any) => {
                    if (err) throw err;
                    console.log('修改成功');
                });
            }
            
            // console.log(data.match(/assets_(.*)_img_/g))
        })

    })
});
}
export function editClassFileName(type:'edit'|'back',filePath:string,extHeader?:string){
  
    window.fs.readdir(filePath, function (err:any, files:any) {

        files.forEach(function (filename:string) {
    
            const oldPath = filePath + '/' + filename;
            let newPath =""
            if(type&&type==="back"){
                newPath =filePath + '/' +filename.replace(/a_(.*)_b_/g,"")
            }else{
                if(filename.match(/a_(.*)_b_/g)){
                    newPath = oldPath
                }else{
                    newPath =filePath + '/' + extHeader+filename
                }
            }
            window.fs.rename(oldPath, newPath, function (err:any) {
                if (!err) {
                    console.log(`${oldPath}
                    替换为
                    ${newPath}`);
                }
            })
        });
    });
};
export function addXml(filePath:string){
    let path = '/Users/yaohui/Downloads/HummerVpn/app/src/main/res/layout/'
    let name = getUUID()
       //3. fs.writeFile  写入文件（会覆盖之前的内容）（文件不存在就创建）  utf8参数可以省略  
window.fs.writeFile(path+name+'.xml',`<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools">

    <androidx.drawerlayout.widget.DrawerLayout
        android:id="@+id/drawLayout"
        android:layout_width="match_parent"
        android:layout_height="match_parent">

        <RelativeLayout
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:background="@color/white">

            <ImageView
                android:layout_width="match_parent"
                android:layout_height="match_parent"
                android:scaleType="fitXY"
                android:src="@mipmap/bg_main" />

            <RelativeLayout
                android:id="@+id/rl_top"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_marginTop="25dp">

                <ImageView
                    android:id="@+id/iv_menu"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:layout_centerVertical="true"
                    android:layout_marginLeft="8dp"
                    android:onClick="doClick"
                    android:padding="10dp"
                    android:src="@mipmap/ic_menu" />

                <TextView
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:layout_centerInParent="true"
                    android:text="HUMMER VPN"
                    android:textColor="#FFFFFFFF"
                    android:textSize="20sp" />
            </RelativeLayout>

            <androidx.cardview.widget.CardView
                android:layout_width="match_parent"
                android:layout_height="104dp"
                android:layout_below="@+id/rl_top"
                android:layout_marginHorizontal="18dp"
                android:layout_marginTop="25dp"
                android:background="@null"
                android:visibility="gone"
                app:cardCornerRadius="10dp">


            </androidx.cardview.widget.CardView>


            <RelativeLayout
                android:id="@+id/rl_center"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_centerInParent="true">

                <ImageView
                    android:id="@+id/iv_shield"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:layout_centerInParent="true"
                    android:src="@mipmap/ic_shield" />

                <ImageView
                    android:id="@+id/iv_rocket"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:layout_centerInParent="true"
                    android:src="@mipmap/ic_rocket"
                    android:visibility="visible" />

                <com.airbnb.lottie.LottieAnimationView
                    android:id="@+id/animationView"
                    android:layout_width="200dp"
                    android:layout_height="200dp"
                    android:layout_centerInParent="true"
                    android:visibility="invisible"
                    app:lottie_autoPlay="false"
                    app:lottie_loop="true"
                    app:lottie_rawRes="@raw/rocket" />

                <Chronometer
                    android:id="@+id/timer"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:layout_centerInParent="true"
                    android:layout_centerHorizontal="true"
                    android:format="00:00:00"
                    android:gravity="center"
                    android:textColor="@color/white"
                    android:textSize="25sp"
                    android:textStyle="bold"
                    android:visibility="gone" />


            </RelativeLayout>


            <TextView
                android:id="@+id/tv_connect"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_above="@+id/ll_choose_service"
                android:layout_marginHorizontal="70dp"
                android:background="@drawable/bg_radius_23dp_58e7c7_3c7eee"
                android:gravity="center"
                android:onClick="doClick"
                android:paddingVertical="15dp"
                android:text="CONNECT"
                android:textColor="@color/white" />

            <LinearLayout
                android:id="@+id/ll_choose_service"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_alignParentBottom="true"
                android:layout_marginHorizontal="70dp"
                android:layout_marginTop="15dp"
                android:layout_marginBottom="100dp"
                android:background="@mipmap/bg_choose_country_btn"
                android:gravity="center_vertical"
                android:onClick="doClick"
                android:paddingHorizontal="18dp"
                android:paddingVertical="15dp">

                <ImageView
                    android:id="@+id/iv_icon"
                    android:layout_width="20dp"
                    android:layout_height="20dp"
                    android:src="@drawable/earth" />

                <TextView
                    android:id="@+id/tv_name"
                    android:layout_width="0dp"
                    android:layout_height="wrap_content"
                    android:layout_marginLeft="15dp"
                    android:layout_weight="1"
                    android:text="Best Service"
                    android:textColor="#ff333333"
                    android:textSize="15sp" />

                <ImageView
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:src="@mipmap/ic_right_black" />


            </LinearLayout>

            <ImageView
                android:id="@+id/iv_login"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_below="@+id/ll_choose_service"
                android:layout_centerHorizontal="true"
                android:layout_marginTop="30dp"
                android:onClick="doClick"
                android:src="@mipmap/bg_btn_login"
                android:visibility="gone" />

        </RelativeLayout>

        <include layout="@layout/draw_menu_layout" />
    </androidx.drawerlayout.widget.DrawerLayout>


</layout>`,'utf8',function(error){
    if(error){
        console.log(error);
        return false;
    }
    console.log('写入成功');
})
        //3. fs.writeFile  写入文件（会覆盖之前的内容）（文件不存在就创建）  utf8参数可以省略  
window.fs.writeFile('123.java','你好nodejs 覆盖','utf8',function(error){
    if(error){
        console.log(error);
        return false;
    }
    console.log('写入成功');
})
}