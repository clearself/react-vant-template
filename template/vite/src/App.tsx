import React, { useState } from 'react'
import { Button, Dialog } from 'react-vant';

import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <Button round type="primary" onClick={() => Dialog.alert({ title: '提示', message: `参照 Vant 打造的 React 框架移动端组件库。`})}>欢迎使用React Vant</Button>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App


const options = [
  {
    text: '浙江省',
    value: '330000',
    children: [
      {
        text: '杭州市',
        value: '330100',
        children: [
          {
            text: '上城区',
            value: '330102',
          },
          {
            text: '下城区',
            value: '330103',
          },
          {
            text: '江干区',
            value: '330104',
          },
        ],
      },
      {
        text: '宁波市',
        value: '330200',
        children: [
          {
            text: '海曙区',
            value: '330203',
          },
          {
            text: '江北区',
            value: '330205',
          },
          {
            text: '北仑区',
            value: '330206',
          },
        ],
      },
      {
        text: '温州市',
        value: '330300',
        children: [
          {
            text: '鹿城区',
            value: '330302',
          },
          {
            text: '龙湾区',
            value: '330303',
          },
          {
            text: '瓯海区',
            value: '330304',
          },
        ],
      },
    ],
  },
  {
    text: '江苏省',
    value: '320000',
    children: [
      {
        text: '南京市',
        value: '320100',
        children: [
          {
            text: '玄武区',
            value: '320102',
          },
          {
            text: '秦淮区',
            value: '320104',
          },
          {
            text: '建邺区',
            value: '320105',
          },
        ],
      },
      {
        text: '无锡市',
        value: '320200',
        children: [
          {
            text: '锡山区',
            value: '320205',
          },
          {
            text: '惠山区',
            value: '320206',
          },
          {
            text: '滨湖区',
            value: '320211',
          },
        ],
      },
      {
        text: '徐州市',
        value: '320300',
        children: [
          {
            text: '鼓楼区',
            value: '320302',
          },
          {
            text: '云龙区',
            value: '320303',
          },
          {
            text: '贾汪区',
            value: '320305',
          },
        ],
      },
    ],
  },
];