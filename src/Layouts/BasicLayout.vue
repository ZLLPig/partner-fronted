<template>
	<van-nav-bar
			title="标题"
			right-text="按钮"
			left-arrow
			@click-left="onClickLeft"
			@click-right="onClickRight"
	>
		<template #right>
			<van-icon name="search" size="18"/>
		</template>
	</van-nav-bar>

	<router-view/>

	<van-tabbar route>
		<van-tabbar-item  to="/" icon="home-o" name="index">主页</van-tabbar-item>
		<van-tabbar-item to="/team" icon="search" name="team">队伍</van-tabbar-item>
		<van-tabbar-item to="/user" icon="friends-o" name="user">个人</van-tabbar-item>
	</van-tabbar>

</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'


const router = useRouter()

const onClickLeft = () => {
   router.back();
}
const onClickRight = () => {
  router.push({
		path: '/search'
	})
}

</script>

<style scoped>

</style>
