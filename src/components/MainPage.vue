<template>
    <div class="appmain">
      <div class="content-center">
        <header>
          <a class="head1Text">Wash & Dry</a> <br>
          <a class="describe1">ร้านซักอบ 24 ชั่วโมง</a>
        </header>
        <div class="image-and-button">
          <img alt="startimage" :src="require('@/assets/image/washclothes.webp')">
          
          
        </div>
  
        <router-link to="/Login" class="Btn-Container">
          <button class="Btn-Container">
            <span class="text">let's go!</span>
            <span class="icon-Container">
              <svg
                width="16"
                height="19"
                viewBox="0 0 16 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
                <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
                <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
              </svg>
            </span>
          </button>
        </router-link>

      </div>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainPage',
  };
  </script>
  
  
  <style>
  
  .appmain{
    background: rgb(15,30,94);
    background: linear-gradient(211deg, rgba(15,30,94,1) 0%, rgba(26,115,228,1) 50%, rgba(83,255,204,1) 100%); 
  }
  
  .head1Text {
    font-weight: bold;
    font-size: 60px;
    color: #ffffff;
  }
  .describe1 {
    font-size: 20px;
    color: #ffffff;
  }
  
  .content-center {
    display: flex;
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    min-height: 100vh; 
    text-align: center;
  }
  
  .image-and-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  

.Btn-Container {
  display: flex;
  width: 170px;
  height: fit-content;
  background-color: #0c0540;
  border-radius: 40px;
  box-shadow: 0px 5px 10px #bebebe;
  justify-content: space-between;
  align-items: center;
  border: none;
  cursor: pointer;
}
.icon-Container {
  width: 45px;
  height: 45px;
  background-color: #ffdf10;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 3px solid #1d2129;
}
.text {
  width: calc(170px - 45px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.1em;
  letter-spacing: 1.2px;
}
.icon-Container svg {
  transition-duration: 1.5s;
}
.Btn-Container:hover .icon-Container svg {
  transition-duration: 1.5s;
  animation: arrow 1s linear infinite;
}
@keyframes arrow {
  0% {
    opacity: 0;
    margin-left: 0px;
  }
  100% {
    opacity: 1;
    margin-left: 10px;
  }
}

  

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


  </style>
  