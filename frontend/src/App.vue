<template>
	<div>
		<router-view/>
	</div>
</template>
<script>
export default {
	name:'app',
	data: function () {
		return { authenticated: false }
	},
	created () { this.isAuthenticated() },
	watch: {
		// Everytime the route changes, check for auth status
		'$route': 'isAuthenticated'
	},
	methods: {
		async isAuthenticated () {
			this.authenticated = await this.$auth.isAuthenticated()
		}
	}
}
</script>
