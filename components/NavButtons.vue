<template>
	<v-bottom-navigation
		v-model="currentRoute"
		:background-color="blok.background"
		:color="blok.color"
		:grow="blok.grow"
		:horizontal="blok.horizontal"
		:class="blok.helpers"
		:style="blok.style + growContainer"
	>
		<v-btn v-for="button in blok.buttons" :key="button._uid" :to="button.to">
			{{ button.text }}
			<v-icon v-for="icon in button.bicon" :key="icon._uid">
				{{ "mdi-" + icon.icon }}
			</v-icon>
		</v-btn>
	</v-bottom-navigation>
</template>

<script>
export default {
	props: ["blok"],
	data() {
		return {
			currentRoute: this.$route.path.split("/")[1],
			buttons: this.blok.buttons
		};
	},
	computed: {
		growContainer() {
			return this.blok.grow_container ? "flex-grow: 1;" : "";
		}
	}
};
</script>

<style lang="scss">
.v-item-group.v-bottom-navigation {
	width: auto;
	&--horizontal .v-btn {
		font-size: 14px;
		// max-width: none !important;
	}
}
.v-item-group.v-bottom-navigation:not(.v-bottom-navigation--horizontal) .v-btn {
	min-width: 60px !important;
	padding: 0;
}
.v-toolbar .v-bottom-navigation,
.v-footer .v-bottom-navigation {
	box-shadow: none;
}
.theme--dark.v-bottom-navigation .v-btn:not(.v-btn--active) {
	color: white !important;
}
.theme--light.v-bottom-navigation .v-btn:not(.v-btn--active) {
	color: black !important;
}
</style>
