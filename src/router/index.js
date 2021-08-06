import Vue from 'vue';
import VueRouter from 'vue-router';
import Intro from '../views/Intro';
import Display from '../views/Display';
import Direction from '../views/Direction';
import FlexWrap from '../views/FlexWrap';
import FlexFlow from '../views/FlexFlow';
import JustifyContent from '../views/JustifyContent';
import AlignItems from '../views/AlignItems';
import AlignContent from '../views/AlignContent';
import Order from '../views/Order';
import FlexGrow from '../views/FlexGrow';
import FlexShrink from '../views/FlexShrink';
import FlexBasis from '../views/FlexBasis';
import AlignSelf from '../views/AlignSelf';
import Flex from '../views/Flex';
import CodeGenerator from '../views/CodeGenerator';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: "/", name : 'Intro', component: Intro } ,
    { path: "/display", name : 'display', component: Display } ,
    { path: "/direction", name : 'flex-direction', component: Direction } ,
    { path: "/flexwrap", name : 'flex-wrap', component: FlexWrap } ,
    { path: "/flexflow", name : 'flex-flow', component: FlexFlow } ,
    { path: "/justifycontent", name : 'justify-content', component: JustifyContent } ,
    { path: "/alignitems", name : 'align-items', component: AlignItems } ,
    { path: "/aligncontent", name : 'align-content', component: AlignContent } ,
    { path: "/order", name : 'order', component: Order } ,
    { path: "/flexgrow", name : 'flex-grow', component: FlexGrow } ,
    { path: "/flexshrink", name : 'flex-shrink', component: FlexShrink } ,
    { path: "/flexbasis", name : 'flex-basis', component: FlexBasis } ,
    { path: "/alignself", name : 'align-self', component: AlignSelf } ,
    { path: "/flex", name : 'flex', component: Flex } ,
    { path: "/generator", name : 'Code Generator', component: CodeGenerator } ,
  ]
});

export default router; 