<template>
<div id="teamPage">
	<van-button type="primary" @click="doJoinTeam">创建队伍</van-button>

	<TeamCardList :teamList="teamList" />
</div>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";
import TeamCardList from "../components/TeamCardList.vue";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/axios.ts";
import {showFailToast, showSuccessToast} from "vant";

const router = useRouter()

const teamList = ref([])

const doJoinTeam = () => {
	router.push({
		path:'/team/add'
	})
}

onMounted(async () => {
   const res = await myAxios.get(`/team/list`);
	 if(res?.code === 0 && res.data){
		 showSuccessToast("获取队伍列表成功")
		 teamList.value = res.data
	 }else{
		 showFailToast("获取队伍列表失败")
	 }
})



</script>

<style scoped>

</style>
