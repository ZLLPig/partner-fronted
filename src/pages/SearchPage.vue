<template>
	<form action="/">
		<van-search
				v-model="searchText"
				show-action
				placeholder="请输入搜索关键词"
				@search="onSearch"
				@cancel="onCancel"
		/>
	</form>
	<van-divider>已选标签</van-divider>
	<div v-if="activeId.length === 0">请选择标签</div>

	<van-row :gutter="16">
		<van-col v-for="tag in activeId" style="padding: 5px 7px">
			<van-tag  closeable size="medium" type="primary" @close="doClose(tag)">
				{{ tag }}
			</van-tag>
		</van-col>
	</van-row>

	<van-divider>选择标签</van-divider>
	<van-tree-select
			v-model:active-id="activeId"
			v-model:main-active-index="activeIndex"
			:items="originItems"
	/>
<div style="padding: 8px">
	<van-button block type="primary"  @click="doSearchResult">搜索</van-button>
</div>

</template>


<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";

const searchText = ref('');

//	右侧选中项的 id，支持传入数组
const activeId = ref([]);
//	左侧选中项的索引
const activeIndex = ref(0);


const originItems = [
	{
		text: '性别',
		children: [
			{text: '男', id: '男'},
			{text: '女', id: '女'},
		],
	},
	{
		text: '年级',
		children: [
			{text: '大一', id: '大一'},
			{text: '大二', id: '大二'},
			{text: '大三', id: '大三'},
			{text: '大四', id: '大四'},
			{text: '大五', id: '大五'},
			{text: '大六', id: '大六'},
			{text: '大七', id: '大七'},
		],
	}
];

//标签列表
let tagList = ref(originItems);

const onSearch = () => {
	tagList.value = originItems.map(parentTag => {
		const tempChildren = [...parentTag.children];
		const tempParent = {...parentTag};
		tempParent.children = tempChildren.filter(item => {
			item.text.includes(searchText.value);
		})
		return tempParent;
	})
};


const onCancel = () => {
	searchText.value = '';
	tagList.value = originItems ;
}

const doClose = (tag: any) => {
	activeId.value = activeId.value.filter(item => {
		return item !== tag
	})
};

const router = useRouter()

const doSearchResult = () => {
	 router.push({
		 path:'/user/result',
		 query:{
			 activeId:activeId.value
		 }
	 })
}


</script>

<style scoped>

</style>
