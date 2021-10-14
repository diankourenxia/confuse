

export function getUUID(){
    return Math.random()
             .toString(16)
             .slice(8 * -1)
             .toLowerCase();
 }
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