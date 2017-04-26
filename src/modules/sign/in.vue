<template lang="html">
    <article class="">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username" state="success"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-button type="default" size="large" @click="toMenu()">SingIn</mt-button>

        <aside class="signInBottom">
            <span @click="toSignUp()">注册账号</span>
            <span @click="toSafe()">忘记密码</span>
        </aside>
    </article>
</template>

<script>
import { Field } from 'mint-ui'

export default {
    name: 'SignIn',
    data: function () {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        toSignUp: function () {
            this.$router.push({path: '/SignUp'});
        },
        toMenu: function () {
            console.log('join');
            this.$router.push({path: '/Menu'});
        },
        toSafe: function () {
            console.log('safe');
        }
    }
}
</script>

<style lang="css" scoped>
    .signInBottom{overflow: hidden;}
    .signInBottom span:first-child{float: left;}
    .signInBottom span:last-child{float: right;}
</style>
