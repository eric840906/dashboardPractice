<template>
  <div>
    <div class="tab-content" style="justify-content: start;">
      <div class="intro-block">
        <h3 class="block-title">Intro</h3>
        <ul class="intro-list">
          <li><mac-icon/><span>Front-end Engineer</span></li>
          <li><tool-icon/><span>Javascript, Vue.js, Scss</span></li>
          <li><edu-icon/><span>National Taipei University of Technology</span></li>
          <li><marker-icon/><span>Taiwan</span></li>
          <li><house-icon/><span>Cat house</span></li>
        </ul>
      </div>
      <div class="new-post">
        <h3 class="block-title">Make a Post</h3>
        <!-- <div class="user-row">
          <img :src="userInfo.image" alt="">
          <div class="post-info">
            <h5>name</h5>
            <h5>time</h5>
          </div>
        </div> -->
        <form action="">
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <input class="submit-btn" type="button" value="SUBMIT">
        </form>
      </div>
      <div class="recent-post">
        <h3 class="block-title">Recent Posts</h3>
        <div class="d-flex flex-wrap">
          <div class="post-block">
            <div class="user-info">
              <img :src="userInfo.image" alt="">
              <div>
                <p>zo6596</p>
                <p class="date">2020/11/11</p>
              </div>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae nam tempore quo aspernatur architecto. Nesciunt odio, at sint quis id mollitia tempora recusandae, tenetur quibusdam quo qui aspernatur corporis ab.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae nam tempore quo aspernatur architecto. Nesciunt odio, at sint quis id mollitia tempora recusandae,
              tenetur quibusdam quo qui aspernatur corporis ab.Lorem
            </p>
          </div>
          <div class="post-block">
            <div class="user-info">
              <img :src="userInfo.image" alt="">
              <div>
                <p>zo6596</p>
                <p class="date">2020/11/11</p>
              </div>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae nam tempore quo aspernatur architecto. Nesciunt odio, at sint quis id mollitia tempora recusandae, tenetur quibusdam quo qui aspernatur corporis ab.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae nam tempore quo aspernatur architecto. Nesciunt odio, at sint quis id mollitia tempora recusandae,
              tenetur quibusdam quo qui aspernatur corporis ab.Lorem
            </p>
          </div>
          <div class="post-block">
            <div class="user-info">
              <img :src="userInfo.image" alt="">
              <div>
                <p>zo6596</p>
                <p class="date">2020/11/11</p>
              </div>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae nam tempore quo aspernatur architecto. Nesciunt odio, at sint quis id mollitia tempora recusandae, tenetur quibusdam quo qui aspernatur corporis ab.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae nam tempore quo aspernatur architecto. Nesciunt odio, at sint quis id mollitia tempora recusandae,
              tenetur quibusdam quo qui aspernatur corporis ab.Lorem
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/scss/theme.scss';
  .tab-content{
    display: flex;
    flex-wrap: wrap;
  }
  .intro-block{
    flex: 0 0 50%;
    @media (max-width: 768px) {
      flex: 0 0 100%;
    }
    .intro-list{
      .block-title{
        font-weight: bolder;
      }
      li{
        display: flex;
        .material-design-icon{
          vertical-align: -webkit-baseline-middle;
          margin-right: 20px;
        }
        span{
          align-self: center;
        }
      }
    }
  }
  .new-post{
    flex: 0 0 50%;
    @media (max-width: 768px) {
      margin-top: 30px;
      flex: 0 0 100%;
    }
    display: flex;
    flex-direction: column;
    .user-row{
      img{
        width: 50px;
        height: 50px;
        border-radius: 100%;
      }
      display: flex;
    }
    form{
      text-align: end;
      *{
        color: $background-text;
        font-family: 'Coiny', cursive, Avenir, Helvetica, Arial, sans-serif;
      }
      textarea{
        border: none;
        width: 100%;
        background-color: darken($background-color, 5%);
        border-radius: 5px;
        height: 150px;
        resize: none;
        transition: 0.5s all;
        &:focus{
          background-color: darken($base, 10%);
        }
      }
      .submit-btn{
        border: none;
        width: 80px;
        padding: 7px;
        background-color: darken($base, 10%);
        border-radius: 5px;
        transition: 0.3s all;
        &:hover{
          background-color: darken($base, 20%);
          color: $background-color;
        }
        &:active{
          background-color: darken($base, 30%);
        }
      }
    }
  }
  .recent-post{
    display: flex;
    flex: 0 0 100%;
    flex-direction: column;
    .post-block{
      display: flex;
      flex-direction: column;
      flex: 1 0 46%;
      margin: 0.5%;
      padding: 0 3% 3% 3%;
      border-radius: 5px;
      background-color: darken($background-color, 5%);
      @media (max-width: 768px) {
        flex: 0 0 100%;
        margin-top: 20px;
      }
      .user-info{
        margin: 20px 0;
        display: flex;
        .date{
          font-size: 12px;
        }
        img{
          width: 50px;
          height: 50px;
          border-radius: 100%;
        }
        p{
          margin: 5px 0 0 10px;
        }
      }
    }
  }
</style>
