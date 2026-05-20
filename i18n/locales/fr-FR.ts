export default {
  components: {
    myPlugin: {
      title: "Mon Plugin",
      description: "Une description",
      itemCount: ({ count }: { count: number }) =>
        count === 1 ? "1 élément" : `${count} éléments`,
    },
  },
}