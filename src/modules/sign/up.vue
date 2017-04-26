<template lang="html">
    <article class="">
        <mt-header title="">
          <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
          </router-link>
        </mt-header>
        <section>
            <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
            <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
            <mt-field label="验证码" v-model="captcha">
                <img src="" height="45px" width="100px">
            </mt-field>
            <mt-button type="primary" size="large">注册</mt-button>
        </section>
    </article>
</template>

<script>
export default {
    name: 'signUp',
    data: function () {
        return {
            username: '',
            password: '',
            email: '',
            phone: '',
            birthday: '',
            captcha: '',
        }
    }
}
</script>

<style lang="css">
</style>
