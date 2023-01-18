/** @type {import('./$types').Actions} */
export const actions = {
  foo: async (event) => {
    const data = await event.request.formData()
    console.log(data.get('fname'))

  },
  bar: async (event) => {
    const data = await event.request.formData()
    console.log(data)
    //console.log(event)
  }
};

