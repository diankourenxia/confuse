

export function getUUID() {
    return Math.random()
        .toString(16)
        .slice(8 * -1)
        .toLowerCase();
}

export function editFileName(type: 'edit' | 'back', filePath: string, extHeader?: string) {
   return new Promise((res,rej)=>{
    window.fs.readdir(filePath, function (err: any, files: any) {
        files.forEach(function (filename: string) {
            const oldPath = filePath + '/' + filename;
            let newPath = ""
            if (type && type === "back") {
                newPath = filePath + '/' + filename.replace(/assets_(.*)_img_/g, "")
                res(`${oldPath}
                替换为
                ${newPath}`)
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
                    res(`${oldPath}
                    替换为
                    ${newPath}`);
                }
            })
        });
    });
   }) 
   
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
                        return ``
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