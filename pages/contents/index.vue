<template>
<body>
  <div id="title" class="title">
    <h1 id="title_name" class="title_name">{{ title_name }}</h1>
    <p id="title_text" class="title_text">{{ title_text }}</p>
  </div>
  <div class="accordion">
    <h1 id="sub_title" class="sub_title">{{ title_name }}入門編</h1>
    <ul>
      <li v-for="(item, index) in getContents" :key="item.id">
        <p>{{item.contens}}</p>
        <button
          type="button"
          class="accordion__toggle"
          :class="{ 'is-active': isOpen[index] }"
          @click="handleToggle(index)"
        >
          <span v-text="item.name" />
        </button>
        <transition
          name="topSlide"
          @before-enter="beforeEnter"
          @enter="enter"
          @before-leave="beforeLeave"
          @leave="leave"
        > 
          <v-container class="topSlide" v-show="isOpen[index]">
            <iframe class="topSlide"
            width="560"
            height="315"
            src= "https://www.youtube.com/embed/WYDzyIgOezQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </v-container>
          
        </transition>
      </li> 
    </ul>  

    <h1 id="sub_title" class="sub_title">{{ title_name }}中級者編</h1>
      <ul>
        <li v-for="(item, index2) in getContents" :key="item.id">
          <button
            type="button"
            class="accordion__toggle"
            :class="{ 'is-active': isOpen2[index2] }"
            @click="handleToggle2(index2)"
          >
            <span v-text="item.name" />
          </button>
          <transition
            name="topSlide"
            @before-enter="beforeEnter"
            @enter="enter"
            @before-leave="beforeLeave"
            @leave="leave"
          > 
            <v-container class="topSlide" v-show="isOpen2[index2]">
              <iframe class="video"
              width="560"
              height="315"
              src= "https://www.youtube.com/embed/WYDzyIgOezQ"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </v-container>
          </transition>
        </li> 
      </ul>  

    <h1 id="sub_title" class="sub_title">{{ title_name }}上級者編</h1>
      <ul>
        <li v-for="(item, index3) in getContents" :key="item.id">
          <button
            type="button"
            class="accordion__toggle"
            :class="{ 'is-active': isOpen3[index3] }"
            @click="handleToggle3(index3)"
          >
            <span v-text="item.name" />
          </button>
          <transition
            name="topSlide"
            @before-enter="beforeEnter"
            @enter="enter"
            @before-leave="beforeLeave"
            @leave="leave"
          > 
            <v-container class="topSlide" v-show="isOpen3[index3]">
              <iframe class="video"
              width="560"
              height="315"
              src= "https://www.youtube.com/embed/WYDzyIgOezQ"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </v-container>
          </transition>
        </li> 
      </ul>  
    </div>
  </body>
</template>


<script>
export default {
  data: function() {
    return{
      title_name:"HTML&CSS",
      title_text:"Webサイトを作成するのに使われます。" ,
      isOpen: [],
      isOpen2: [],
      isOpen3: [],
    }
  },
  computed:{

  },
  computed: {
    getContents() {
      const data = [
        {
          id: 1,
          name: 'Channel',
          content: "aaaaaaaa",
        },
        {
          id: 2,
          name: 'Channel2',
          content: 'コンテンツコンテンツコンテンツ',
        },
        {
          id: 3,
          name: 'Channel3',
          content: 'コンテンツコンテンツコンテンツ',
        },
      ]
      return data
    },
  },

  created() {
    // アコーディオンの数だけ開閉フラグを作成
    this.isOpen = Array(this.getContents.length).fill(false);
    this.isOpen2 = Array(this.getContents.length).fill(false);
    this.isOpen3 = Array(this.getContents.length).fill(false); 
  },

  methods: {
    // メニューを開閉する
    handleToggle(index) {
      this.isOpen.splice(index, 1, !this.isOpen[index])
    },
    handleToggle2(index2) {
      this.isOpen2.splice(index2, 1, !this.isOpen2[index2])
    },
      handleToggle3(index3) {
      this.isOpen3.splice(index3, 1, !this.isOpen3[index3])
    },
  

    // スライド開閉要素の高さ取得
    beforeEnter(el) {
      el.style.height = '0'
    },

    enter(el) {
      el.style.height = el.scrollHeight + 'px'
    },

    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px'
    },

    leave(el) {
      el.style.height = '0'
    },
  },
}

</script>
<style lang="scss" scoped>

.title{
  $this: &;
    width: 100%;
    height: 100%;
    text-align:center;

    .title_name{
      color: #7fff7f;
      font-size: 48px;
    }

    .title_text{
      color: rgb(255, 248, 248);
      font-size: 28px;
    }
    
    
}

.accordion {
  $this: &;
    background-color: #202020;
    color: rgb(255, 255, 255);
    width: 50%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    top: 150px;
    left: 0px;
    right: 0px;

  .sub_title{
    width:100%;
    height: 100%;
    text-align:center;
    font-size: 38px;
    color: #7fff7f; 
    }
}

.accordion__toggle {
  font-size: 22px;
  font-weight: bold;
  line-height: 2.818;
  text-align: center;
  display: block;
  width: 100%;
  border-bottom: 1px solid #ebebeb;
  position: relative;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 18px;
    height: 3px;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    right: 22px;
  }

  &::before {
    transform: translate(0, -50%);
  }

  &::after {
    transition: all 0.3s ease-in-out;
    transform: translate(0, -50%) rotate(90deg);
  }

  &.is-active {
    &::after {
      transform: translate(0, -50%) rotate(0deg);
    }
  }
}

.topSlide {
  transition: height 0.3s ease-in-out;
  overflow: hidden;
}

.topSlide-enter-active {
  animation-duration: 0.3s;
  animation-fill-mode: both;
}

.topSlide-leave-active {
  animation-duration: 0.3s;
  animation-fill-mode: both;
}

.vodeo{

}
</style>