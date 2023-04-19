<template>
    <div class="main">
      <div class="des">
        <img src="src/assets/imgs/sapiens.png" alt="logo" class="logo"/>
        <img src="src/assets/imgs/Title/img.png"  alt="title" class="titleText"/>
        <div class="allText">
          <div class="desText desTitle">
            ·项目介绍
          </div>
          <div class="desText">
            慧识是一款集成三重安全防护与可视化智能监控的鲁棒人脸识别认证系统。慧识系统面向公司全体用户，对机密信息设置安全人脸识别防护，用户通过请求摄像头进行实时视频检测的方式，便捷地实现身份认证，以获取相应机密信息的访问权限。
          </div>
          <div class="desText desText2">
            慧识解决了人脸识别系统恶意攻击防御弱、人脸识别鲁棒差、识别系统监控难等安全问题，为您的人脸识别提供更好的安全保障！
          </div>
          <div class="desText desTitle">
            ·项目特色
          </div>
          <div class="desText desText3" style="text-indent: 0">
            （1）三重安全防护屏障，恶意攻击无处遁形
          </div>
          <div class="desText desText3" style="text-indent: 0">
            （2）鲁棒人脸识别模型，“人种歧视”一扫而光
          </div>
          <div class="desText desText3" style="text-indent: 0">
            （3）可视安全监控大屏，安全警告追踪入侵
          </div>
        </div>
  
      </div>
      <div class="circus">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <!--              紫色渐变-->
          <path fill="url(#gradient)" filter="url(#shadow)" d="M41.3,-39.7C56.2,-26.5,72.7,-13.2,74.7,2C76.6,17.2,64.1,34.4,49.3,49.3C34.4,64.2,17.2,76.9,-2.8,79.6C-22.8,82.4,-45.5,75.3,-56.4,60.4C-67.3,45.5,-66.3,22.8,-65.1,1.2C-63.9,-20.4,-62.5,-40.8,-51.7,-53.9C-40.8,-67.1,-20.4,-73.1,-3.6,-69.5C13.2,-65.9,26.5,-52.8,41.3,-39.7Z" transform="translate(100 100)" />
          <image x="50" y="60" width="100" height="100" xlink:href="src/assets/imgs/fonts/img.png" />
          <defs>
            <linearGradient id="gradient" x1="0" x2="1" y1="1" y2="0">
              <stop offset="5%" stop-color="#13B5B1"/>
              <stop offset="98%" stop-color="#88A888"/>
            </linearGradient>
            <filter id="shadow">
              <feDropShadow dx="1" dy="2" stdDeviation="2" flood-color="#13B5B1"/>
            </filter>
          </defs>
        </svg>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="svg2">
          <path fill="url(#gradient)" filter="url(#shadow)" d="M51.8,-55.2C63.6,-40,67.3,-20,68.7,1.4C70.1,22.8,69.3,45.6,57.4,56.2C45.6,66.8,22.8,65.2,1,64.2C-20.8,63.2,-41.5,62.7,-50.6,52.1C-59.7,41.5,-57.1,20.8,-54.8,2.4C-52.4,-16,-50.3,-32.1,-41.2,-47.3C-32.1,-62.6,-16,-77,2,-78.9C20,-80.9,40,-70.4,51.8,-55.2Z" transform="translate(100 100)" />
          <image x="55" y="55" width="100" height="100" xlink:href="src/assets/imgs/fonts/img_1.png" />
        </svg>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="svg3">
          <path fill="url(#gradient)" filter="url(#shadow)" d="M54.6,-56.4C66.2,-43,67.9,-21.5,68.4,0.5C69,22.6,68.4,45.2,56.8,59.8C45.2,74.3,22.6,80.8,3.8,77C-15,73.2,-30,59.1,-41.1,44.5C-52.1,30,-59.3,15,-63.2,-4C-67.2,-22.9,-68,-45.8,-56.9,-59.2C-45.8,-72.6,-22.9,-76.5,-0.7,-75.8C21.5,-75.1,43,-69.8,54.6,-56.4Z" transform="translate(100 100)" />
          <image x="60" y="50" width="100" height="100" xlink:href="src/assets/imgs/fonts/img_2.png" />
        </svg>
      </div>
    </div>
  </template>
  
  <style scoped lang="less">
  
  //main
  .main {
  /*background-color: #f2f2f2;*/
    width: 100%;
    height: 100%;

  
    display: flex;
    justify-content: center;
    align-items: center;
  
    flex-direction: column;
  }
  
  .des {
    display: flex;
    justify-content: center;
    align-items: center;
  
    margin-bottom: 5%;
  
    position: relative;
  }
  
  .logo {
    width: 20%;
  
    position: absolute;
  
    left: 150px;
    top: 20%;
  }
  
  .titleText {
    margin-left: 5%;
    width: 30%;
  }
  
  .allText {
    display: flex;
    flex-direction: column;
    justify-content: center;
  
    width: 45%;
    height: 83%;
  
    margin-bottom: 5.6%;
    margin-left: -19.3%;
    //padding-bottom: 5%;
    //border: 1px solid rgba(25, 186, 139, 0.3);
    //border-left: none;
  
    //text-shadow: #13B5B1 1px 1px 1px;
    padding-bottom: 10px;
  }
  
  .desText {
    text-indent: 2em;
    text-align: left;
  
    width: 98%;
  
    font-family: "楷体", sans-serif;
    font-size: 1.4em;
    line-height: 1.5em;
    font-weight: normal;
    //color: rgba(2, 251, 247, 0.97);
    color: white;
  
  
    margin-bottom: 1%;
    margin-left: 30%;
  }
  
  .desTitle {
    text-align: left;
    font-size: 1.8em;
    text-indent: 0;
  
  }
  
  .desText2 {
    margin-bottom: 0.5%;
  }
  
  .desText3 {
    margin-bottom: 0.5%;
  }
  
  
  
  .my-panel {
    position: relative;
  
    //border: 1px solid rgba(25, 186, 139, 0.2);
  
    background: url("src/assets/imgs/chartBack.png") no-repeat rgba(255, 255, 255, 0.04);
  
  }
  
  .my-panel::before {
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-right: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
    content: '';
  }
  
  .my-panel::after {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-right: 2px solid #02a6b5;
    border-bottom: 2px solid #02a6b5;
    content: '';
  }
  
  .circus {
    width: 80%;
    height: 80%;
    display: flex;
  
    justify-content: space-around;
    align-items: center;
  }
  
  .circus svg {
    width: 30%;
    height: 100%;
  }
  
  .svg2 {
    margin-top: 20%;
  }
  
  .svg3 {
    margin-bottom: 8%;
  }
  
  </style>
  