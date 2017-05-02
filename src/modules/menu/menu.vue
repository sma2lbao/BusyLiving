<template lang="html">
    <article class="">
        <mt-header :title="selected">
          <i class="fa fa-user-circle-o fa-lg" slot="left" @click="popupVisible = true;"></i>
          <i class="fa fa-plus fa-lg" slot="right"></i>
        </mt-header>

        <mt-search v-model="value" :show="isSearch" :class="{ 'search-def': !isSearch, 'search-focus': isSearch}">
          <mt-cell
            title="item.title"
            value="item.value">
          </mt-cell>
          <mt-cell
            title="item.title"
            value="item.value">
          </mt-cell>
          <mt-cell
            title="item.title"
            value="item.value">
          </mt-cell>
        </mt-search>

        <mt-tab-container v-model="active">
          <mt-tab-container-item id="grief">

          </mt-tab-container-item>
          <mt-tab-container-item id="sweet">
            <mt-cell v-for="n in 5" title="甜"></mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="suffering">
            <mt-cell v-for="n in 7" title="苦"></mt-cell>
          </mt-tab-container-item>
          <mt-tab-container-item id="burn">
            <mt-cell v-for="n in 7" title="辣"></mt-cell>
          </mt-tab-container-item>
        </mt-tab-container>

        <mt-tabbar v-model="selected">
          <mt-tab-item id="酸">
            <img slot="icon" src="">
            酸
          </mt-tab-item>
          <mt-tab-item id="甜">
            <img slot="icon" src="">
            甜
          </mt-tab-item>
          <mt-tab-item id="苦">
            <img slot="icon" src="">
            苦
          </mt-tab-item>
          <mt-tab-item id="辣">
            <img slot="icon" src="">
            辣
          </mt-tab-item>
        </mt-tabbar>

        <mt-popup
            class="user-menu"
            position="left"
            v-model="popupVisible"
            popup-transition="popup-fade">
            <div>
                <mt-cell title="标题文字">
                    <span>icon 是图片</span>
                    <img slot="icon" src="" width="24" height="24">
                </mt-cell>
                <mt-cell title="标题文字">
                    <span>icon 是图片</span>
                    <img slot="icon" src="" width="24" height="24">
                </mt-cell>
                <mt-cell title="标题文字">
                    <span>icon 是图片</span>
                    <img slot="icon" src="" width="24" height="24">
                </mt-cell>
            </div>
        </mt-popup>
    </article>
</template>

<script>
export default {
    name: 'menu',
    data: function () {
        return {
            selected: '酸',
            value: null,
            result: [
                { title: 'title', value: 'value' },
                { title: 'title', value: 'value' },
                { title: 'title', value: 'value' },
                { title: 'title', value: 'value' },
                { title: 'title', value: 'value' },
            ],
            isSearch: false,
            popupVisible: false,
        }
    },
    computed: {
        active: function () {
            switch (this.$data.selected) {
                case '酸':
                    return 'grief'
                    break;
                case '甜':
                    return 'sweet';
                    break;
                case '苦':
                    return 'suffering';
                    break;
                case '辣':
                    return 'burn';
                    break;
                default:
                    return 'grief';
            }
        }
    },
    methods: {
        focuSearch: function () {
            console.log('focus');
        }
    },
    watch: {
        value: function (newVal, oldVal) {
            if (newVal) {
                this.$data.isSearch = true;
            }
            else {
                this.$data.isSearch = false;
            }
        },
    }
}
</script>

<style lang="css" scoped>
    .search-def{height: 100%;}
    .search-focus{height: calc(100vh - 40px);}
    .mint-search{position: relative;}
    .user-menu{width: 70%;height: 100%;}
    .fade-test{position: fixed;top: 0;bottom: 0;left: 0;width: 70%;background-color: #fff;z-index: 9999;}
    .fade-enter{width: 0;}
    .fade-enter-active{transition: all 1s ease;}

</style>
