export default async ({ store }) => {
  // dispatch an action
  await store.dispatch('getFoodData')
}
