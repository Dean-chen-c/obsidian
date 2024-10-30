

，这需要一个大的表去维护，前端暂时没有对应的表，但是可以通过下面思路去检查图片格式。


### 背景

平台上传镜像前，想检查镜像文件是否是支持的格式，因为镜像文件都是比较大的，如果要等完全上传完，再去检查成本提高，那有没有办法在前端去检查文件格式呢？

上传文件，前端一般通过input accept 属性检查文件扩展名，来判断是否是支持的类型，这样其实是不准确的。

shell命令里面检查文件类型 通常用`file`命令

```shell
file t.png
file deabian.iso
```

### 原理

每个文件有对应的 文件签名（Magic Numbers），一般都在文件头部一些字节里面包含了这个信息。file命令通过一个表去做对比来判断文件类型。

[# List of file signatures](https://en.wikipedia.org/wiki/List_of_file_signatures)

[GCK'S FILE SIGNATURES TABLE](https://www.garykessler.net/library/file_sigs.html)

[DROID 签名文件](https://www.nationalarchives.gov.uk/aboutapps/pronom/droid-signature-files.htm)

### 前端作法

```jsx
// 业务代码

<input 
	type="file" 
	classname="{styles['upload-btn']}" 
	accept=".iso,.raw,.qcow2,.img" 
	onchange="{this.handleFilePick}" 
/>

handleFilePick = (e) => {
	isFunction(e.persist) && e.persist();
	const { imageStore } = this.props;
	const file = e.target.files[0] || {};
	
	checkMimeType(file, (type) => {
	  if (['iso', 'qcow'].includes(type)) {
		imageStore.set({ file });
		e.target.value = '';
		this.handleCheckUpload();
	  } else {
		Alert.error(t('file MIME type error'));
	  }
	});
};
```

```js
// check mimeType

const mimeType = (header) => {
  let type = '';
  switch (header) {
    case '33ed90':
      type = 'iso';
      break;
    case '514649':
      type = 'qcow';
      break;
    default: // Or you can use the blob.type as fallback
      type = 'unknown';
      break;
  }

  return type;
};

const checkMimeType = (blob, callBack) => {
  if (window.FileReader && window.Blob) {
    const fileReader = new FileReader();
    fileReader.onloadend = function (ee) {
      const arr = new Uint8Array(ee.target.result).subarray(0, 3);
      let header = '';
      for (let i = 0; i < arr.length; i++) {
        header += arr[i].toString(16);
      }

      isFunction(callBack) && callBack(mimeType(header));
    };

    fileReader.readAsArrayBuffer(blob);
  } else {
    isFunction(callBack) && callBack(mimeType(''));
  }
};
```

对于iso文件，头部类型太多，没法穷举，在前端没法准确完成，查看使用有对应的库去做这个事情 mime file-type 都不是去检查文件二进制标识。还有其他办法嘛？

### 其他

通过拆分文件头部前64KiB数据（windows iso前32kb数据都是0），进行检查是否可行

![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/1730258833000vmlrzw.png)

![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/173025884600022si6r.png)

本地实验

```shell
# dd 命令拆分文件
dd if=debian-12.1.0-amd64-DVD-1.iso of=debian2.iso bs=1024 count=3

file debian2.iso
# debian2.iso: ISO 9660 CD-ROM filesystem data (DOS/MBR boot sector) 'TinyCore' (bootable)
```

实验可行，那就可以前端拆分文件，发给后端进行检查，这样成本小，结果准确。

