<template>
	<van-cell title="昵称" to="/user/edit" is-link :value="user.username" @click="doEdit('username','昵称',user.username)"/>
	<van-cell title="账号" to="/user/edit" is-link :value="user.userAccount" @click="doEdit('userAccount','账号',user.userAccount)"/>
	<van-cell title="头像" to="/user/edit" is-link :value="user.avatarUrl">
		<img style="height: 48px" :src="user.avatarUrl" />
	</van-cell>
	<van-cell title="性别" to="/user/edit" is-link :value="user.gender" @click="doEdit('gender','性别',user.gender)"/>
	<van-cell title="电话" to="/user/edit" is-link :value="user.phone" @click="doEdit('phone','电话',user.phone)"/>
	<van-cell title="邮箱" to="/user/edit" is-link :value="user.email" @click="doEdit('email','邮箱',user.email)"/>
	<van-cell title="创建时间" :value="user.createTime.toISOString()" />
</template>

<script setup lang="ts">

import router from "../router";

const user = {
   id: 1,
  username: 'zll',
  userAccount: 'zll123',
  avatarUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
  gender: '女',
  phone: '12345678901',
  email: 'zll@example.com',
  createTime: new Date(),
}

const doEdit = (editKey:string,editName:string,currentValue:string) => {
	router.push({
		path: '/user/edit',
		query: {
			editKey,
			currentValue,
			editName
		}
	})
}


</script>

<style scoped>

</style>
