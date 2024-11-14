ServerEvents.recipes(Recipe => 
{
    function Charging_Recipe(item_input, count_output, item_output) 
    {
     Recipe.custom
     (
      {
       "type": "ae2:charger",
       "ingredient": 
       {
        "item": item_input 
       },
       "result": 
       {
        "count": count_output,
        "id": item_output
       }
      }
     )
    }
})
