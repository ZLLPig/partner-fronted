<template>

 <UserCardList :user-list="userList" />

	<!--!userList表示userList本身是不是null或者undefined-->
	<!--userList.length < 1 表示userList里面有没有数据-->
	<van-empty v-if="!userList || userList.length < 1" description="暂无数据" />

</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/axios.ts";
import qs from 'qs';
import UserCardList from "../components/UserCardList.vue";

const route = useRoute()

//data  undefined的原因
const { activeId } = route.query


//定义用户列表 展示时遍历用户列表
const userList = ref([]);

onMounted( async () => {

	const userListData = await myAxios.get('/user/recommend', {
		params: {
			tagNameList: activeId
		},
		paramsSerializer: params => {
			return qs.stringify(params, {indices: false})
		}
	})
			// then里面没有return数据 所以userListData是空的前端页面无数据展示
			.then(function (response) {
				console.log('/user/recommend success', response);
				return response.data;   // ！！！！这里一定要加return，一个data就可以，拦截器中已经取过data
			})
			.catch(function (error) {
				console.log('/user/recommend error', error);
			})
	if(userListData){
		userListData.forEach(user => {
			if(user.tags){
				user.tags = JSON.parse(user.tags);
			}
		})
		userList.value = userListData;
	}
})

</script>

<style scoped>

</style>
