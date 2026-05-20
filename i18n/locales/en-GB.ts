export default {
  components: {
    myPlugin: {
      title: "My Plugin",
      description: "A description",
      itemCount: ({ count }: { count: number }) => (count === 1 ? "1 item" : `${count} items`),
    },
  },
}