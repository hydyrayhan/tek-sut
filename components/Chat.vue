<template>
    <div class="chatContainer">
        <div class="textPage" style="display:none">
          <div class="textHeader">
            <div id="chatHeader" data-content></div>
            <div class="exit" @click="closeChat" style="cursor: pointer;">
              <svg width="12" height="12" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.1665 1.66667L6.99983 7.5M6.99983 7.5L12.8332 13.3333M6.99983 7.5L12.8332 1.66667M6.99983 7.5L1.1665 13.3333" fill="white" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div class="texts">
            <div v-for="message in messages" :key="message.index" :class="message.who === 'you' ? 'you' : 'admin'">
              <span>{{message.message}}</span>
            </div>
            <div id="bottommm"></div>
          </div>
          <a href="#bottommm" id="toBot" style="display: none;">ok</a>
          <div class="writePage">
            <input id="labelChat" @keyup.enter="sentMessage" v-model="message" :placeholder="$t('chat_holder')" type="text">
            <label for="labelChat" style="display: none;" id="clickLabel"></label>
            <img @click="sentMessage" src="~/assets/images/icons/sendMessage.png" alt=""></div>
        </div>
        <div class="chatBtn" @click="openChat">
          <img src="~/assets/images/icons/chat.png" alt="">
        </div>
    </div>
</template>

<script>
import io from "socket.io-client";
export default {
    head(){
        return{
            script:[
              {
                src: `${process.env.socketUrl}/socket.io/socket.io.js`,
              },
            ]
        }
    },
    data(){
      return{
        messages:[],
        message:'',
        socket:'',
        socketId : '',
        // input :
      }
    },
    mounted(){
      // this.$client_chat();

      this.socket = io.connect(process.env.socketUrl,{secure:true})
      this.socket.on("admin-message",(m)=>{
        this.messages.push({
          message: m.lastMessage,
          who:'admin',
          index: this.messages.length,
        })
      });
    },
    methods:{
      openChat(){
        const chat = document.querySelector(".textPage");
        chat.style.display = 'block';
        this.socketId = localStorage.getItem('socketId');
        if(this.socketId === '' || this.socketId === null){
          this.socket.emit("new-user");
        }else{
          this.socket.emit('login',this.socketId);
        }
        this.socket.on("new-user-login",(id)=>{
          this.socketId = id.id;
          localStorage.setItem("socketId",id.id);
        })
        this.socket.on("all-messages",(messages)=>{
          if(messages.messages){
            for(let i = 0; i<messages.messages.length; i++){
              this.messages[i] = {
                message : messages.messages[i].message,
                who : messages.messages[i].who,
                index : i,
              }
            }
          }
          this.messages.push({
            message : 'done',
            who : 'you',
            index : 30,
          })
          this.messages.pop();
          const toBottom = document.querySelector("#toBot");
          toBottom.click();
        })
      },
      closeChat(){
        const chat = document.querySelector(".textPage");
        chat.style.display = 'none';
        this.messages = [];
      },
      sentMessage(){
        const toBottom = document.querySelector("#toBot");
        const label = document.querySelector("#clickLabel");
        const obj = {
          who:'you',
          message:this.message
        }
        this.messages.push(obj)
        this.socket.emit('send-chat-message',{id:this.socketId,message:this.message})
        this.message = '';
        toBottom.click();
        label.click();
      },
    }
}
</script>

<style lang='scss'>
  $red : #8DC63F;
  $gray : #999999;
  $fontSize: 18px;
  $fontSmall: 16px;
  $fontLarge: 20px;

  @mixin  tablet {
    @media (max-width:1000px) {
      @content
    }
  };
  @mixin  mobile {
    @media (max-width:640px) {
      @content
    }
  }


  .chatContainer{
    position: fixed;
    z-index: 1000000000;
    bottom: 10%;
    right: 2.5%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .textPage{
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
      width: 400px;
      height: 700px;
      max-height: 500px;
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
      @include mobile{
        height: 400px;
        width: 100%;
      }
      .textHeader{
        display: flex;
        justify-content: space-between;
        padding: 15px;
        background-color: $red;
        color: white;
      }
      .texts{
        background: #d9d9d9;
        height: 410px;
        overflow-x: hidden;
        overflow-y: auto;
        padding-bottom: 50px;
        @include mobile{
          height: 315px;
        }
        .admin{
          margin: 10px;
          width: 100%;
          display: flex;
          justify-content: flex-end;
          span{
            background: #b8baf4;
            margin-right: 20px;
            padding: 10px;
            border-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
            width: fit-content;
          }
        }
        .you{
          box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
          margin: 10px;
          width: fit-content;
          padding: 10px;
          border-radius: 10px;
        }

      }
      .writePage{
        background: white;
        height: 40px;
        display: flex;
        align-items: center;
        input{
          height: 40px;
          width: 90%;
          font-size: $fontLarge;
          border: none;
          outline: none;
          resize: none;
          padding: 10px;
          box-sizing: border-box;
          &::-webkit-scrollbar{
            display: none;
          }
        }
        img{
          cursor: pointer;
        }
      }
    }
    .chatBtn{
      background: $red;
      width: 50px;
      height: 50px;
      padding: 10px;
      border-radius: 50%;
      cursor: pointer;
      img{
        width: 100%;
        filter: invert(1);
      }
    }
  }
  // #bottommm{
  //   margin-top: 80px;
  // }
</style>
