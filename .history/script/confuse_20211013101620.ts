// 引入fs文件处理模块
// import  fs  from 'fs';
// 现在我们要关心的是'icons'文件夹
// 我们不妨用变量表示这个文件夹名称，方便日后维护和管理
// const filePath = '/Users/yaohui/Downloads/HummerVpn/app/src/main/res/drawable';
// const filePath = '/Users/yaohui/Downloads/HummerVpn/app/src/main/res/layout';
// let type:'edit'|'back' ='edit'  // edit or back


export function getUUID() {
    return Math.random()
        .toString(16)
        .slice(8 * -1)
        .toLowerCase();
}



export function editFileName(type: 'edit' | 'back', filePath: string, extHeader?: string) {
    window.fs.readdir(filePath, function (err: any, files: any) {
        files.forEach(function (filename: string) {
            const oldPath = filePath + '/' + filename;
            let newPath = ""
            if (type && type === "back") {
                newPath = filePath + '/' + filename.replace(/assets_(.*)_img_/g, "")
            } else {
                if (filename.match(/assets_(.*)_img_/g)) {
                    newPath = oldPath
                } else {
                    newPath = filePath + '/' + extHeader + filename
                }
            }
            window.fs.rename(oldPath, newPath, function (err: any) {
                if (!err) {
                    console.log(`${oldPath}
                    替换为
                    ${newPath}`);
                }
            })
        });
    });
};

export function editFileContentAssetsName(type: 'edit' | 'back', filePath: string, extHeader?: string) {
    window.fs.readdir(filePath, function (err: any, files: any) {
        files.forEach(function (filename: string) {
            console.log(filePath + '/' + filename)
            window.fs.readFile(filePath + '/' + filename, 'utf-8', (err: any, data: any) => {
                if (type && type === "back") {
                    data = data.replace(/assets_(.*)_img_/g, "")
                    window.fs.writeFile(filePath + '/' + filename, data, 'utf8', (err: any) => {
                        if (err) throw err;
                        console.log('修改成功');
                    });
                } else {
                    let target = "@drawable/" + extHeader + "$1" + '"'
                    data = data.replace(/\@drawable\/(.*?)\"/gm, target)
                    console.log(data)
                    window.fs.writeFile(filePath + '/' + filename, data, 'utf8', (err: any) => {
                        if (err) throw err;
                        console.log('修改成功');
                    });
                }

                // console.log(data.match(/assets_(.*)_img_/g))
            })

        })
    });
}
export function editClassFileName(type: 'edit' | 'back', filePath: string, extHeader?: string) {
    window.fs.readdir(filePath, function (err: any, files: any) {
        files.forEach(function (filename: string) {
            const oldPath = filePath + '/' + filename;
            let newPath = ""
            if (type && type === "back") {
                newPath = filePath + '/' + filename.replace(/a_(.*)_b_/g, "")
            } else {
                if (filename.match(/a_(.*)_b_/g)) {
                    newPath = oldPath
                } else {
                    newPath = filePath + '/' + extHeader + filename
                }
            }
            window.fs.rename(oldPath, newPath, function (err: any) {
                if (!err) {
                    console.log(`${oldPath}
                    替换为
                    ${newPath}`);
                }
            })
        });
    });
};


export function editClassFun() {

}