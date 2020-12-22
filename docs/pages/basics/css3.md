## css

### 内联样式表

``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>内嵌样式</title>
	<style type="text/css">
		/* 这里是内嵌样式 */
		.red {
			color: red;
		}
		.green span{
			color: green;
		}
	</style>
</head>
<body>
	<div class="red">我是红色字体</div>
	<div class="green"><span>我是绿色字体</span></div>
</body>
</html>
```
::: tip
* type="text/css 可以省略
* 注意：这里是一般写在head中，不一定必须写在head标签中，理论上可以写在html文档的任何地方
:::

### 行内样式

``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>行内样式</title>
</head>
<body>
	<div style="color: red; font-size: 32px; font-weight: bolder;">我是红色字体</div>
	<div style="background: yellow; font-size: 40px;">你好！
        <!-- 这里的span标签的字体大小，会继承父标签的字体大小 -->
		<span style="color: green;">我是绿色字体</span>
	</div>
</body>
</html>
```
::: tip
* 多个属性用分号隔开
* 行内样式书写规范和普通CSS编写规范一样，不过仅仅作用于当前标签和继承其属性的子标签
:::

### 外链样式文件

``` html
<head>
  <link href="./main.css" type="text/CSS" rel="stylesheet" />
</head>
```
::: tip
* 通过link标签，讲一个扩展名为css的文件，引入html中，我们在css文件中编写样式即可，又称链接式
* 注意：link标签必须写在head中
* href：外部资源地址，这里是指css文件的路径
* rel：定义当前文档与被链接文档之间的关系，stylesheet代表外部CSS样式表，只有用 stylesheet 才被所有浏览器支持，其余的都存在兼容性问题
* type：规定被链接文档的 MIME 类
:::

### @import

