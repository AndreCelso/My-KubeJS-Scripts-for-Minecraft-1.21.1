ServerEvents.recipes(Receita =>
{
  function Reaction_Recipes(duration, fluid_Amount, fluid_Input, gas_Amount, gas_Input, gas_Output, gas_Output_Amount, Input_Count, Item_Input, Output_Count, Item_Output)
  {
    Receita.custom(
    {
      "type": "mekanism:reaction",
      "duration": duration,
      "fluid_input": 
      {
        "amount": fluid_Amount,
        "tag": fluid_Input
      },
      "gas_input": 
      {
       "amount": gas_Amount,
       "gas": gas_Input
      },
      "gas_output": 
      {
       "amount": gas_Output_Amount,
       "id": gas_Output
      },
      "item_input": 
      {
       "count": Input_Count,
       "tag": Item_Input
      },
      "item_output": 
      {
       "count": Output_Count,
       "id": Item_Output
      }
     })
   }

//Receita de Slime Block com Cactus na Pressurized Reaction Chamber
Reaction_Recipes(27, 1000, "minecraft:water", 250, "mekanism:hydrogen", "mekanism:ethene", 50 , 10, "minecraft:cactus", 5, "minecraft:slime_block")

})