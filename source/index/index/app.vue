<template>
  <div class="layout">
    <!-- 头部 -->
    <i-menu mode="horizontal" theme="dark" active-name="1">
      <!-- logo -->
        <div class="layout-logo">
          <img src="https://img.alicdn.com/tps/TB16hl5LpXXXXXRXVXXXXXXXXXX-198-46.png" alt="">
        </div>
        <!-- 导航 -->
        <div class="layout-nav">
            <menu-item name="1">
                首页
            </menu-item>
            <menu-item name="2">
                电影
            </menu-item>
            <menu-item name="3">
                电视剧
            </menu-item>
            <menu-item name="4">
                教育
            </menu-item>
            <menu-item name="5">
                汽车
            </menu-item>
            <menu-item name="6">
                资讯
            </menu-item>
        </div>
    </i-menu>
    <!-- <i-menu mode="horizontal" active-name="1">
        <div class="layout-assistant">
            <menu-item name="1">Option 1</menu-item>
            <menu-item name="2">Option 2</menu-item>
            <menu-item name="3">Option 3</menu-item>
        </div>
    </i-menu> -->
    <Row class="layout-content">
            <!-- 垂直菜单 -->
            <Col span="5">
                <i-menu active-name="1-2" width="auto" :open-names="['1']">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </template>
                        <menu-item name="1-1">Option 1</menu-item>
                        <menu-item name="1-2">Option 2</menu-item>
                        <menu-item name="1-3">Option 3</menu-item>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </template>
                        <menu-item name="2-1">Option 1</menu-item>
                        <menu-item name="2-2">Option 2</menu-item>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </template>
                        <menu-item name="3-1">Option 1</menu-item>
                        <menu-item name="3-2">Option 2</menu-item>
                    </Submenu>
                </i-menu>
            </Col>
            <!-- 主要内容 -->
            <Col span="19">
                <div class="layout-content-main">
                    <Row :gutter="10">
                        <Col span="16">
                            <!-- 走马灯 -->
                            <Carousel class="carousel" autoplay loop>
                                <carousel-item v-for="imgSrc in imgSrcArr">
                                    <div class="carousel-item">
                                        <img :src="imgSrc">
                                    </div>
                                </carousel-item>
                            </Carousel>
                            <div class="block">
                                nihao
                            </div>
                        </Col>
                        <Col span="8">
                            <div class="right-block">
                                nihao
                            </div>
                            <div class="right-block">
                                    nihao1
                                </div> 
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </Row>
  </div>
</template>
<script>
import imgSrc from './timg.jpeg';

export default {
    data() {
        return {
            imgSrcArr: [imgSrc, imgSrc, imgSrc]
        };
    }
}
</script>

<style>
.carousel img {
    width: 100%;
    height: 300px;
}
.block {
    background: #fff;
    height: 400px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 8px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.15);
}
.right-block {
    width: 100%;
    height: 300px;
    margin-bottom: 10px;
    padding: 8px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,0.15);
}
.layout{
    background: #eaedf1;
}
.layout-logo{
    width: 100px;
    height: 60px;
    border-radius: 3px;
    float: left;
    position: relative;
    left: 10px;
    top: 10px;
}
.layout-logo img {
    width: 100px;
    height: 30px;
}
.layout-nav{
    width: 470px;
    height: 60px;
    margin: 0 auto;
}
/* .layout-assistant{
    width: 300px;
    margin: 0 auto;
    height: inherit;
} */
.layout-breadcrumb{
    padding: 10px 15px 0;
}
.layout-content{
    width: 100%;
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    border-radius: 4px;
}
.layout-content-main{
    padding: 10px;
}
.layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}
</style>