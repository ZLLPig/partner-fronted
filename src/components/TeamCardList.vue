<template>
  <div id="teamCardList" style="padding-bottom: 50px">
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
        <van-button
            v-if="team.id === currentUser?.id"
            size="mini" plain type="primary"
            @click="doJoinTeam(team.id)">
          加入队伍
        </van-button>
        <van-button
            v-if="team.userId === currentUser?.id"
            size="mini" plain
            @click="doUpdateTeam(team.id)">
          更新队伍
        </van-button>
        <van-button size="mini" plain type="primary" @click="doQuitTeam(team.id)">退出队伍</van-button>
        <van-button
            v-if="team.userId === currentUser?.id"
            size="mini" plain
            type="primary"
            @click="doDeleteTeam(team.id)">解散队伍</van-button>
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
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../service/user.ts";
import {useRouter} from "vue-router";

interface TeamCardListProps {
  teamList: teamType[];
}

const props = defineProps<TeamCardListProps>();

const currentUser = ref();

onMounted(async () => {
  currentUser.value = await getCurrentUser()
})

/**
 * 加入队伍
 */
const doJoinTeam = async (id: number) => {
  const res = await myAxios.post("/team/join", {
    teamId: id
  });
  if (res?.code === 0) {
    showSuccessToast("加入成功");
  } else {
    showFailToast("加入失败" + (res.message ? `，${res.message}` : ""));
  }
}

const router = useRouter();

// 跳转至更新队伍页
const doUpdateTeam = (id: number) => {
  router.push({
    path: '/team/update',
    query: {
      id,
    }
  })
}

/**
 * 解散队伍
 */
const doQuitTeam = async (id: number) => {
    const res = await myAxios.post(`/team/quit`,{
        id
    });
    if(res?.code === 0) {
      showSuccessToast("操作成功")
    }else{
      showFailToast("操纵失败"+ (res.message ? `，${res.message}` : ""));
    }
}

/**
 * 退出队伍
 */
const doDeleteTeam = async (id: number) => {
  const res = await myAxios.post(`/team/delete`,{
      id
  });
  if(res?.code === 0) {
    showSuccessToast("操作成功")
  }else{
    showFailToast("操纵失败"+ (res.message ? `，${res.message}` : ""));
  }
}

</script>

<style scoped>

</style>
