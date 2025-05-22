<template>
	<div id="teamPage">
		<van-search v-model="value" placeholder="搜索队伍" @search="doSearch"/>
		<van-button type="primary" @click="doJoinTeam">创建队伍</van-button>
		<van-empty v-if="teamList.length < 1" description="暂无数据"/>
		<TeamCardList :teamList="teamList" />
	</div>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";
import TeamCardList from "../components/TeamCardList.vue";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/axios.ts";
import {showFailToast} from "vant";

const router = useRouter()

const teamList = ref([])

const value = ref('');

const doJoinTeam = () => {
	router.push({
		path:'/team/add'
	})
}

const searchTeam = async (val:'') => {
	const res = await myAxios.get(`/team/list/my`,{
		params:{
			searchText: val,
			pageNum:1
		}
	})
	if(res?.code === 0 && res.data){
		teamList.value = res.data
	}else{
		showFailToast("搜索队伍失败")
	}
}

onMounted( () => {
	searchTeam('');
})

const doSearch = (val) => {
	searchTeam(val);
}



</script>

<style scoped>

</style>
