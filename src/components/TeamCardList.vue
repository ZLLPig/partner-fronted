<template>
	<div id="teamCardList">
		<van-card
				v-for="team in props.teamList"
				:desc="team.description"
				:title="team.name"
				:thumb="teamImg"
		>
			<template #bottom>
				<div>
					最大人数：{{ team.maxNum }}
				</div>
				<div>
					创建时间：{{ team.createTime }}
				</div>
				<div v-if="team.expireTime">
					过期时间：{{ team.expireTime }}
				</div>
			</template>
			<template #tags>
				<van-tag plain type="primary" style="margin-right: 8px;margin-top: 8px">
					{{ teamStatus[team.status] }}
				</van-tag>
			</template>
			<template #footer>
				<van-button size="mini" plain type="primary" @click="doJoinTeam(team.id)">加入队伍</van-button>
			</template>
		</van-card>
	</div>


</template>

<script setup lang="ts">
import type {teamType} from "../models/team";
import {teamStatus} from "../ constant/TeamStatus";
import teamImg from "../assets/teamImg.png";
import myAxios from "../plugins/axios.ts";
import {showFailToast, showSuccessToast} from "vant";

interface TeamCardListProps {
	teamList: teamType[];
}

const props = defineProps<TeamCardListProps>();

/**
 * 加入队伍
 */
const doJoinTeam = async (id: number) => {
	const res = await myAxios.post("/team/join",{
		teamId: id
	});
	if (res?.code === 0) {
		showSuccessToast("加入成功");
	} else {
		showFailToast("加入失败" + (res.message ? `，${res.message}` : ""));	}
}

</script>

<style scoped>

</style>
