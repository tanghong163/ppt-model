/*
 * @Author: sugar th14200143@163.com
 * @Date: 2022-09-24 16:54:23
 * @LastEditors: sugar th14200143@163.com
 * @LastEditTime: 2022-11-11 13:53:39
 * @FilePath: \ppt-model\src\global\register-element.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { App } from 'vue';
// 此方式按需引入组件，可结合 babel-plugin-import来处理引入组件每一个对应样式文件的同时引入;而不用单独的一个个对应组件样式文件一一引入
// import 'ant-design-vue/lib/menu/style/css'
// import 'ant-design-vue/lib/dropdown/style/css'
import {
  Col,
  InputNumber,
  Divider,
  Button,
  Tooltip,
  Popover,
  Slider,
  Select,
  Switch,
  Radio,
  Row,
  Input,
  Modal,
  Dropdown,
  Menu,
  Checkbox,
  Drawer,
  Spin,
  Upload,
  Image,
  Table,
  Tabs,
  List
} from 'ant-design-vue';
// 样式引入还有以下方式:
// 全部的样式:import 'ant-design-vue/dist/antd.css';
// 某个组件的样式: import 'ant-design-vue/lib/button/style'; 或者 ant-design-vue/lib/button/style/css 加载 css 文件
const components = [
  Col,
  InputNumber,
  Divider,
  Button,
  Button.Group,
  Tooltip,
  Popover,
  Slider,
  Select,
  Select.Option,
  Select.OptGroup,
  Switch,
  Radio,
  Radio.Group,
  Radio.Button,
  Row,
  Input,
  Input.Group,
  Input.TextArea,
  Modal,
  Dropdown,
  Dropdown.Button,
  Menu,
  Menu.Item,
  Checkbox,
  Checkbox.Group,
  Drawer,
  Spin,
  Upload,
  Image,
  Table,
  Tabs,
  Tabs.TabPane,
  List,
  List.Item
];

export default function (app: App): void {
  for (let component of components) {
    // 如将AInputNumber组件的名字改为InputNumber
    app.component(component.name.slice(1), component);
  }
}
