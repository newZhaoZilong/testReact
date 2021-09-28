import React, { Component, useState } from 'react'
// import { Button,DatePicker } from 'antd';
// import {WechatOutlined,WeiboOutlined,SearchOutlined} from '@ant-design/icons'
// const { RangePicker } = DatePicker;

// export default class App extends Component {
// 	render() {
// 		return (
// 			<div>
// 				App....
// 				<button>点我</button>
// 				<Button type="primary">按钮1</Button>
// 				<Button >按钮2</Button>
// 				<Button type="link">按钮3</Button>
// 				<Button type="primary" icon={<SearchOutlined />}>
// 					Search
// 				</Button>
// 				<WechatOutlined />
// 				<WeiboOutlined />
// 				<DatePicker/>
// 				<RangePicker/>
// 			</div>
// 		)
// 	}
// }
export default function App() {
	// 声明一个新的叫做 “count” 的 state 变量
	const [count, setCount] = useState(0);

	userEffect((e) => {
		console.log("userEffect", e);
		document.title = `You clicked ${count} times`
	});

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>
				Click me
			</button>
		</div>
	);
}