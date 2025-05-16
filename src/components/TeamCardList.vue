<template>
	<div id="teamCardList">
		<van-card
				v-for="team in props.teamList"
				:desc="team.description"
				:title="team.name"
		>
			<template #tags>
				<van-tag plain type="primary" style="margin-right: 8px;margin-top: 8px">
					{{ teamStatus[team.status] }}
				</van-tag>
			</template>
			<template #footer>
				<van-button size="mini">加入队伍</van-button>
			</template>
		</van-card>
	</div>



</template>

<script setup lang="ts">
import type {teamType} from "../models/team";
import {teamStatus} from "../ constant/TeamStatus";


interface TeamCardListProps {
	teamList: teamType[];
}

const props = defineProps<TeamCardListProps>();

</script>

<style scoped>

</style>
