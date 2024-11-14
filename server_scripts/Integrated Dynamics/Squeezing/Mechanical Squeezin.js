ServerEvents.recipes(Receita => 
{
  function Mecha_Squeezing_Recipes(item_input, item_output, duration) 
  {
    Receita.custom
    ({
      "type": "integrateddynamics:mechanical_squeezer",
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
      ],
      "duration": duration
    })
  }

Mecha_Squeezing_Recipes("allthemodium:allthemodium_ingot", "kubejs:silent_allthemodium_plate", 20)

Mecha_Squeezing_Recipes("allthemodium:vibranium_ingot", "kubejs:silent_vibranium_plate", 20)

Mecha_Squeezing_Recipes("allthemodium:unobtainium_ingot", "kubejs:silent_unobtainium_plate", 20)

Mecha_Squeezing_Recipes("allthemodium:allthemodium_plate", "allthemodium:allthemodium_rod", 20)

})