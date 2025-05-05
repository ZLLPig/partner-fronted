<template>

	<van-card
			v-for="user in props.userList"
			:desc="user.profile"
			:title="user.username"
			:thumb="user.avatarUrl"
	>
		<template #tags>
			<van-tag plain type="primary" v-for="tags in user.tags" style="margin-right: 8px;margin-top: 8px">
				{{ tags }}
			</van-tag>
		</template>
		<template #footer>
			<van-button size="mini">联系我</van-button>
		</template>
	</van-card>

</template>

<script setup lang="ts">
import type {userType} from "../models/user";

interface UserCardListProps {
	userList: userType[];
}

const props = defineProps<UserCardListProps>();

</script>

<style scoped>

</style>
