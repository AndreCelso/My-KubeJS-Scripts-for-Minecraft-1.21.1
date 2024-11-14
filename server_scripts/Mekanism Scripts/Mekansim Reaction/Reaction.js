/* ServerEvents.recipes(Receita =>
{
  function Reaction_Recipes(gas_Amount, gas_Input, gas_Output_Amount,gas_Output, duration, fluid_Amount, fluid_Input, Input_Count, Item_Input, Output_Count, Item_Output)
  {
    Receita.custom(
    {
      "type": "mekanism:reaction",
      "chemical_input": 
      {
        "amount": gas_Amount,
        "chemical": gas_Input
      },
      "chemical_output": 
      {
        "amount": gas_Output_Amount,
        "id": gas_Output
      },
      "duration": duration,
      "fluid_input": 
      {
        "amount": fluid_Amount,
        "tag": fluid_Input
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
//Reaction_Recipes(27, 1000, "minecraft:water", 250, "mekanism:hydrogen", "mekanism:ethene", 50 , 10, "minecraft:cactus", 5, "minecraft:slime_block")

Reaction_Recipes(250, "mekanism:hydrogen", 50 ,"mekanism:ethene", 27, 1000, "minecraft:water", 10, "minecraft:cactus", 5, "minecraft:slime_block")


}) */