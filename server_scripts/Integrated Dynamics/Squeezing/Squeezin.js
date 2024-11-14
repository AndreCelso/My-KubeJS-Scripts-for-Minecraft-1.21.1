ServerEvents.recipes(Receita => 
{
 function Squeezing_Recipes(item_input, item_output) 
 {
  Receita.custom
  ({
    "type": "integrateddynamics:squeezer",
    "input_item": 
    {
      "item": item_input
    },
    "output_items": 
    [
      {
        "item": 
        {
          "id": item_output
        }
      }
    ]
  })
 }

Squeezing_Recipes("allthemodium:allthemodium_ingot", "kubejs:silent_allthemodium_plate")

Squeezing_Recipes("allthemodium:vibranium_ingot", "kubejs:silent_vibranium_plate")

Squeezing_Recipes("allthemodium:unobtainium_ingot", "kubejs:silent_unobtainium_plate")

Squeezing_Recipes("allthemodium:allthemodium_plate", "allthemodium:allthemodium_rod")
})