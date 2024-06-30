const url = 'https://dummyjson.com/recipes'
// use Cusine=Indian + Pakistani as  "Popular"
//Name -> name of the item
//Image -> image of the item
//mealType[0] :Breakfast Dinner Lunch
//rating

let data
async function fetchFood () {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Data fetching got error ${response.status}`)
    }

    data = await response.json()

  } catch (error) {
    console.error('Could not fetch recipes:', error)
  }
}

fetchFood()

export default data


// data.recipes.map((value, id) => {
//     //fecthing the popular dishes
//     if (value.cuisine=="Indian" || value.cuisine=="Pakistani" ) {
//         const Popular = value.name  
//       }
//       //images of dish
//       const 
//   })